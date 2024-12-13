<?php

namespace App\Services\Qbd;

use Illuminate\Support\Facades\DB;

class Invoice {

  private static function generateAddressXmlHelper($customer) {
    $address = $customer->billing_address ?? '';
    // QBD requires at most 41 chars per address line.
    // I cannot use <Addr5> because city, state, zipcode uses the 5th line.
    return '<Addr1>' . str_replace('&', '&amp;', substr($address, -41)) . '</Addr1>
            <Addr2>' . substr($customer->billing_contact, 0, 41) . '</Addr2>
            <Addr3>' . substr($customer->billing_phone_number, 0, 41) . '</Addr3>
            <Addr4>' . substr($customer->billing_email, 0, 41) . '</Addr4>';
  }

  /**
   * Issue a request to QuickBooks to add an invoice
   */
  public static function xmlRequestForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale) {
    $qbdInvoice = DB::select('SELECT i.qbd_connection_id, i.mass_invoice_number, i.mass_invoice_load_ids FROM qbd_invoices AS i WHERE i.id = ?', [(int) $ID])[0];

    if ($qbdInvoice->mass_invoice_number) {
      $massInvoiceLoadIds = explode(',', $qbdInvoice->mass_invoice_load_ids);
      $qbdConnectionId = $qbdInvoice->qbd_connection_id;
      $load = DB::select('SELECT l.customer_id FROM loads AS l WHERE l.id = ?', [(int) $massInvoiceLoadIds[0]])[0];
      $customerId = $load->customer_id;
      $refNumber = $qbdInvoice->mass_invoice_number;
      $poNumber = $qbdInvoice->mass_invoice_number;
    } else {
      $load = DB::select('SELECT i.qbd_connection_id, l.customer_id, l.load_unique_id, l.refrence_id FROM loads AS l JOIN qbd_invoices AS i ON l.id = i.load_id WHERE i.id = ?', [(int) $ID])[0];
      $qbdConnectionId = $load->qbd_connection_id;
      $customerId = $load->customer_id;
      $refNumber = $load->load_unique_id;
      // QBD says max length is 25.
      $poNumber = substr($load->refrence_id ?? '', 0, 25);
    }

    $customer = DB::select('SELECT q.quickbooks_listid, c.* FROM qbd_customers AS q JOIN customers AS c ON q.customer_id = c.id WHERE q.qbd_connection_id = ? AND q.customer_id = ?', [$qbdConnectionId, $customerId])[0];

    $term = DB::select('SELECT quickbooks_listid, name FROM qbd_standard_terms WHERE qbd_connection_id = ? AND days = ?', [$qbdConnectionId, $customer->payment_terms_day])[0];

    $items = DB::select('SELECT it.id, it.quickbooks_listid, it.name, ii.description, ii.quantity, ii.amount FROM qbd_invoice_items AS ii JOIN qbd_items AS it ON ii.qbd_item_id = it.id WHERE ii.deleted_at IS NULL AND ii.qbd_invoice_id = ?', [(int) $ID]);
    $itemsStr = '';
    foreach ($items as $oneItem) {
      $itemsStr .= '<InvoiceLineAdd defMacro="MACROTYPE-' . $ID . '-' . $oneItem->id . '">
                        <ItemRef>
                            <ListID>' . $oneItem->quickbooks_listid . '</ListID>
                            <FullName>' . $oneItem->name . '</FullName>
                        </ItemRef>
                        <Desc>' . $oneItem->description . '</Desc>
                        <Quantity>' . $oneItem->quantity . '</Quantity>
                        <Amount>' . number_format($oneItem->amount, 2, '.', '') . '</Amount>
                    </InvoiceLineAdd>';
    }

    $xml = '<?xml version="1.0" encoding="utf-8"?>
            <?qbxml version="13.0"?>
            <QBXML>
                <QBXMLMsgsRq onError="stopOnError">
                    <InvoiceAddRq requestID="' . $requestID . '">
                        <InvoiceAdd defMacro="TxnID:' . $ID . '">
                            <CustomerRef>
                                <ListID>' . $customer->quickbooks_listid . '</ListID>
                                <FullName>' . str_replace('&', '&amp;', $customer->company_name) . '</FullName>
                            </CustomerRef>
                            <RefNumber>' . $refNumber . '</RefNumber>
                            <BillAddress>'
      . self::generateAddressXmlHelper($customer) .
      '<City>' . $customer->billing_city . '</City>
                                <State>' . $customer->billing_state . '</State>
                                <PostalCode>' . $customer->billing_zip_code . '</PostalCode>
                            </BillAddress>
                            <PONumber>' . $poNumber . '</PONumber>
                            <TermsRef>
                                <ListID>' . $term->quickbooks_listid . '</ListID>
                                <FullName>' . $term->name . '</FullName>
                            </TermsRef>
                            ' . $itemsStr . '
                        </InvoiceAdd>
                    </InvoiceAddRq>
                </QBXMLMsgsRq>
            </QBXML>';
    return $xml;
  }

  /**
   * Handle a response from QuickBooks indicating a new invoice has been added
   */
  public static function xmlResponseForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents) {
    DB::update(
      'UPDATE qbd_invoices SET quickbooks_txnid = ?, quickbooks_editsequence = ? WHERE id = ?',
      [$idents['TxnID'], $idents['EditSequence'], (int) $ID]
    );

    $xml = simplexml_load_string($xml) or die("Error: Cannot create object");
    $InvoiceLineRet = $xml->QBXMLMsgsRs->InvoiceAddRs->InvoiceRet->InvoiceLineRet;
    foreach ($InvoiceLineRet as $val) {
      $item = DB::select('SELECT DISTINCT(it.id) as item_id FROM qbd_invoice_items AS ii JOIN qbd_items AS it ON ii.qbd_item_id = it.id WHERE it.quickbooks_listid = ? AND ii.qbd_invoice_id = ?', [(string) $val->ItemRef->ListID, (int) $ID])[0];
      DB::update(
        'UPDATE qbd_invoice_items SET quickbooks_txnlineid = ? WHERE qbd_invoice_id = ? AND qbd_item_id = ?',
        [(string) $val->TxnLineID, (int) $ID, $item->item_id]
      );
    }
  }

  public static function xmlRequestForMod($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale) {
    $qbdInvoice = DB::select('SELECT i.qbd_connection_id, i.quickbooks_txnid, i.quickbooks_editsequence, i.mass_invoice_number, i.mass_invoice_load_ids FROM qbd_invoices AS i WHERE i.id = ?', [(int) $ID])[0];

    if ($qbdInvoice->mass_invoice_number) {
      $massInvoiceLoadIds = explode(',', $qbdInvoice->mass_invoice_load_ids);
      $qbdConnectionId = $qbdInvoice->qbd_connection_id;
      $load = DB::select('SELECT l.customer_id FROM loads AS l WHERE l.id = ?', [(int) $massInvoiceLoadIds[0]])[0];
      $customerId = $load->customer_id;
      $refNumber = $qbdInvoice->mass_invoice_number;
      $poNumber = $qbdInvoice->mass_invoice_number;
      $quickbooks_txnid = $qbdInvoice->quickbooks_txnid;
      $quickbooks_editsequence = $qbdInvoice->quickbooks_editsequence;
    } else {
      $load = DB::select('SELECT i.qbd_connection_id, i.quickbooks_txnid, i.quickbooks_editsequence, l.customer_id, l.load_unique_id, l.refrence_id FROM loads AS l JOIN qbd_invoices AS i ON l.id = i.load_id WHERE i.id = ?', [(int) $ID])[0];
      $qbdConnectionId = $load->qbd_connection_id;
      $customerId = $load->customer_id;
      $refNumber = $load->load_unique_id;
      $poNumber = substr($load->refrence_id ?? '', 0, 25);
      $quickbooks_txnid = $load->quickbooks_txnid;
      $quickbooks_editsequence = $load->quickbooks_editsequence;
    }

    $customer = DB::select('SELECT q.quickbooks_listid, c.* FROM qbd_customers AS q JOIN customers AS c ON q.customer_id = c.id WHERE q.qbd_connection_id = ? AND q.customer_id = ?', [$qbdConnectionId, $customerId])[0];

    $term = DB::select('SELECT quickbooks_listid, name FROM qbd_standard_terms WHERE qbd_connection_id = ? AND days = ?', [$qbdConnectionId, $customer->payment_terms_day])[0];

    $items = DB::select('SELECT it.id, it.quickbooks_listid, it.name, ii.description, ii.quantity, ii.amount, ii.quickbooks_txnlineid FROM qbd_invoice_items AS ii JOIN qbd_items AS it ON ii.qbd_item_id = it.id WHERE ii.deleted_at IS NULL AND ii.qbd_invoice_id = ?', [(int) $ID]);
    $itemsStr = '';
    foreach ($items as $oneItem) {
      $item_quickbooks_txnlineid = '-1';
      if ($oneItem->quickbooks_txnlineid) {
        $item_quickbooks_txnlineid = $oneItem->quickbooks_txnlineid;
      }

      $itemsStr .=
        '<InvoiceLineMod>
          <TxnLineID>' . $item_quickbooks_txnlineid . '</TxnLineID>
          <ItemRef>
            <ListID>' . $oneItem->quickbooks_listid . '</ListID>
            <FullName>' . $oneItem->name . '</FullName>
          </ItemRef>
          <Desc>' . $oneItem->description . '</Desc>
          <Quantity>' . $oneItem->quantity . '</Quantity>
          <Amount>' . number_format($oneItem->amount, 2, '.', '') . '</Amount>
         </InvoiceLineMod>';
    }

    $xml = '<?xml version="1.0" encoding="utf-8"?>
            <?qbxml version="13.0"?>
            <QBXML>
                <QBXMLMsgsRq onError="stopOnError">
                    <InvoiceModRq requestID="' . $requestID . '">
                        <InvoiceMod>
                            <TxnID>' . $quickbooks_txnid . '</TxnID>
                            <EditSequence>' . $quickbooks_editsequence . '</EditSequence>
                            <CustomerRef>
                                <ListID>' . $customer->quickbooks_listid . '</ListID>
                                <FullName>' . str_replace('&', '&amp;', $customer->company_name) . '</FullName>
                            </CustomerRef>
                            <RefNumber>' . $refNumber . '</RefNumber>
                            <BillAddress>'
      . self::generateAddressXmlHelper($customer) .
      '<City>' . $customer->billing_city . '</City>
                                <State>' . $customer->billing_state . '</State>
                                <PostalCode>' . $customer->billing_zip_code . '</PostalCode>
                            </BillAddress>
                            <PONumber>' . $poNumber . '</PONumber>
                            <TermsRef>
                                <ListID>' . $term->quickbooks_listid . '</ListID>
                                <FullName>' . $term->name . '</FullName>
                            </TermsRef>
                            ' . $itemsStr . '
                        </InvoiceMod>
                    </InvoiceModRq>
                </QBXMLMsgsRq>
            </QBXML>';

    return $xml;
  }

  /**
   * Handle a response from QuickBooks indicating a new customer has been added
   */
  public static function xmlResponseForMod($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents) {
    DB::update(
      'UPDATE qbd_invoices SET quickbooks_txnid = ?, quickbooks_editsequence = ? WHERE id = ?',
      [$idents['TxnID'], $idents['EditSequence'], (int) $ID]
    );

    $xml = simplexml_load_string($xml) or die("Error: Cannot create object");
    $InvoiceLineRet = $xml->QBXMLMsgsRs->InvoiceModRs->InvoiceRet->InvoiceLineRet;
    foreach ($InvoiceLineRet as $val) {
      $item = DB::select('SELECT DISTINCT(it.id) as item_id FROM qbd_invoice_items AS ii JOIN qbd_items AS it ON ii.qbd_item_id = it.id WHERE it.quickbooks_listid = ? AND ii.qbd_invoice_id = ?', [(string) $val->ItemRef->ListID, (int) $ID])[0];
      DB::update(
        'UPDATE qbd_invoice_items SET quickbooks_txnlineid = ? WHERE qbd_invoice_id = ? AND qbd_item_id = ?',
        [(string) $val->TxnLineID, (int) $ID, $item->item_id]
      );
    }
  }
}

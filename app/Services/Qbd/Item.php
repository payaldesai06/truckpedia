<?php

namespace App\Services\Qbd;

use Illuminate\Support\Facades\DB;

class Item {
  /**
   * Issue a request to QuickBooks to add an item
   */
  public static function xmlRequestForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale) {
    $item = DB::select('SELECT name, qbd_connection_id FROM qbd_items WHERE id = ?', [(int) $ID])[0];
    $account = DB::select('SELECT quickbooks_listid FROM qbd_accounts WHERE qbd_connection_id = ?', [$item->qbd_connection_id])[0];
    $singleLoadItemNames = ['Hauling Fee', 'Fuel Surcharge', 'Accessorial Fee', 'Accessorial Deduction', 'Discount'];
    $itemName = $item->name;
    if (in_array($item->name, $singleLoadItemNames)) {
      $itemName = 'Service-' . $item->name;
    }

    $xml = '<?xml version="1.0" encoding="utf-8"?>
            <?qbxml version="13.0"?>
            <QBXML>
                <QBXMLMsgsRq onError="stopOnError">
                    <ItemServiceAddRq requestID="' . $requestID . '">
                        <ItemServiceAdd>
                            <Name>' . $itemName . '</Name>
                            <SalesOrPurchase>
                                <AccountRef>
                                    <ListID>' . $account->quickbooks_listid . '</ListID>
                                    <FullName>Primary Income Account</FullName>
                                </AccountRef>
                            </SalesOrPurchase>
                        </ItemServiceAdd>
                    </ItemServiceAddRq>
                </QBXMLMsgsRq>
            </QBXML>';
    return $xml;
  }

  /*
                    <SalesOrPurchase>
                        <AccountRef>
                            <ListID>' . $account->quickbooks_listid . '</ListID>
                            <FullName>Primary Income Account</FullName>
                        </AccountRef>
                    </SalesOrPurchase>
            */

  /**
   * Handle a response from QuickBooks indicating a new item has been added
   */
  public static function xmlResponseForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents) {
    DB::update(
      'UPDATE qbd_items SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
      [$idents['ListID'], $idents['EditSequence'], (int) $ID]
    );
  }

  public static function xmlRequestForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale) {
    $item = DB::select('SELECT name, qbd_connection_id FROM qbd_items WHERE id = ?', [(int) $ID])[0];
    $singleLoadItemNames = ['Hauling Fee', 'Fuel Surcharge', 'Accessorial Fee', 'Accessorial Deduction', 'Discount'];
    $itemName = $item->name;
    if (in_array($item->name, $singleLoadItemNames)) {
      $itemName = 'Service-' . $item->name;
    }

    $xml = '<?xml version="1.0" encoding="utf-8"?>
        <?qbxml version="13.0"?>
        <QBXML>
            <QBXMLMsgsRq onError="stopOnError">
                <ItemServiceQueryRq requestID="' . $requestID . '">
                    <FullName>' . $itemName . '</FullName>
                </ItemServiceQueryRq>
            </QBXMLMsgsRq>
        </QBXML>';
    return $xml;
  }

  public static function xmlResponseForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents) {
    DB::update(
      'UPDATE qbd_items SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
      [$idents['ListID'], $idents['EditSequence'], (int) $ID]
    );
  }
}

<?php

namespace App\Services\Qbd;

use Illuminate\Support\Facades\DB;

class Customer
{
    /**
     * Issue a request to QuickBooks to add a customer
     */
    public static function xmlRequestForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale)
    {
        $customer = DB::select('SELECT c.company_name FROM qbd_customers AS q JOIN customers AS c ON q.customer_id = c.id WHERE q.id = ?', [(int) $ID])[0];
        $xml = '<?xml version="1.0" encoding="utf-8"?>
            <?qbxml version="2.0"?>
            <QBXML>
                <QBXMLMsgsRq onError="stopOnError">
                    <CustomerAddRq requestID="' . $requestID . '">
                        <CustomerAdd>
                            <Name>' . str_replace('&', '&amp;', $customer->company_name) . '</Name>
                            <CompanyName>' . str_replace('&', '&amp;', $customer->company_name) . '</CompanyName>
                        </CustomerAdd>
                    </CustomerAddRq>
                </QBXMLMsgsRq>
            </QBXML>';
        return $xml;
    }

    /**
     * Handle a response from QuickBooks indicating a new customer has been added
     */
    public static function xmlResponseForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents)
    {
        DB::update(
            'UPDATE qbd_customers SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
            [$idents['ListID'], $idents['EditSequence'], (int) $ID]
        );
    }

    public static function xmlRequestForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale)
    {
        $customer = DB::select('SELECT c.company_name FROM qbd_customers AS q JOIN customers AS c ON q.customer_id = c.id WHERE q.id = ?', [(int) $ID])[0];
        $xml = '<?xml version="1.0" encoding="utf-8"?>
        <?qbxml version="13.0"?>
        <QBXML>
            <QBXMLMsgsRq onError="stopOnError">
                <CustomerQueryRq requestID="' . $requestID . '">
                    <FullName>' . str_replace('&', '&amp;', $customer->company_name) . '</FullName>      
                </CustomerQueryRq>
            </QBXMLMsgsRq>
        </QBXML>';
        return $xml;
    }

    public static function xmlResponseForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents)
    {
        DB::update(
            'UPDATE qbd_customers SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
            [$idents['ListID'], $idents['EditSequence'], (int) $ID]
        );
    }
}

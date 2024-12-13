<?php

namespace App\Services\Qbd;

use Illuminate\Support\Facades\DB;

class Account
{
    /**
     * Issue a request to QuickBooks to add an account
     */
    public static function xmlRequestForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale)
    {
        $account = DB::select('SELECT name, type FROM qbd_accounts WHERE id = ?', [(int) $ID])[0];

        $xml = '<?xml version="1.0" encoding="utf-8"?>
            <?qbxml version="13.0"?>
            <QBXML>
                <QBXMLMsgsRq onError="stopOnError">
                    <AccountAddRq requestID="' . $requestID . '">
                        <AccountAdd>
                            <Name>' . $account->name . '</Name>
                            <AccountType>' . $account->type . '</AccountType>
                        </AccountAdd>
                    </AccountAddRq>
                </QBXMLMsgsRq>
            </QBXML>';
        return $xml;
    }

    /**
     * Handle a response from QuickBooks indicating a new account has been added
     */
    public static function xmlResponseForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents)
    {
        // $pdo = DB::connection()->getPdo(); $pdo->quote($idents['ListID']
        DB::update(
            'UPDATE qbd_accounts SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
            [$idents['ListID'], $idents['EditSequence'], (int) $ID]
        );
    }

    public static function xmlRequestForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale)
    {
        $account = DB::select('SELECT name, type FROM qbd_accounts WHERE id = ?', [(int) $ID])[0];

        $xml = '<?xml version="1.0" encoding="utf-8"?>
        <?qbxml version="13.0"?>
        <QBXML>
            <QBXMLMsgsRq onError="stopOnError">
                <AccountQueryRq requestID="' . $requestID . '">
                    <FullName>' . $account->name . '</FullName>
                </AccountQueryRq>
            </QBXMLMsgsRq>
        </QBXML>';
        return $xml;
    }

    public static function xmlResponseForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents)
    {
        // $pdo = DB::connection()->getPdo(); $pdo->quote($idents['ListID']
        DB::update(
            'UPDATE qbd_accounts SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
            [$idents['ListID'], $idents['EditSequence'], (int) $ID]
        );
    }
}

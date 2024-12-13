<?php

namespace App\Services\Qbd;

use Illuminate\Support\Facades\DB;

class StandardTerms
{
    /**
     * Issue a request to QuickBooks to add a term
     */
    public static function xmlRequestForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale)
    {
        $term = DB::select('SELECT name, days FROM qbd_standard_terms WHERE id = ?', [(int) $ID])[0];
        $xml = '<?xml version="1.0" encoding="utf-8"?>
            <?qbxml version="2.0"?>
            <QBXML>
                <QBXMLMsgsRq onError="stopOnError">
                    <StandardTermsAddRq requestID="' . $requestID . '">
                        <StandardTermsAdd>
                            <Name>' . $term->name . '</Name>
                            <StdDueDays>' . $term->days . '</StdDueDays>
                        </StandardTermsAdd>
                    </StandardTermsAddRq>
                </QBXMLMsgsRq>
            </QBXML>';
        return $xml;
    }

    /**
     * Handle a response from QuickBooks indicating a new term has been added
     */
    public static function xmlResponseForAdd($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents)
    {
        DB::update(
            'UPDATE qbd_standard_terms SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
            [$idents['ListID'], $idents['EditSequence'], (int) $ID]
        );
    }

    public static function xmlRequestForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $version, $locale)
    {
        $term = DB::select('SELECT name, days FROM qbd_standard_terms WHERE id = ?', [(int) $ID])[0];
        $xml = '<?xml version="1.0" encoding="utf-8"?>
        <?qbxml version="13.0"?>
        <QBXML>
            <QBXMLMsgsRq onError="stopOnError">
                <StandardTermsQueryRq requestID="' . $requestID . '">
                    <FullName>' . $term->name . '</FullName>
                </StandardTermsQueryRq>
            </QBXMLMsgsRq>
        </QBXML>';
        return $xml;
    }

    public static function xmlResponseForQuery($requestID, $user, $action, $ID, $extra, &$err, $last_action_time, $last_actionident_time, $xml, $idents)
    {
        DB::update(
            'UPDATE qbd_standard_terms SET quickbooks_listid = ?, quickbooks_editsequence = ? WHERE id = ?',
            [$idents['ListID'], $idents['EditSequence'], (int) $ID]
        );
    }
}

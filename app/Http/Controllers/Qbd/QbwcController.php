<?php

namespace App\Http\Controllers\Qbd;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use QuickBooks_Utilities;
use QuickBooks_WebConnector_Server;

class QbwcController extends Controller
{
    private $config;
    private $db_conn_def;

    public function __construct()
    {
        $this->config = config('quickbooks_desktop');
        $this->db_conn_def = $this->config['qbd_db_conn_def'];
        if (!$this->config['qbd_db_conn_def']) {
            $dbconf = config('database');
            $db = $dbconf['connections'][$dbconf['default']];

            if ($db['driver'] == 'mysql') {
                $db['driver'] = 'mysqli';
            }
            $this->db_conn_def = $db['driver'] . '://' . $db['username'] . ':' . $db['password'] . '@' . $db['host'] . ':' . $db['port'] . '/' . $db['database'];
        }
    }

    /*
    This function creates database tables for QuickBooks Desktop integration.
    To create the tables, make sure consolibyte/quickbooks is installed by 
    running commands like "composer update consolibyte/quickbooks. Then 
    uncomment the following line in routes/web.php and access 
    http://localhost:8000/qbd/initializeDatabase once.
    Route::any('/qbd/initializeDatabase', 'Qbd\QbwcController@initializeDatabase');
    */
    public function initializeDatabase()
    {
        // Check to make sure our database is set up
        if (!QuickBooks_Utilities::initialized($this->db_conn_def)) {
            // Initialize creates the neccessary database schema for queueing up requests and logging
            QuickBooks_Utilities::initialize($this->db_conn_def);
        }
    }
    
    public function handleQbwc(Request $request)
    {
        $return = false;
        $debug = true;
        // Create a new server and tell it to handle the requests
        $Server = new QuickBooks_WebConnector_Server(
            $this->db_conn_def,
            $this->config['actions'],
            $this->config['error_map'],
            $this->config['hooks'],
            $this->config['qb_log_level'],
            $this->config['soap']['server'],
            QUICKBOOKS_WSDL,
            $this->config['soap']['options'],
            $this->config['handler_options'],
            $this->config['driver_options'],
            $this->config['callback_options']
        );

        $response = $Server->handle($return, $debug);
        // return $response->header('Content-Type', 'text/xml');
        return response($response, 200)->header('Content-Type', 'text/xml');
        // Comments from code source: if $return is turned-on, there is an error "Response is not well-formed XML". Probably because of whitespaces somewhere. I haven't figured out this yet

        // $response = '';
        /*$contentType = 'text/plain';
        if($request->isMethod('post'))
        {
            $contentType = 'text/xml';
        }
        elseif($request->input('wsdl') !== null or $request->input('WSDL') !== null)
        {
            $contentType = 'text/xml';
        }
        if($contentType == 'text/xml'){
            $tidy = new \tidy();
            $response = $tidy->repairString($response, ['input-xml'=> 1, 'indent' => 0, 'wrap' => 0]);
        }
        // Uncomment log if you want to see the request headers submitted from WebConnector
        // Log::info(print_r(getallheaders(), true));
        error_log(print_r(getallheaders(), true));

        return response($response,200)->header('Content-Type', $contentType);*/
    }
}

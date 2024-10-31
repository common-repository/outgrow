<?php
   // include 'main-style.css';
   
   require_once(ABSPATH . 'wp-includes/formatting.php');
require_once(ABSPATH . 'wp-includes/kses.php');
   global $wpdb, $table_prefix;

   $wp_outgrow_api_collection = $table_prefix.'outgrow_api_collection';

   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   if (isset($_POST['api-key'])) {
    // Get the API key from the form
    echo 'hello';
    $apiKey = sanitize_text_field($_POST['api-key']);

    // API request
    $headers = array(
        'API-KEY' => $apiKey
    );
    try {
        $options = array(
            'timeout' => 30, // Set the timeout to 30 seconds (adjust as needed)
        );
    // Live API request
    $request = Requests::get('https://api-calc.outgrow.co/api/v1/calculator?status=Live&type=All&sort=alpha_as', $headers, $options);

    // Process the API response as needed
    $res = json_decode($request->body);

     // Check if $res->data exists before accessing its properties
     if (isset($res->data)) {
        $meta = $res->data;

        // Count the number of elements in $meta
        $calci_count = count($meta);    
        echo $calci_count."hey output";
    } else {
        $calci_count = 0;
    }
    if ($calci_count > 0 && isset($res->success) && $res->success == true ) {
        if ($wpdb->insert($wp_outgrow_api_collection, array(
            'api_key' => $apiKey
        )) === false) {
            echo "API Response: " . $apiKey;
             // Fetch updated data from the database
        $db_result = $wpdb->get_results("SELECT * FROM {$wp_outgrow_api_collection}");
        }
    } else {
        // api_Warning("No API Found - Please add your API to view Calculators.");
        api_Warning("INVALID API");
    }} catch (Requests_Exception $e) {
        // Handle cURL timeout exception
        echo "Warning: Invalid API - cURL request timed out.";
    }
}}
?>
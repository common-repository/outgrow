<?php
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    header('Location: /');
    die("can't access this file due to security issue");
}
global $wpdb, $table_prefix;
$wp_outgrow_api_collection = $table_prefix.'outgrow_api_collection';
$wp_outgrow_calc_collection = $table_prefix.'outgrow_calc_collection';
$delete_api_table="DROP TABLE IF EXISTS`$wp_outgrow_api_collection`";
$delete_calc_table="DROP TABLE IF EXISTS`$wp_outgrow_calc_collection`";
$wpdb->query($delete_api_table);
$wpdb->query($delete_calc_table);
?>

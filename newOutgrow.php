<?php 
   /**
    * Plugin Name: Outgrow
    * Description: Outgrow
    * Version: 2.1
    * Author: Outgrow
    *  */ 
   if (!defined('ABSPATH')) {
       header("Location: /newOutgrow");
       die("");
       # code...
   }
   
   function activate_outgrow() {
       // console.log('plugin activated');
       global $wpdb, $table_prefix;
       $wp_outgrow_api_collection = $table_prefix.'outgrow_api_collection';
       $wp_outgrow_calc_collection = $table_prefix.'outgrow_calc_collection';
       $create_api_table ="CREATE TABLE `$wp_outgrow_api_collection` (
           `api_key` varchar(160) NOT NULL ,
           PRIMARY KEY (api_key)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
       $create_calc_table = "CREATE TABLE IF NOT EXISTS `$wp_outgrow_calc_collection` (
           `name` varchar(50) NOT NULL,
           `api_key` varchar(160) NOT NULL ,
           `id` varchar(160),
           `data_url` varchar(160) NOT NULL UNIQUE,
           `short_url` varchar(160) NOT NULL,
           `calci_type` varchar(50) NOT NULL,
           `url` varchar(100) NOT NULL,
           `title` varchar(50) NOT NULL,
           `image_url` varchar(150) NOT NULL,
           PRIMARY KEY (data_url)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
          $wpdb->query($create_calc_table);
          $wpdb->query($create_api_table);
   }
   function deactivate_outgrow() {
       // console.log('plugin deactivated');
       global $wpdb, $table_prefix;
       $wp_outgrow_api_collection = $table_prefix.'outgrow_api_collection';
       $wp_outgrow_calc_collection = $table_prefix.'outgrow_calc_collection';
       $delete_api_table="TRUNCATE TABLE `$wp_outgrow_api_collection`";
       $delete_calc_table="TRUNCATE TABLE `$wp_outgrow_calc_collection`";
       $wpdb->query($delete_api_table);
       $wpdb->query($delete_calc_table);
   }
   function use_outgrow_func(){
       return 'hello from outgrow';
   }
   function display_outgrow_calci($atts,$content,$tag){
       $values = isset($atts['values']) ? $atts['values'] : array();
       $values = shortcode_atts(array(
           "type" => "",
           "id" => "",
           "data_url" => "",
           "short_url" => "",
           "data_title" => "",
           "dh" => "",
           "dhd" => "",
           "th" => "",
           "thd" => "",
           "mh" => "",
           "mhd" => "",
           "dw" => "",
           "dwd" => "",
           "tw" => "",
           "twd" => "",
           "mw" => "",
           "mwd" => "",
           "showExact" => "",
           "repeatTime" => "",
           "showExactD" => ""
   	),$atts); 
       $custom="<style>
       @media screen and (max-width: 640px){#og_iframe{height: 620px;width:100%;}}
       @media screen and (min-width: 641px) and (max-width: 1024px){#og_iframe{height: 620px;width:100%;}}
       @media screen and (min-width: 1025px){#og_iframe{height: 620px;width:100%;}}
   </style>
   <iframe id='og_iframe' src='$values[data_url]' style='border: none; overflow: hidden;' scrolling='yes'></iframe>";
    
   	//based on input determine what to return
   	$output = '';
           $data="";
           if($values["type"] == "mobile_full_screen" ){
               // print_r("Id.$values[id].-------------url=.$values[data_url].-------------shorturl=.$values[short_url]");
                $output="<div><div class='op-interactive' id='$values[id]' data-url='$values[data_url]' data-surl='$values[short_url]' data-title='$values[data_title]' data-width='100%'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js'></script><script>initIframe('$values[id]');</script></div>";
           }
           else if($values["type"] == "mobile_full_screen_facebook" ){
               $output="<div><div class='op-interactive' id='$values[id]' data-url='$values[data_url]' data-title='$values[data_title]' data-surl='$values[short_url]' data-width='100%'></div>
               <script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js'></script><script>initIframe('$values[id]');</script></div>
               <div id='fb-root'></div><script>(function(d, s, id){var js, fjs=d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js=d.createElement(s); js.id=id; js.src='//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10'; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>
               <div class='fb-comments' data-href='https://bnb22.outgrow.us/5c02208bdf06b53edca20231' data-width='100%' data-numposts='5'></div>";
           }
           else if($values["type"] == "mobile_in_page" ){
             $output = "<div><div class='op-interactive' id='$values[id]' data-url='$values[data_url]'  data-title='$values[data_title]' data-surl='$values[short_url]' data-width='100%'></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js'></script><script>initIframe('$values[id]');</script></div>";
           }
           else if($values["type"] == "pop_up"){
            $output="<div><div id='$values[id]' data-embedCookieDays='10'  data-title='$values[data_title]' data-embedScheduling='false' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5' 
               data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-p' data-type='outgrow-l' 
               data-url='$values[data_url]' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('$values[id]');</script></div>";     
           }
           else if($values["type"] == "pop_up_classic"){
               $output="<div><div id='$values[id]' data-embedCookieDays='10'  data-title='$values[data_title]' data-embedScheduling='false' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5' 
               data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-p' data-type='outgrow-l' 
               data-url='$values[data_url]' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('$values[id]');</script></div>";    
            }
           
           else if($values["type"] == "pop_up_l"){
               $output="<div><div id='$values[id]' data-embedCookieDays='10' data-embedScheduling='false' data-title='$values[data_title]'  data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5'
               data-isLDrawer='true' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-d' data-type='outgrow-l' 
              data-url='$values[data_url]' data-text='Get Started'>
           
              </div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script>
              <script>initIframe('$values[id]');</script></div>";
           }
           else if($values["type"] == "pop_up_r"){
               $output="<div><div id='$values[id]' data-embedCookieDays='10'  data-title='$values[data_title]' data-embedScheduling='false' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5' 
               data-isLDrawer='false' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-d' data-type='outgrow-l' 
               data-url='$values[data_url]' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('$values[id]');</script></div>";
           }else if($values["type"] == "pop_up_custom"){
               $output="<div><div id='$values[id]' data-embedCookieDays='$values[repeatTime]'  data-title='$values[data_title]' data-embedScheduling='true' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='$values[showExactD]' data-embedTimeValue='$values[showExact]' 
               data-isLDrawer='false' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-d' data-type='outgrow-l' 
               data-url='$values[data_url]' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('$values[id]');</script></div>";
           }
           else if($values["type"] == "chat"){
               $output="<link href='/css/chat.css' rel='stylesheet'>
               wp_register_style('my-plugin-style4','https://fonts.googleapis.com/icon?family=Material+Icons');
               <a href='javascript:void(0);' style='background-color: #FF3C5D' class='bot-circle right' id='bot-circle' onclick='ogAnimationInit()'>
                   <div class='bot-circle-icon-open'><i style='color: #ffffff' class='material-icons'>chat</i></div>
                   <div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div>
                   <div class='og-chat-tooltip'><p>Whats your future like ?</p><span class='og-chat-cross' onclick='ogAnimationTextremoveInit(event)'><i class='material-icons'>clear</i></span></div>
               </a>
               <div class='og-chat-box no-animation' id='og-chat-box'>
                   <div class='og-chat-box-top' style='background-color: #FF3C5D'>
                       <a href='javascript:void(0);' class='bot-circle-mobile' id='bot-circle-mobile' onclick='ogAnimationClose()'>
                           <div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div>
                       </a>
                   </div>
                   <iframe src='$values[data_url]' width='100%' height='100%'></iframe>
               </div>
               <script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/chat.js'></script>";
          }
          else if($values["type"] == "chat_left"){
              $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/chatV2.css' rel='stylesheet'>
                 <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
              <a href='javascript:void(0);' style='background-color: #FF3C5D' class='bot-circle left' id='bot-circle' onclick='ogAnimationInit()'>
              <div class='bot-circle-icon-open'><i style='color: #ffffff' class='material-icons'>chat</i></div>
              <div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div>
              <div class='og-chat-tooltip'><p>Whats your future like ?</p><span class='og-chat-cross' onclick='ogAnimationTextremoveInit(event)'><i class='material-icons'>clear</i></span></div></a><div class='og-chat-box no-animation' id='og-chat-box' style='left: 30px !important;'>
              <div class='og-chat-box-top' style='background-color: #FF3C5D'><a href='javascript:void(0);' class='bot-circle-mobile' id='bot-circle-mobile'
               onclick='ogAnimationClose()'><div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div></a></div>
               <iframe src='$values[data_url]' width='100%' height='100%'></iframe></div>
                   <script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/chat.js'></script>";
          }
          else if($values["type"]== "chat_right"){
              $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/chatV2.css'
               rel='stylesheet'>   <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
               <a href='javascript:void(0);' style='background-color: #FF3C5D' class='bot-circle right' id='bot-circle' onclick='ogAnimationInit()'>
               <div class='bot-circle-icon-open'><i style='color: #ffffff' class='material-icons'>chat</i></div><div class='bot-circle-icon-close'>
               <i style='color: #ffffff' class='material-icons'>close</i></div><div class='og-chat-tooltip'><p>Whats your future like ?</p><span class='og-chat-cross' onclick='ogAnimationTextremoveInit(event)'><i class='material-icons'>clear</i></span></div></a>
               <div class='og-chat-box no-animation' id='og-chat-box'><div class='og-chat-box-top' style='background-color: #FF3C5D'>
               <a href='javascript:void(0);' class='bot-circle-mobile' id='bot-circle-mobile' onclick='ogAnimationClose()'>
               <div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div></a></div>
               <iframe src='$values[data_url]' width='100%' height='100%'></iframe></div>
                   <script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/chat.js'></script>";
          }
          else if($values["type"]== "Greet_Bar"){
           $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_greet_bar.css'>
           <section style='background: #666666;' class='barEmbed' id='barEmbed'>
           <p style='color: #FFFFFF;font-size: 15px;'>Enter Greet Bar Title Here</p>
           <a style='border-radius: 20px; color: #666666;font-size: 12px;background: #FFFFFF;' href='$values[data_url]' target='_blank' class='greet-popup-open'>
           Button Text</a></section><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_greet_bar.js'></script>";
       }
       else if($values["type"]== "Greet_Bar_popup"){
           $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_greet_bar.css'>
           <section style='background: #666666;' class='barEmbed' id='barEmbed'><p style='color: #FFFFFF;font-size: 15px;'>
           Enter Greet Bar Title Here</p><button style='border-radius: 20px; color: #666666;font-size: 12px;background: #FFFFFF;' class='greet-popup-open' onClick='openGreetPopup()'>
           Button Text</button></section><section class='greet_popup' id='greet_popup' style='display:none'>
           <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;'>
               </iframe><a href='javascript:void(0);' class='close-popup' onClick='closeGreetPopup()'></a></section>
               <script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_greet_bar.js'></script>";
       }
       else if($values["type"]== "Floating_Rectangle_l"){
           $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/float.css' rel='stylesheet'>
           <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
           <div class='bot-circle left' id='bot-circle' onclick='ogAnimationInit()'>
           <div style='background: #262626;' class='og-chat-tooltip'><p style='color: #FB5F66;font-size: 12px;'>
           Heading of this floating rectangle</p><div class='helptext' style='color: #ce4646;font-size: 16px;'>Help text</div>
           </div></div><div class='og-chat-box-outer'><div class='og-chat-box no-animation' id='og-chat-box'>
           <div style='background: #262626;' class='floating-embedOpen-topbar'><p style='color: #FB5F66;'>Heading of this floating rectangle</p>
           <a href='javascript:void(0);' onclick='ogAnimationInit()' class='bot-circle-icon-close'>
           <i style='color: #FB5F66;' class='material-icons'>close</i></a></div>
           <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;' width='100%' height='100%'></iframe>
               </div></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/float.js'></script>";
       }
       else if($values["type"]== "Floating_Rectangle_c"){
           $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/float.css' rel='stylesheet'>
           <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
           <div class='bot-circle center' id='bot-circle' onclick='ogAnimationInit()'>
           <div style='background: #262626;' class='og-chat-tooltip'><p style='color: #FB5F66;font-size: 12px;'>
           Heading of this floating rectangle</p><div class='helptext' style='color: #ce4646;font-size: 16px;'>Help text</div>
           </div></div><div class='og-chat-box-outer'><div class='og-chat-box no-animation' id='og-chat-box'>
           <div style='background: #262626;' class='floating-embedOpen-topbar'><p style='color: #FB5F66;'>Heading of this floating rectangle</p>
           <a href='javascript:void(0);' onclick='ogAnimationInit()' class='bot-circle-icon-close'>
           <i style='color: #FB5F66;' class='material-icons'>close</i></a></div>
           <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;' width='100%' height='100%'></iframe>
               </div></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/float.js'></script>";
       }
       else if($values["type"]== "Floating_Rectangle_r"){
           $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/float.css' rel='stylesheet'>
           <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
           <div class='bot-circle right' id='bot-circle' onclick='ogAnimationInit()'>
           <div style='background: #262626;' class='og-chat-tooltip'><p style='color: #FB5F66;font-size: 12px;'>
           Heading of this floating rectangle</p><div class='helptext' style='color: #ce4646;font-size: 16px;'>Help text</div>
           </div></div><div class='og-chat-box-outer'><div class='og-chat-box no-animation' id='og-chat-box'>
           <div style='background: #262626;' class='floating-embedOpen-topbar'><p style='color: #FB5F66;'>Heading of this floating rectangle</p>
           <a href='javascript:void(0);' onclick='ogAnimationInit()' class='bot-circle-icon-close'>
           <i style='color: #FB5F66;' class='material-icons'>close</i></a></div>
           <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;' width='100%' height='100%'></iframe>
               </div></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/float.js'></script>";
       }
       else if($values["type"]== "side_l"){
           $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_sidenote.css'>
           <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
           <section style='background: #c5dea0;' class='barEmbed sidenote left' id='barEmbed' onClick='openGreetPopup()'>
           <p style='color: #e63737;font-size: 14px;'>Feedback</p><i class='material-icons' style='color: #4f53c4;font-size: 20px;'>
           brightness_high</i></section><section class='greet_popup' id='greet_popup' style='display:none'> 
           <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;'>
               </iframe> <a href='javascript:void(0);' class='close-popup' onClick='closeGreetPopup()'></a></section>
               <script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_sidenote.js'></script>";
       }
       else if($values["type"]== "side_r"){
           $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_sidenote.css'>
           <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
           <section style='background: #c5dea0;' class='barEmbed sidenote right' id='barEmbed' onClick='openGreetPopup()'>
           <p style='color: #e63737;font-size: 14px;'>Feedback</p><i class='material-icons' style='color: #4f53c4;font-size: 20px;'>
           brightness_high</i></section><section class='greet_popup' id='greet_popup' style='display:none'> 
           <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;'>
               </iframe> <a href='javascript:void(0);' class='close-popup' onClick='closeGreetPopup()'></a></section>
               <script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_sidenote.js'></script>";
       }
           else if($values["type"] == "custom_type"){
               $output="<style>
               @media screen and (max-width: 640px){#og_iframe{height: `$values[mh]$values[mhd]`;width:$values[mw]$values[mwd];}}
               @media screen and (min-width: 641px) and (max-width: 1024px){#og_iframe{height: `$values[th]$values[thd]`;width:$values[tw]$values[twd];}}
               @media screen and (min-width: 1025px){#og_iframe{height: `$values[dh]$values[dhd]`;width:$values[dw]$values[dwd];}}
           </style>
           <iframe id='og_iframe' src='$values[data_url]' style='border: none; overflow: hidden;' scrolling='yes'></iframe>";
           }  
           return $output;
           // print("---------------shortcode editing-----id------.$values[id].-------url--------.$values[data_url].-----short url----$values[short_url]");
           // print("<div><div class='op-interactive' id='$values[id]' data-url='$values[data_url]' data-surl='$values[short_url]' data-width='100%'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js'></script><script>initIframe('$values[id]');</script></div>");
   }
   register_activation_hook(
   	__FILE__,
   	'activate_outgrow'
   );
   register_deactivation_hook(
   	__FILE__,
   	'deactivate_outgrow'
   );
   // shortcode 
   add_shortcode('outgrow','display_outgrow_calci');
   
   add_shortcode('preview_shortcode', 'preview_shortcode');
   
   //wordpress dashboard menu main-page
   function Outgrow_menu_functionality(){
   include 'dashboard/main-page.php';
   }
   
   //wordpress dashboard menu
   function outgrow_menu(){
       add_menu_page('Outgrow', 'Outgrow', 'manage_options', 'Outgrow', 'Outgrow_menu_functionality','',20);
   }
   add_action('admin_menu','outgrow_menu');
   
   function preview_shortcode($atts, $content = null) {
       return '<div id="shortcode-preview-container">' . do_shortcode($content) . '</div>';
   }
   
   function register_outgrow_block_type() {
    register_block_type( 'newOutgrow/outgrow-block', array(
        'editor_script' => 'outgrow-block-editor',
    ) );
}
add_action( 'init', 'register_outgrow_block_type' );

function enqueue_outgrow_block_editor_assets() {
    wp_enqueue_script( 'outgrow-block-editor', plugin_dir_url( __FILE__ ) . 'dashboard/js/outgrow-block-editor.js', array( 'wp-blocks', 'wp-components' ), null, true );
}
add_action( 'enqueue_block_editor_assets', 'enqueue_outgrow_block_editor_assets' );
   ?>
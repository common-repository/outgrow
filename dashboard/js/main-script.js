// script.js
//global var for api response
var apiResponseData;
var selectedApiKey;
var id_used="",id="";
var url,custom_url,url1,url2,url3,title;
var short_url_used;
// heights
var customHeightD=620, customHeightDDim="px";
var customHeightT=620, customHeightTDim="px";
var customHeightM=620, customHeightMDim="px";
// width
var customWidthD=100, customWidthDDim="px";
var customWidthT=100, customWidthTDim="px";
var customWidthM=100, customWidthMDim="px";
//pops menus
var showExact=5, repeatTime=10, showExactD='0';

$(document).ready(function () {
      // Assuming #shortcode_text contains the dynamic shortcode as text
      var dynamicShortcodeText = $('#shortcode_text').text();

      // Create the preview shortcode
      // var previewShortcode = '[preview_shortcode]' + dynamicShortcodeText + '[/preview_shortcode]';
  
      // Insert the preview shortcode into #preview-container
      // $('#preview-container').html(previewShortcode);
  $('#openPopupBtn').click(function () {
    $('.menu-wrapper').css('display', 'flex');
    $('#menuPopup').fadeIn();
  });
  
  $('#closePopupBtn').click(function () {
    $('.menu-wrapper').css('display', 'none');
    $('#menuPopup').fadeOut();
  });
  
  // Perform the API request using AJAX
  $('#existing_api').change(function () {
    var og_loader = document.getElementById('og-loader');
    og_loader.style.display = 'flex';
    $('#additionalBlock').hide();
  $('#og-loader').show(); 
     selectedApiKey = $(this).val();
    var activeLink = $('#menu a.active');
  $.ajax({
      url: 'https://api-calc.outgrow.co/api/v1/calculator?status=Live&type=All&sort=alpha_as',
      method: 'GET',
      dataType: 'json',
      headers: {
        'API-Key': selectedApiKey
    },
      timeout: 30000, // Set the timeout to 30 seconds (adjust as needed)
      success: function (data) {
          // Process the API response
          $('#loader').hide();
          apiResponseData = data.data;
          if (data && data.data && data.data.length > 0) {
              // Data is available, update the HTML
              var html = '';
              $.each(data.data, function (index, item) {
                  var calcName = item.meta_data && item.meta_data.title ? item.meta_data.title : '';
                  html += '<p>' + calcName + '</p>';
              });
              $('#calculator-list').html(html);
              if (selectedApiKey !== '') {
                // Show the additional HTML block when an API key is selected
                $('#additionalBlock').show();
                $('#og-loader').hide();
                showContent('Calculator');
            } else {
                // Hide the additional HTML block when the "Select an API KEY" option is selected
                $('#additionalBlock').hide();
            }
          } else {
              // No content
              $('#calculator-list').html('<p>No content</p>');
          }
      },
      error: function () {
          // Handle error
          $('#calculator-list').html('<p>Error fetching data</p>');
      }
  });
});


  // Handle menu item click
  $('.horizontal-menu a').click(function (e) {
      e.preventDefault();
      var contentId = $(this).data('content');
      if(contentId=='Full_Page'){
        cat01()
      }
      loadContent(contentId);
  });

  // Load initial content
  loadContent('Full_Page');


});

  
function cat01(){
  var extra_option = document.getElementById('extra_option');
  extra_option.style.display = 'flex';
  document.getElementById('extra_option').innerHTML="<div id='fulloveride' ><div style='display: flex; gap: 10px;'>Facebook Comments  <div class='toggle-switch' id='full_screen_facebook_toogle'><input type='checkbox' id='toggle-checkbox' value=''><label for='toggle-checkbox'></label></div></div><div style='display: flex; gap: 10px;'></label></div></div></div>";
  document.getElementById('shortcode_text').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
  // document.getElementById('preview-container').innerHTML=display_outgrow_calci('mobile_full_screen');
}
function cat02(){
  var extra_option = document.getElementById('extra_option');
    extra_option.style.display = 'none';
    document.getElementById('shortcode_text').innerText='[outgrow type="mobile_in_page" id="'+id_used+'"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url2+'" short_url="'+short_url_used+'"][/outgrow]';
    // document.getElementById('preview-container').innerHTML=display_outgrow_calci('mobile_in_page');
  }
function cat03(){
  var extra_option = document.getElementById('extra_option');
  extra_option.style.display = 'flex';
  document.getElementById('extra_option').innerHTML="<div class='popup_mode_block' style='display: flex;float: left;width: 100%;'>"+
 " <ul style='float: none; width: 100%; margin: 0 10px;display: flex;flex-direction: column;align-items: center;'>"+
 "<div style='display:flex;gap:10px;'><li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedRadioButton()'>"+
 "<input type='radio' id='classic' name='selector2' >"+
 "<label for='classic' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://cdn.filestackcontent.com/oCNA05WS3GwmTbYX7yn2'>"+
 "<p>Classic</p>"+
 "</label>"+
 "</li>"+
 "<li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedRadioButton()'>"+
 "<input type='radio' id='Drawer_(L)' name='selector2' >"+
 "<label for='Drawer_(L)' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://cdn.filestackcontent.com/PBcvjT9Rhi6PEIXB8IGG'>"+
 "<p>Drawer (L)</p>"+
 "</label>"+
 "</li></div>"+
 "<li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedRadioButton()'>"+
 "<input id='Drawer_(R)' name='selector2' type='radio'>"+
 "<label for='Drawer_(R)' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://cdn.filestackcontent.com/Z45pnQBoQdWcRU6YU7NM'>"+
 "<p>Drawer (R)</p>"+
 "</label></li></ul></div>";
 "<div class='time-link'><div class='time-link-text'>TIMED & EXIT INTENT<div class='time-div' id='time-div' onclick='toggleSwitch2()'><input type='text'  class='time-input-type' ><span class='time-span' id='time-span'></span></div></div></div>"+
 "<div class='time-option' id='time-option'></div>";
  document.getElementById('shortcode_text').innerText='[outgrow type="pop_up" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';
  // document.getElementById('preview-container').innerHTML=display_outgrow_calci('pop_up');
}
function cat04(){
  document.getElementById('extra_option').innerHTML="<div class='popup_mode_block' style='display: flex;float: left;width: 100%;'>"+
 " <ul style='float: none; width: 100%; margin: 0 10px;display: flex;flex-direction: column;align-items: center;'>"+
 "<div style='display:flex;gap:10px;'><li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedchatRadioButton()'>"+
 "<input type='radio' id='bottom_left' name='chat_selector' >"+
 "<label for='bottom_left' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://dlvkyia8i4zmz.cloudfront.net/o1PZBSLiQuq5HTCCyrMt_bottom_left.png' style='height:30px'>"+
 "<p>Bottom Left</p>"+
 "</label>"+
 "</li>"+
 "<li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedchatRadioButton()'>"+
 "<input type='radio' id='bottom_right' name='chat_selector' >"+
 "<label for='bottom_right' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://dlvkyia8i4zmz.cloudfront.net/5uGcgvoRIie2dwQNk9kv_bottom_right.png' style='height:30px'>"+
 "<p>Bottom Right</p>"+
 "</label>"+
 "</li></div>";
 "<div class='time-link'><div class='time-link-text'>TIMED & EXIT INTENT<div class='time-div' id='time-div' onclick='toggleSwitch2()'><input type='text'  class='time-input-type' ><span class='time-span' id='time-span'></span></div></div></div>"+
 "<div class='time-option' id='time-option'></div>";
  document.getElementById('shortcode_text').innerText='[outgrow type="chat" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';
  // document.getElementById('preview-container').innerHTML=display_outgrow_calci('chat');
}
function cat05(){
  document.getElementById('extra_option').innerHTML="<div class='popup_mode_block' style='display: flex;float: left;width: 100%;'>"+
 " <ul style='float: none; width: 100%; margin: 0 10px;display: flex;flex-direction: column;align-items: center;'>"+
 "<div style='display:flex;gap:10px;'><li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedGreetBarRadioButton()'>"+
 "<input type='radio' id='InNewTab' name='GreetBar_selector' >"+
 "<label for='InNewTab' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://cdn.filestackcontent.com/oCNA05WS3GwmTbYX7yn2' style='height:30px'>"+
 "<p>Open in New Tab </p>"+
 "</label>"+
 "</li>"+
 "<li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedGreetBarRadioButton()'>"+
 "<input type='radio' id='AsPopup' name='GreetBar_selector' >"+
 "<label for='AsPopup' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://cdn.filestackcontent.com/PBcvjT9Rhi6PEIXB8IGG' style='height:30px'>"+
 "<p>Open as Popup </p>"+
 "</label>"+
 "</li></div>";
 "<div class='time-link'><div class='time-link-text'>TIMED & EXIT INTENT<div class='time-div' id='time-div' onclick='toggleSwitch2()'><input type='text'  class='time-input-type' ><span class='time-span' id='time-span'></span></div></div></div>"+
 "<div class='time-option' id='time-option'></div>";
  document.getElementById('shortcode_text').innerText='[outgrow type="Greet_Bar" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';
}
function cat06(){
  var extra_option = document.getElementById('extra_option');
  extra_option.style.display = 'flex';
  document.getElementById('extra_option').innerHTML="<div class='popup_mode_block' style='display: flex;float: left;width: 100%;'>"+
 " <ul style='float: none; width: 100%; margin: 0 10px;display: flex;flex-direction: column;align-items: center;'>"+
 "<div style='display:flex;gap:10px;'><li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedFloating_RectangleRadioButton()'>"+
 "<input type='radio' id='Align_Left' name='Floating_Rectangle' >"+
 "<label for='Align_Left' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://dlvkyia8i4zmz.cloudfront.net/Pd8EYz3QNKfBoXnduHWk_left.jpg'>"+
 "<p>Align Left</p>"+
 "</label>"+
 "</li>"+
 "<li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedFloating_RectangleRadioButton()'>"+
 "<input type='radio' id='Align_Center' name='Floating_Rectangle' >"+
 "<label for='Align_Center' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://dlvkyia8i4zmz.cloudfront.net/5NwZzfkKRDOok1T2btwi_center.jpg'>"+
 "<p>Align Center</p>"+
 "</label>"+
 "</li></div>"+
 "<li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedFloating_RectangleRadioButton()'>"+
 "<input id='Align_Right' name='Floating_Rectangle' type='radio'>"+
 "<label for='Align_Right' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://dlvkyia8i4zmz.cloudfront.net/6OXOtwLR8KSGgfeYLEAo_right.jpg'>"+
 "<p>Align Right</p>"+
 "</label></li></ul></div>";
 "<div class='time-link'><div class='time-link-text'>TIMED & EXIT INTENT<div class='time-div' id='time-div' onclick='toggleSwitch2()'><input type='text'  class='time-input-type' ><span class='time-span' id='time-span'></span></div></div></div>"+
 "<div class='time-option' id='time-option'></div>";
  document.getElementById('shortcode_text').innerText='[outgrow type="Floating_Rectangle_l" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';
}
function cat07(){
  document.getElementById('extra_option').innerHTML="<div class='popup_mode_block' style='display: flex;float: left;width: 100%;'>"+
 " <ul style='float: none; width: 100%; margin: 0 10px;display: flex;flex-direction: column;align-items: center;'>"+
 "<div style='display:flex;gap:10px;'><li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedsideNoteRadioButton()'>"+
 "<input type='radio' id='side_left' name='sidenote_selector' >"+
 "<label for='side_left' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://dlvkyia8i4zmz.cloudfront.net/yYY68uKQ9indTv7UZwmg_leftside.png' style='height:30px'>"+
 "<p>Left</p>"+
 "</label>"+
 "</li>"+
 "<li class='ripple-dark' style='list-style: none;padding: 0 10px;display: flex;margin-bottom: 15px;align-items: center;text-align: center;border: 1px solid #e8ecee;'  onclick='getSelectedsideNoteRadioButton()'>"+
 "<input type='radio' id='side_right' name='sidenote_selector' >"+
 "<label for='side_right' class='check' style='padding: 20px 20px 0px 20px !important;'>"+
 "<img src='https://dlvkyia8i4zmz.cloudfront.net/Xp7FcF7VReIq3zRuy5uJ_rightside.png' style='height:30px'>"+
 "<p>Right</p>"+
 "</label>"+
 "</li></div>";
 "<div class='time-link'><div class='time-link-text'>TIMED & EXIT INTENT<div class='time-div' id='time-div' onclick='toggleSwitch2()'><input type='text'  class='time-input-type' ><span class='time-span' id='time-span'></span></div></div></div>"+
 "<div class='time-option' id='time-option'></div>";
  document.getElementById('shortcode_text').innerText='[outgrow type="side_l" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';
}
function cat08(){
  document.getElementById('extra_option').innerHTML="<div class='extra-option-context'><div class='extra-option-custom' id='desktop'>"+
  "<p>Desktop </p>"+
  "<div class='custom-dim-head'>"+
  "<div class='super-dim'>Height</div>"+
  "<div class='super-input-dim'>"+
    "<input type='text' class='input-dim' id='heightDesktop' name='heightDesktop' onkeypress='return getDesktopHeight(event)' placeholder='620'>"+
    "<select class='select-custom' name='selecthDesktop' id='selecthDesktop' onchange='getHeightD()'><option>%</option><option selected>px</option><option>vh</option></select>"+
  "</div>"+
"</div>"+

"<div>"+
  "<div class='super-dim'>Width</div>"+
  "<div class='super-input-dim'>"+
    "<input type='text' class='input-dim' name='widthDesktop' id='widthDesktop' onkeypress='return getDesktopWidth(event)' placeholder='100'>"+
    "<select name='selectwDesktop' id='selectwDesktop' class='select-custom' onchange='getWidthD()'><option>%</option><option selected>px</option><option>vh</option></select>"+
  "</div>"+
"</div>"+
  "</div>"+
  // tablet
  "<div class='extra-option-custom' id='tablet' ><p>Tablet</p>"+
  "<div class='custom-dim-head'>"+
  "<div class='super-dim'>Height</div>"+
  "<div class='super-input-dim'>"+
    "<input type='text' class='input-dim' name='heightTablet' id='heightTablet' onkeypress='return getTabletHeight(event)' placeholder='620'>"+
    "<select class='select-custom' onchange='getHeightT()' id='selecthTablet' name='selecthTablet'><option>%</option><option selected>px</option><option>vh</option></select>"+
  "</div>"+
"</div>"+

"<div>"+
  "<div class='super-dim'>Width</div>"+
  "<div class='super-input-dim'>"+
    "<input type='text' class='input-dim' name='widthTablet' id='widthTablet' onkeypress='return getTabletWidth(event)' placeholder='100'>"+
    "<select class='select-custom' id='selectwTablet' onchange='getWidthT()' name='selectwTablet'><option>%</option><option selected>px</option><option>vh</option></select>"+
  "</div>"+
"</div>"+
  "</div>"
  // mobile
  +"<div class='extra-option-custom' id='mobile'><p>Mobile</p>"+
  "<div class='custom-dim-head'>"+
  "<div class='super-dim'>Height</div>"+
  "<div class='super-input-dim'>"+
    "<input type='text' class='input-dim' name='heightMobile' id='heightMobile' onkeypress='return getMobileHeight(event)' placeholder='620'>"+
    "<select class='select-custom' id='selecthMobile' onchange='getHeightM()' name='selectwMobile'><option>%</option><option selected>px</option><option>vh</option></select>"+
  "</div>"+
"</div>"+

"<div>"+
  "<div class='super-dim'>Width</div>"+
  "<div class='super-input-dim'>"+
    "<input type='text' class='input-dim' id='widthMobile' onkeypress='return getMobileWidth(event)' name='widthMobile' placeholder='100'>"+
    "<select class='select-custom' id='selectwMobile' onchange='getWidthM()' name='selectwMobile'><option>%</option><option selected>px</option ><option>vh</option></select>"+
  "</div>"+
"</div>"+
  "</div></div>";
 
  addHide("click-copy-text");
  customOutput();
}

function loadContent(contentId) {
  // You can fetch content dynamically based on contentId
          // Remove 'active' class from all links
          var menuLinks = document.querySelectorAll("#menuPopup a");
          menuLinks.forEach(function (link) {
              link.classList.remove("active");
          });
        
          // Add 'active' class to the clicked link
          var clickedLink = findLinkByContentId(contentId);
          if (clickedLink) {
              clickedLink.classList.add("active");
          } 
  // For simplicity, let's use static content here
 if (contentId == 'Full_Page') {
  cat01()
 } 
 else if(contentId == 'In_Page') {
  cat02()
 }
 else if(contentId == 'Popup'){
  cat03();
 }
 else if(contentId == 'Chat'){
  cat04();
 }
 else if(contentId == 'Greet_Bar'){
  cat05();
 }
 else if(contentId == 'Floating_Rectangle'){
  cat06();
 }
 else if(contentId == 'Sidenote'){
  cat07();
 }
 else if(contentId == 'Custom_Embed'){
  cat08();
 }
}


$('.dropdown-menu li').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select').text(getValue);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var openPopupButton = document.getElementById('openPopup');
    var closePopupButton = document.getElementById('closePopup');
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    openPopupButton.addEventListener('click', function() {
        popup.style.display = 'flex';
        overlay.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === overlay) {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});

function showContent(pageId) {
  // Hide all content divs
  var contentDivs = document.querySelectorAll("#content > div");
  contentDivs.forEach(function (div) {
      div.classList.add("hidden");
  });

  // Show the selected content div
  var selectedDiv = document.getElementById(pageId);
  if (selectedDiv) {
      selectedDiv.classList.remove("hidden");
  }
      // Remove 'active' class from all links
      var menuLinks = document.querySelectorAll("#menu a");
  menuLinks.forEach(function (link) {
      link.classList.remove("active");
  });

  // Add 'active' class to the clicked link
  var clickedLink = findLinkByPageId(pageId);
  if (clickedLink) {
      clickedLink.classList.add("active");
  }
  if (apiResponseData && apiResponseData.length > 0) {
    // Data is available, update the HTML
    var htmlArray = [];

    $.each(apiResponseData, function (index, item) {
      if (item.type === pageId) {
          var calcHtml = '<div class="outgrow-calc-card" data-calculator-id="' + item.id +'"><img src="'+item.meta_data.image_url+'"><p>'+item.name+'</p></div>';
          htmlArray.push(calcHtml); // Add HTML for the current item to the array
      }
  });
  if (htmlArray.length === 0) {
    // Append "No Content" message
    htmlArray.push('<div style="margin-left:6%;">No Content</div>');
}
  // Join the array elements into a single string and set the content of #calculator-list
  $('#'+pageId+'-list').html(htmlArray.join(''));
    if (selectedApiKey !== '') {
      // Show the additional HTML block when an API key is selected
      $('#additionalBlock').show();
  } else {
      // Hide the additional HTML block when the "Select an API KEY" option is selected
      $('#additionalBlock').hide();
  }
} else {
    // No content
    $('#'+pageId+'-list').html('<p>No content</p>');
}


}

function findLinkByPageId(pageId) {
  var menuLinks = document.querySelectorAll("#menu a");
  for (var i = 0; i < menuLinks.length; i++) {
      var link = menuLinks[i];
      var onclickValue = link.getAttribute("onclick");
      var extractedPageId = onclickValue.match(/'([^']+)'/)[1];
      if (extractedPageId === pageId) {
          return link;
      }
  }
  return null;
}
function findLinkByContentId(contentId) {
  var menuLinks = document.querySelectorAll("#menuPopup a");

  for (var i = 0; i < menuLinks.length; i++) {
      var link = menuLinks[i];
      // Get the data-content attribute value
      var dataContentValue = link.getAttribute("data-content");
      if (dataContentValue === contentId) {
          return link;
      }
  }

  return null; // Return null if no matching link is found
}

$(document).on('click', '.outgrow-calc-card', function () {
  var calculatorId = $(this).data('calculator-id');
  $('.menu-wrapper').css('display', 'flex');
  $('#menuPopup').fadeIn();
  showCalculatorPopup(calculatorId);
});


function showCalculatorPopup(calculatorId) {
  // Get calculator information based on the ID
  var calculatorInfo = getCalculatorInfoById(calculatorId);
  custom_url=calculatorInfo.calc_url;
  id_used=calculatorInfo.parentapp;
  url=calculatorInfo.calc_url;
  ex=url.split("?");
  url2=ex[0]+"?vHeight=1";
  url3=ex[0]+"?q=1";
  short_url_used=calculatorInfo.short_url;
  title=calculatorInfo.name;
  cat01();

}

function getCalculatorInfoById(calculatorId) {
  var calculator = apiResponseData.find(function (entry) {
    return entry.id === calculatorId;
  });

  // Check if the calculator is found
  return calculator?calculator:null;

}
$(document).on('click', '#toggle-checkbox', function() {
  $('#toggle-checkbox1').prop('checked', false);
  var isToggleOn = $('#toggle-checkbox').prop('checked');
  if (isToggleOn == true) {
    // document.getElementById('preview-container').innerHTML=display_outgrow_calci('mobile_full_screen_facebook');
    document.getElementById('shortcode_text').innerText = '[outgrow type="mobile_full_screen_facebook" id="' + id_used + '"  data_title="' + title.replace(/'/g, ' ') + '"  data_url="' + url + '" short_url="' + short_url_used + '"][/outgrow]'
  } else {
      // document.getElementById('preview-container').innerHTML=display_outgrow_calci('mobile_full_screen');
      document.getElementById('shortcode_text').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
    }

//  isToggleOn ? document.getElementById('shortcode_text').innerText = '[outgrow type="mobile_full_screen_facebook" id="' + id_used + '"  data_title="' + title.replace(/'/g, ' ') + '"  data_url="' + url + '" short_url="' + short_url_used + '"][/outgrow]'
  // :  document.getElementById('shortcode_text').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
});
$(document).on('click', '#toggle-checkbox1', function() {
  $('#toggle-checkbox').prop('checked', false);
  var isToggleOn = $('#toggle-checkbox1').prop('checked');
 isToggleOn ? document.getElementById('shortcode_text').innerText = '[outgrow type="mobile_full_screen_override" id="' + id_used + '"  data_title="' + title.replace(/'/g, ' ') + '"  data_url="' + url + '" short_url="' + short_url_used + '"][/outgrow]'
  :  document.getElementById('shortcode_text').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
});
// Attach the handleToggle function to the onchange event of the toggle element

function getSelectedRadioButton() {
  var radioButtons = document.querySelectorAll('input[name="selector2"]');
  var selectedRadioButton;

  for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          selectedRadioButton = radioButtons[i];
          break;
      }
  }

  if (selectedRadioButton) {
    radioButtons.forEach(function (button) {
      button.parentNode.classList.remove('active');
  });

  // Add the style to the selected radio button's parent
  selectedRadioButton.parentNode.classList.add('active');
  if (selectedRadioButton.id == 'classic') {
    document.getElementById('shortcode_text').innerText = '[outgrow type="pop_up_classic" id="' + id_used + '"  data_title="' + title.replace(/'/g, ' ') + '"  data_url="' + url3 + '" ][/outgrow]';
    // document.getElementById('preview-container').innerHTML=display_outgrow_calci('pop_up_classic');
} else if (selectedRadioButton.id == 'Drawer_(L)') {
    document.getElementById('shortcode_text').innerText = '[outgrow type="pop_up_l" id="' + id_used + '"  data_title="' + title.replace(/'/g, ' ') + '"  data_url="' + url3 + '" ][/outgrow]';
    // document.getElementById('preview-container').innerHTML=display_outgrow_calci('pop_up_l');

  } else if (selectedRadioButton.id == 'Drawer_(R)') {
    document.getElementById('shortcode_text').innerText = '[outgrow type="pop_up_r" id="' + id_used + '"  data_title="' + title.replace(/'/g, ' ') + '"  data_url="' + url3 + '" ][/outgrow]';
    // document.getElementById('preview-container').innerHTML=display_outgrow_calci('pop_up_r');
  } else {
    document.getElementById('shortcode_text').innerText = '[outgrow type="pop_up" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('preview-container').innerHTML=display_outgrow_calci('pop_up');
  }

      console.log('Selected Radio Button ID:', selectedRadioButton.id);
  } else {
      console.log('No radio button selected.');
  }
}
function getSelectedchatRadioButton() {
  var radioButtons = document.querySelectorAll('input[name="chat_selector"]');
  var selectedRadioButton;

  for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          selectedRadioButton = radioButtons[i];
          break;
      }
  }

  if (selectedRadioButton) {
    radioButtons.forEach(function (button) {
      button.parentNode.classList.remove('active');
  });

  // Add the style to the selected radio button's parent
  selectedRadioButton.parentNode.classList.add('active');
    selectedRadioButton.id=='bottom_left' ? document.getElementById('shortcode_text').innerText='[outgrow type="chat_left" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]'
  : document.getElementById('shortcode_text').innerText='[outgrow type="chat_right" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';

      console.log('Selected Radio Button ID:', selectedRadioButton.id);
  } else {
      console.log('No radio button selected.');
  }
}
function getSelectedGreetBarRadioButton() {
  var radioButtons = document.querySelectorAll('input[name="GreetBar_selector"]');
  var selectedRadioButton;

  for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          selectedRadioButton = radioButtons[i];
          break;
      }
  }

  if (selectedRadioButton) {
    radioButtons.forEach(function (button) {
      button.parentNode.classList.remove('active');
  });

  // Add the style to the selected radio button's parent
  selectedRadioButton.parentNode.classList.add('active');
    selectedRadioButton.id=='InNewTab' ? document.getElementById('shortcode_text').innerText='[outgrow type="Greet_Bar" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]'
  : document.getElementById('shortcode_text').innerText='[outgrow type="Greet_Bar_popup" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';

      console.log('Selected Radio Button ID:', selectedRadioButton.id);
  } else {
      console.log('No radio button selected.');
  }
}
function getSelectedFloating_RectangleRadioButton() {
  var radioButtons = document.querySelectorAll('input[name="Floating_Rectangle"]');
  var selectedRadioButton;

  for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          selectedRadioButton = radioButtons[i];
          break;
      }
  }

  if (selectedRadioButton) {
    radioButtons.forEach(function (button) {
      button.parentNode.classList.remove('active');
  });

  // Add the style to the selected radio button's parent
  selectedRadioButton.parentNode.classList.add('active');
    selectedRadioButton.id=='Align_Left' ? document.getElementById('shortcode_text').innerText='[outgrow type="Floating_Rectangle_l" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]'
  : selectedRadioButton.id=='Align_Center' ? document.getElementById('shortcode_text').innerText='[outgrow type="Floating_Rectangle_c" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]':
  document.getElementById('shortcode_text').innerText='[outgrow type="Floating_Rectangle_r" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';

      console.log('Selected Radio Button ID:', selectedRadioButton.id);
  } else {
      console.log('No radio button selected.');
  }
}
function getSelectedsideNoteRadioButton() {
  var radioButtons = document.querySelectorAll('input[name="sidenote_selector"]');
  var selectedRadioButton;

  for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          selectedRadioButton = radioButtons[i];
          break;
      }
  }

  if (selectedRadioButton) {
    radioButtons.forEach(function (button) {
      button.parentNode.classList.remove('active');
  });

  // Add the style to the selected radio button's parent
  selectedRadioButton.parentNode.classList.add('active');

    selectedRadioButton.id=='side_left' ? document.getElementById('shortcode_text').innerText='[outgrow type="side_l" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]'
  : document.getElementById('shortcode_text').innerText='[outgrow type="side_r" id="'+id_used+ '"  data_title="'+ title.replace(/'/g, ' ') +'"  data_url="'+url3+'" ][/outgrow]';

      console.log('Selected Radio Button ID:', selectedRadioButton.id);
  } else {
      console.log('No radio button selected.');
  }
}
function loadScript(url, callback){
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = url;
          script.onload = callback;
          document.head.appendChild(script);
      }
function display_outgrow_calci(type){
{/* <iframe id='og_iframe' src='$values[data_url]' style='border: none; overflow: hidden;' scrolling='yes'></iframe>"; */}

//based on input determine what to return
var output = '';
      var data="";
      if(type == "mobile_full_screen" ){
      loadScript('//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js', function(){
          initIframe(id_used);
      });
      output="<div><div class='op-interactive' id='"+id_used+"' data-title='"+title+"' data-url='"+url+"' data-surl='undefined' data-width='100%'></div><script>var og_temp=document.createElement('script');og_temp.async=true;og_temp.defer=true;og_temp.src='//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js',og_temp.onload=function(){initIframe('"+id_used+"')},document.querySelector('head').appendChild(og_temp)</script></div>";
      console.log(output);
      }
      else if(type == "mobile_full_screen_facebook" ){
                   loadScript('//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js', function(){
            initIframe(id_used);
        });
          output="<div><div class='op-interactive' id='"+id_used+"' data-title='"+title+"' data-url='"+url+"' data-surl='undefined' data-width='100%'></div><script>var og_temp=document.createElement('script');og_temp.async=true;og_temp.defer=true;og_temp.src='//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js',og_temp.onload=function(){initIframe('"+id_used+"')},document.querySelector('head').appendChild(og_temp)</script></div><div id='fb-root'></div><script>(function(d, s, id){var js, fjs=d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js=d.createElement(s); js.id=id; js.src='//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10'; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script><div class='fb-comments' data-href='https://bnb22.outgrow.us/5c02208bdf06b53edca20231' data-width='100%' data-numposts='5'></div>";
console.log(output);
      }
      else if(type == "mobile_in_page" ){
        loadScript('//dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js', function(){
          initIframe(id_used);
      });
      output = "<div><div class='op-interactive' id='" + id_used + "' data_title='" + title + "' data-url='" + url + "?vHeight=1' data-width='100%'></div><script>var og_temp=document.createElement('script');og_temp.async=true;og_temp.defer=true;og_temp.src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js',og_temp.onload=function(){initIframe('65a626c79cafaf4eb14388eb')},document.querySelector('head').appendChild(og_temp)</script></div>";
      // <div><div class='op-interactive' id='"+id_used+"'  data_title='"+ title+"'  data_url='"+url2+"' data-surl='"+short_url_used+"' data-width='100%'></div></div>";
        console.log(output);
      }
      else if(type == "pop_up"){
        loadScript('//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js', function(){
          initIframe(id_used);
      });
           output="<div><div id='"+id_used+"' data-embedCookieDays='10'  data_title='" + title + "' data-embedScheduling='false' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-p' data-type='outgrow-l' data-url='"+url3+"' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('"+id_used+"');</script></div>";     
      }
      else if(type == "pop_up_classic"){
        loadScript('//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js', function(){
          initIframe(id_used);
      });
           output="<div><div id='"+id_used+"' data-embedCookieDays='10'  data_title='" + title + "' data-embedScheduling='false' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-p' data-type='outgrow-l' data-url='"+url3+"' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('"+id_used+"');</script></div>";     
      }
      else if(type == "pop_up_l"){
        loadScript('//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js', function(){
          initIframe(id_used);
      });
      $output="<div><div id='"+id_used+"' data-embedCookieDays='10' data-embedScheduling='false' data_title='" + title + "'  data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5' data-isLDrawer='true' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-d' data-type='outgrow-l' data-url='"+url3+"' data-text='Get Started'> </div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script> <script>initIframe('"+id_used+"');</script></div>";
      }
      else if(type == "pop_up_r"){
        loadScript('//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js', function(){
          initIframe(id_used);
      });
          $output="<div><div id='"+id_used+"' data-embedCookieDays='10'  data-title='$values[data_title]' data-embedScheduling='false' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='0' data-embedTimeValue='5' data-isLDrawer='false' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-d' data-type='outgrow-l' data-url='$values[data_url]' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('"+id_used+"');</script></div>";
      }else if(type == "pop_up_custom"){
          $output="<div><div id='"+id_used+"' data-embedCookieDays='$values[repeatTime]'  data-title='$values[data_title]' data-embedScheduling='true' data-embedTimed='true' data-embedExit='false' data-embedTimeFormat='$values[showExactD]' data-embedTimeValue='$values[showExact]' data-isLDrawer='false' data-embedBorderRadius='0' data-embedFontSize='12' data-textcolor='#fb5f66' data-bgcolor='#fb5f66' data-prop='outgrow-d' data-type='outgrow-l' data-url='$values[data_url]' data-text='Get Started'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nploader.js'></script><script>initIframe('"+id_used+"');</script></div>";
      }
      else if(type == "chat"){
          $output="<link href='/css/chat.css' rel='stylesheet'>wp_register_style('my-plugin-style4','https://fonts.googleapis.com/icon?family=Material+Icons');<a href='javascript:void(0);' style='background-color: #FF3C5D' class='bot-circle right' id='bot-circle' onclick='ogAnimationInit()'><div class='bot-circle-icon-open'><i style='color: #ffffff' class='material-icons'>chat</i></div><div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div><div class='og-chat-tooltip'><p>Whats your future like ?</p><span class='og-chat-cross' onclick='ogAnimationTextremoveInit(event)'><i class='material-icons'>clear</i></span></div></a><div class='og-chat-box no-animation' id='og-chat-box'><div class='og-chat-box-top' style='background-color: #FF3C5D'><a href='javascript:void(0);' class='bot-circle-mobile' id='bot-circle-mobile' onclick='ogAnimationClose()'><div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div></a></div><iframe src='$values[data_url]' width='100%' height='100%'></iframe></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/chat.js'></script>";
     }
     else if(type == "chat_left"){
         $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/chatV2.css' rel='stylesheet'><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'> <a href='javascript:void(0);' style='background-color: #FF3C5D' class='bot-circle left' id='bot-circle' onclick='ogAnimationInit()'><div class='bot-circle-icon-open'><i style='color: #ffffff' class='material-icons'>chat</i></div><div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div><div class='og-chat-tooltip'><p>Whats your future like ?</p><span class='og-chat-cross' onclick='ogAnimationTextremoveInit(event)'><i class='material-icons'>clear</i></span></div></a><div class='og-chat-box no-animation' id='og-chat-box' style='left: 30px;'><div class='og-chat-box-top' style='background-color: #FF3C5D'><a href='javascript:void(0);' class='bot-circle-mobile' id='bot-circle-mobile' onclick='ogAnimationClose()'><div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div></a></div><iframe src='$values[data_url]' width='100%' height='100%'></iframe></div> <script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/chat.js'></script>";
     }
     else if(type== "chat_right"){
         $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/chatV2.css' rel='stylesheet'><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><a href='javascript:void(0);' style='background-color: #FF3C5D' class='bot-circle right' id='bot-circle' onclick='ogAnimationInit()'><div class='bot-circle-icon-open'><i style='color: #ffffff' class='material-icons'>chat</i></div><div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div><div class='og-chat-tooltip'><p>Whats your future like ?</p><span class='og-chat-cross' onclick='ogAnimationTextremoveInit(event)'><i class='material-icons'>clear</i></span></div></a><div class='og-chat-box no-animation' id='og-chat-box'><div class='og-chat-box-top' style='background-color: #FF3C5D'><a href='javascript:void(0);' class='bot-circle-mobile' id='bot-circle-mobile' onclick='ogAnimationClose()'><div class='bot-circle-icon-close'><i style='color: #ffffff' class='material-icons'>close</i></div></a></div><iframe src='$values[data_url]' width='100%' height='100%'></iframe></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/chat.js'></script>";
     }
     else if(type== "Greet_Bar"){
      $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_greet_bar.css'><section style='background: #666666;' class='barEmbed' id='barEmbed'><p style='color: #FFFFFF;font-size: 15px;'>Enter Greet Bar Title Here</p><a style='border-radius: 20px; color: #666666;font-size: 12px;background: #FFFFFF;' href='$values[data_url]' target='_blank' class='greet-popup-open'>Button Text</a></section><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_greet_bar.js'></script>";
  }
  else if(type== "Greet_Bar_popup"){
      $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_greet_bar.css'><section style='background: #666666;' class='barEmbed' id='barEmbed'><p style='color: #FFFFFF;font-size: 15px;'>Enter Greet Bar Title Here</p><button style='border-radius: 20px; color: #666666;font-size: 12px;background: #FFFFFF;' class='greet-popup-open' onClick='openGreetPopup()'>Button Text</button></section><section class='greet_popup' id='greet_popup' style='display:none'><iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;'></iframe><a href='javascript:void(0);' class='close-popup' onClick='closeGreetPopup()'></a></section><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_greet_bar.js'></script>";
  }
  else if(type== "Floating_Rectangle_l"){
      $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/float.css' rel='stylesheet'><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><div class='bot-circle left' id='bot-circle' onclick='ogAnimationInit()'><div style='background: #262626;' class='og-chat-tooltip'><p style='color: #FB5F66;font-size: 12px;'>Heading of this floating rectangle</p><div class='helptext' style='color: #ce4646;font-size: 16px;'>Help text</div> </div></div><div class='og-chat-box-outer'><div class='og-chat-box no-animation' id='og-chat-box'><div style='background: #262626;' class='floating-embedOpen-topbar'><p style='color: #FB5F66;'>Heading of this floating rectangle</p><a href='javascript:void(0);' onclick='ogAnimationInit()' class='bot-circle-icon-close'><i style='color: #FB5F66;' class='material-icons'>close</i></a></div><iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;' width='100%' height='100%'></iframe> </div></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/float.js'></script>";
  }
  else if(type== "Floating_Rectangle_c"){
      $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/float.css' rel='stylesheet'><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><div class='bot-circle center' id='bot-circle' onclick='ogAnimationInit()'><div style='background: #262626;' class='og-chat-tooltip'><p style='color: #FB5F66;font-size: 12px;'>Heading of this floating rectangle</p><div class='helptext' style='color: #ce4646;font-size: 16px;'>Help text</div></div></div><div class='og-chat-box-outer'><div class='og-chat-box no-animation' id='og-chat-box'><div style='background: #262626;' class='floating-embedOpen-topbar'><p style='color: #FB5F66;'>Heading of this floating rectangle</p> <a href='javascript:void(0);' onclick='ogAnimationInit()' class='bot-circle-icon-close'><i style='color: #FB5F66;' class='material-icons'>close</i></a></div><iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;' width='100%' height='100%'></iframe></div></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/float.js'></script>";
  }
  else if(type== "Floating_Rectangle_r"){
      $output="<link href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/float.css' rel='stylesheet'><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><div class='bot-circle right' id='bot-circle' onclick='ogAnimationInit()'><div style='background: #262626;' class='og-chat-tooltip'><p style='color: #FB5F66;font-size: 12px;'> Heading of this floating rectangle</p><div class='helptext' style='color: #ce4646;font-size: 16px;'>Help text</div></div></div><div class='og-chat-box-outer'><div class='og-chat-box no-animation' id='og-chat-box'><div style='background: #262626;' class='floating-embedOpen-topbar'><p style='color: #FB5F66;'>Heading of this floating rectangle</p> <a href='javascript:void(0);' onclick='ogAnimationInit()' class='bot-circle-icon-close'><i style='color: #FB5F66;' class='material-icons'>close</i></a></div><iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;' width='100%' height='100%'></iframe> </div></div><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/float.js'></script>";
  }
  else if(type== "side_l"){
      $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_sidenote.css'><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><section style='background: #c5dea0;' class='barEmbed sidenote left' id='barEmbed' onClick='openGreetPopup()'><p style='color: #e63737;font-size: 14px;'>Feedback</p><i class='material-icons' style='color: #4f53c4;font-size: 20px;'>brightness_high</i></section><section class='greet_popup' id='greet_popup' style='display:none'> <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;'></iframe> <a href='javascript:void(0);' class='close-popup' onClick='closeGreetPopup()'></a></section><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_sidenote.js'></script>";
  }
  else if(type== "side_r"){
      $output="<link rel='stylesheet' type='text/css' href='https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_sidenote.css'><link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><section style='background: #c5dea0;' class='barEmbed sidenote left' id='barEmbed' onClick='openGreetPopup()'><p style='color: #e63737;font-size: 14px;'>Feedback</p><i class='material-icons' style='color: #4f53c4;font-size: 20px;'>brightness_high</i></section><section class='greet_popup' id='greet_popup' style='display:none'> <iframe title='$values[data_title]' src='$values[data_url]' allow='camera *;'></iframe> <a href='javascript:void(0);' class='close-popup' onClick='closeGreetPopup()'></a></section><script src='https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_sidenote.js'></script>";
  }
      else if(type == "custom_type"){
          $output="<style>@media screen and (max-width: 640px){#og_iframe{height: `$values[mh]$values[mhd]`;width:$values[mw]$values[mwd];}}@media screen and (min-width: 641px) and (max-width: 1024px){#og_iframe{height: `$values[th]$values[thd]`;width:$values[tw]$values[twd];}}@media screen and (min-width: 1025px){#og_iframe{height: `$values[dh]$values[dhd]`;width:$values[dw]$values[dwd];}}</style><iframe id='og_iframe' src='$values[data_url]' style='border: none; overflow: hidden;' scrolling='yes'></iframe>";
      }  
      return output;
      // print("---------------shortcode editing-----id------."+id_used+".-------url--------.$values[data_url].-----short url----$values[short_url]");
      // print("<div><div class='op-interactive' id='"+id_used+"' data-url='$values[data_url]' data-surl='$values[short_url]' data-width='100%'></div><script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js'></script><script>initIframe('"+id_used+"');</script></div>");
}
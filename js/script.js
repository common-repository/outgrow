var apiSet=[];
apiValue=false;
var showForm=true;
var usedApi="";
  
  // for new variables
  var id_used="",id="";
  var custom_url,url1,url2,url3;
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


  function copy(tabid){
    var copyText = document.getElementById(tabid);
    console.log(tabid);
    // var copyText2 = document.getElementById("text-inside-1");
    copyText.setAttribute('readonly', '');
    // copyText2.setAttribute('readonly', '');
    
    copyText.select();
    // copyText2.select();

    document.execCommand("copy");
    removeHide('click-copy-text');
    // removeHide('click-copy-text');

    
  }
  
  
  function viewDetails(id,calci_url,short_url){
    custom_url=calci_url;
    addHide("click-copy-text");
    id_used=id;
    displayBlock("myModal");
    // var id="5b9ab036a6aaea5e7f2481ac";
    url=calci_url;
    ex=url.split("?");
    
    url2=ex[0]+"?vHeight=1";
    url3=ex[0]+"?q=1";
  
    short_url_used=short_url;
    cat01();
    document.getElementById('text-inside-tone').innerText='[outgrow type="mobile_full_screen" id="'+id+ '" data_url="'+url+'" short_url="'+short_url+'"][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="mobile_full_screen" id="'+id+ '" data_url="'+url+'" short_url="'+short_url+'"][/outgrow]';
    
  }
  
  window.onclick = function(event) {
    var modal=this.document.getElementById('myModal')
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
  
  function hide(){
    document.getElementById("myModal").style.display = "none";
  }
  
  function hideFooter(){
    document.getElementById("wpfooter").style.display="none";
  }
  
  
  function cat01(){
    console.log("-----------------------===============---------------------",document.getElementById('text-inside'));
    // document.getElementById("super-code-id").classList.add("super-get-code");
    // document.getElementById("super-code-id").classList.remove("super-get-full");
    // document.getElementById("super-code-id-1").classList.add("super-get-code");
    // document.getElementById("super-code-id-1").classList.remove("super-get-full");
    // displayBlock("extra-option");
    // displayBlock("extra-option-1");

    document.getElementById('extra-option-tone').innerHTML="<div class='facebook-link'><div class='fb-link-text'>Facebook Comments</div><div class='span-fb-text'><i class='la la-question-circle la-2x'></i></div><div class='facebook-div' id='facebook-div' onclick='toggleSwitch()'><input type='text'  class='facebook-input-type' ><span class='facebook-span' id='facebook-span'></span></div></div>";
    // document.getElementById('extra-option-1').innerHTML="<div class='facebook-link'><div class='fb-link-text'>Facebook Comments</div><div class='span-fb-text'><i class='la la-question-circle la-2x'></i></div><div class='facebook-div' id='facebook-div' onclick='toggleSwitch()'><input type='text'  class='facebook-input-type' ><span class='facebook-span' id='facebook-span'></span></div></div>";
    
    // document.getElementById('text-inside').classList.remove('text-area-enlarge');
    // document.getElementById('text-inside').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '" data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
    document.getElementById('text-inside-tone').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '" data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
    
    // document.getElementById('text-inside-1').classList.remove('text-area-enlarge');
    // document.getElementById('text-inside-1').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '" data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';

  }
  function cat02(){
    console.log("----------------cat02-------------", document.getElementById('text-inside-new'));
    // displayNone("extra-option");
    // displayNone("extra-option-1");

    // document.getElementById('text-inside').classList.add('text-area-enlarge');
    // document.getElementById('text-inside-1').classList.add('text-area-enlarge');

    // document.getElementById("super-code-id").classList.remove("super-get-code");
    // document.getElementById("super-code-id").classList.add("super-get-full");
    // document.getElementById("super-code-id-1").classList.remove("super-get-code");
    // document.getElementById("super-code-id-1").classList.add("super-get-full");
    // addHide("click-copy-text");
    // document.getElementById('text-inside').innerText='[outgrow type="mobile_in_page" id="'+id_used+ '" data_url="'+url2+'" short_url="'+short_url_used+'"][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="mobile_in_page" id="'+id_used+ '" data_url="'+url2+'" short_url="'+short_url_used+'"][/outgrow]';
    document.getElementById('text-inside-ttwo').innerText='[outgrow type="mobile_in_page" id="'+id_used+ '" data_url="'+url2+'" short_url="'+short_url_used+'"][/outgrow]';
  
  }
  function cat03(){
    // document.getElementById("super-code-id").classList.add("super-get-code");
    // document.getElementById("super-code-id").classList.remove("super-get-full");
    // document.getElementById("super-code-id-1").classList.add("super-get-code");
    // document.getElementById("super-code-id-1").classList.remove("super-get-full");
    // displayBlock("extra-option");
    // displayBlock("extra-option-1");

    // document.getElementById('text-inside').classList.remove('text-area-enlarge');
    // document.getElementById('text-inside-1').classList.remove('text-area-enlarge');

    document.getElementById('extra-option-tthree').innerHTML=
    "<div class='main-div-option'>"+
    "<div class='extra-option-button' onclick='classic()' id='cat031'>"+
        "<div class='classic-img'><img src='https://cdn.filestackcontent.com/oCNA05WS3GwmTbYX7yn2'></div>"+
        "<div class='classic-text'>Classic</div>"+
    "</div>"+
    "<div onclick='drawerL()' class='extra-option-button' id='cat032'>"+
        "<div class='drawerl-img'><img src='https://cdn.filestackcontent.com/PBcvjT9Rhi6PEIXB8IGG'></div>"+
        "<div class='drawerl-text'>Drawer (L)</div>"+
    "</div>"+
    "<div onclick='drawerR()' class='extra-option-button' id='cat033'>"+
        "<div class='drawerr-img'><img src='https://cdn.filestackcontent.com/Z45pnQBoQdWcRU6YU7NM'></div>"+
        "<div class='drawerr-text'>Drawer (R)</div>"+
    "</div></div>"+
    "<div class='time-link'><div class='time-link-text'>TIMED & EXIT INTENT<div class='time-div' id='time-div' onclick='toggleSwitch2()'><input type='text'  class='time-input-type' ><span class='time-span' id='time-span'></span></div></div></div>"+
    "<div class='time-option' id='time-option'></div>";


    // document.getElementById('extra-option-1').innerHTML=
    // "<div class='main-div-option'>"+
    // "<div class='extra-option-button' onclick='classic()' id='cat031'>"+
    //     "<div class='classic-img'><img src='https://cdn.filestackcontent.com/oCNA05WS3GwmTbYX7yn2'></div>"+
    //     "<div class='classic-text'>Classic</div>"+
    // "</div>"+
    // "<div onclick='drawerL()' class='extra-option-button' id='cat032'>"+
    //     "<div class='drawerl-img'><img src='https://cdn.filestackcontent.com/PBcvjT9Rhi6PEIXB8IGG'></div>"+
    //     "<div class='drawerl-text'>Drawer (L)</div>"+
    // "</div>"+
    // "<div onclick='drawerR()' class='extra-option-button' id='cat033'>"+
    //     "<div class='drawerr-img'><img src='https://cdn.filestackcontent.com/Z45pnQBoQdWcRU6YU7NM'></div>"+
    //     "<div class='drawerr-text'>Drawer (R)</div>"+
    // "</div></div>"+
    // "<div class='time-link'><div class='time-link-text'>TIMED & EXIT INTENT<div class='time-div' id='time-div' onclick='toggleSwitch2()'><input type='text'  class='time-input-type' ><span class='time-span' id='time-span'></span></div></div></div>"+
    // "<div class='time-option' id='time-option'></div>";

   
    // addHide("click-copy-text");
    // document.getElementById('text-inside').innerText='[outgrow type="pop_up" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="pop_up" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    document.getElementById('text-inside-tthree').innerText='[outgrow type="pop_up" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    
  }
  function cat04(){
    // document.getElementById("super-code-id").classList.add("super-get-code");
    // document.getElementById("super-code-id").classList.remove("super-get-full");
    // document.getElementById("super-code-id-1").classList.add("super-get-code");
    // document.getElementById("super-code-id-1").classList.remove("super-get-full");
    // displayBlock("extra-option");
    // displayBlock("extra-option-1");

    // document.getElementById('text-inside').classList.remove('text-area-enlarge');
    // document.getElementById('text-inside-1').classList.remove('text-area-enlarge');
    
    // document.getElementById('extra-option').innerHTML="<div class='extra-option-chat-button' onclick='chatLeft()' id='chatLeft'><div class='bottom-img'><img class='bottom-min' src='https://dlvkyia8i4zmz.cloudfront.net/o1PZBSLiQuq5HTCCyrMt_bottom_left.png'></div><div class='bottom-text'>Bottom Left</div></div><div onclick='chatRight()' class='extra-option-chat-button' id='bottomRight'><div class='bottom-img'><img class='bottom-min' class='bottom-img' src='https://dlvkyia8i4zmz.cloudfront.net/5uGcgvoRIie2dwQNk9kv_bottom_right.png'></div><div class='bottom-text'>Bottom Right</div></div>";
    // document.getElementById('extra-option-1').innerHTML="<div class='extra-option-chat-button' onclick='chatLeft()' id='chatLeft'><div class='bottom-img'><img class='bottom-min' src='https://dlvkyia8i4zmz.cloudfront.net/o1PZBSLiQuq5HTCCyrMt_bottom_left.png'></div><div class='bottom-text'>Bottom Left</div></div><div onclick='chatRight()' class='extra-option-chat-button' id='bottomRight'><div class='bottom-img'><img class='bottom-min' class='bottom-img' src='https://dlvkyia8i4zmz.cloudfront.net/5uGcgvoRIie2dwQNk9kv_bottom_right.png'></div><div class='bottom-text'>Bottom Right</div></div>";
    document.getElementById('extra-option-tfour').innerHTML="<div class='extra-option-chat-button' onclick='chatLeft()' id='chatLeft'><div class='bottom-img'><img class='bottom-min' src='https://dlvkyia8i4zmz.cloudfront.net/o1PZBSLiQuq5HTCCyrMt_bottom_left.png'></div><div class='bottom-text'>Bottom Left</div></div><div onclick='chatRight()' class='extra-option-chat-button' id='bottomRight'><div class='bottom-img'><img class='bottom-min' class='bottom-img' src='https://dlvkyia8i4zmz.cloudfront.net/5uGcgvoRIie2dwQNk9kv_bottom_right.png'></div><div class='bottom-text'>Bottom Right</div></div>";
    
    // addHide("click-copy-text");
    // document.getElementById('text-inside').innerText='[outgrow type="chat" " data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="chat" " data_url="'+url3+'" ][/outgrow]';
    document.getElementById('text-inside-tfour').innerText='[outgrow type="chat" " data_url="'+url3+'" ][/outgrow]';

  
  }
  function cat05(){
    // document.getElementById("super-code-id").classList.add("super-get-code");
    // document.getElementById("super-code-id").classList.remove("super-get-full");
    // document.getElementById("super-code-id-1").classList.add("super-get-code");
    // document.getElementById("super-code-id-1").classList.remove("super-get-full");
    // displayBlock("extra-option");
    // displayBlock("extra-option-1");

    // document.getElementById('text-inside').classList.remove('text-area-enlarge');
    // document.getElementById('text-inside-1').classList.remove('text-area-enlarge');
    
    document.getElementById('extra-option-tfive').innerHTML="<div class='extra-option-context'><div class='extra-option-custom' id='desktop'>"+
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
   


  //   document.getElementById('extra-option-1').innerHTML="<div class='extra-option-context'><div class='extra-option-custom' id='desktop'>"+
  //   "<p>Desktop </p>"+
  //   "<div class='custom-dim-head'>"+
  //   "<div class='super-dim'>Height</div>"+
  //   "<div class='super-input-dim'>"+
  //     "<input type='text' class='input-dim' id='heightDesktop' name='heightDesktop' onkeypress='return getDesktopHeight(event)' placeholder='620'>"+
  //     "<select class='select-custom' name='selecthDesktop' id='selecthDesktop' onchange='getHeightD()'><option>%</option><option selected>px</option><option>vh</option></select>"+
  //   "</div>"+
  // "</div>"+

  // "<div>"+
  //   "<div class='super-dim'>Width</div>"+
  //   "<div class='super-input-dim'>"+
  //     "<input type='text' class='input-dim' name='widthDesktop' id='widthDesktop' onkeypress='return getDesktopWidth(event)' placeholder='100'>"+
  //     "<select name='selectwDesktop' id='selectwDesktop' class='select-custom' onchange='getWidthD()'><option>%</option><option selected>px</option><option>vh</option></select>"+
  //   "</div>"+
  // "</div>"+
  //   "</div>"+
  //   // tablet
  //   "<div class='extra-option-custom' id='tablet' ><p>Tablet</p>"+
  //   "<div class='custom-dim-head'>"+
  //   "<div class='super-dim'>Height</div>"+
  //   "<div class='super-input-dim'>"+
  //     "<input type='text' class='input-dim' name='heightTablet' id='heightTablet' onkeypress='return getTabletHeight(event)' placeholder='620'>"+
  //     "<select class='select-custom' onchange='getHeightT()' id='selecthTablet' name='selecthTablet'><option>%</option><option selected>px</option><option>vh</option></select>"+
  //   "</div>"+
  // "</div>"+

  // "<div>"+
  //   "<div class='super-dim'>Width</div>"+
  //   "<div class='super-input-dim'>"+
  //     "<input type='text' class='input-dim' name='widthTablet' id='widthTablet' onkeypress='return getTabletWidth(event)' placeholder='100'>"+
  //     "<select class='select-custom' id='selectwTablet' onchange='getWidthT()' name='selectwTablet'><option>%</option><option selected>px</option><option>vh</option></select>"+
  //   "</div>"+
  // "</div>"+
  //   "</div>"
  //   // mobile
  //   +"<div class='extra-option-custom' id='mobile'><p>Mobile</p>"+
  //   "<div class='custom-dim-head'>"+
  //   "<div class='super-dim'>Height</div>"+
  //   "<div class='super-input-dim'>"+
  //     "<input type='text' class='input-dim' name='heightMobile' id='heightMobile' onkeypress='return getMobileHeight(event)' placeholder='620'>"+
  //     "<select class='select-custom' id='selecthMobile' onchange='getHeightM()' name='selectwMobile'><option>%</option><option selected>px</option><option>vh</option></select>"+
  //   "</div>"+
  // "</div>"+

  // "<div>"+
  //   "<div class='super-dim'>Width</div>"+
  //   "<div class='super-input-dim'>"+
  //     "<input type='text' class='input-dim' id='widthMobile' onkeypress='return getMobileWidth(event)' name='widthMobile' placeholder='100'>"+
  //     "<select class='select-custom' id='selectwMobile' onchange='getWidthM()' name='selectwMobile'><option>%</option><option selected>px</option ><option>vh</option></select>"+
  //   "</div>"+
  // "</div>"+
  //   "</div></div>";

    
    addHide("click-copy-text");
    customOutput();
  }

  function classic(){
    // document.getElementById("cat031").classList.add("custom-active");
    // document.getElementById("cat032").classList.remove("custom-active");
    // document.getElementById("cat033").classList.remove("custom-active");
    // addHide("click-copy-text");
    // document.getElementById('text-inside').innerText='[outgrow type="pop_up_classic" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="pop_up_classic" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    jQuery('#cat031').addClass("active-span1");
    jQuery('#cat032').removeClass("active-span1");
    jQuery('#cat033').removeClass("active-span1");
    document.getElementById('text-inside-tthree').innerText='[outgrow type="pop_up_classic" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
  
  }
  function drawerL(){
    jQuery('#cat032').addClass("active-span1");
    jQuery('#cat031').removeClass("active-span1");
    jQuery('#cat033').removeClass("active-span1");
    // document.getElementById("cat031").classList.remove("custom-active");
    // document.getElementById("cat032").classList.add("custom-active");
    // document.getElementById("cat033").classList.remove("custom-active");
    addHide("click-copy-text");
    // document.getElementById('text-inside').innerText='[outgrow type="pop_up_l" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="pop_up_l" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    document.getElementById('text-inside-tthree').innerText='[outgrow type="pop_up_l" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
  
  }
  function drawerR(){
    jQuery('#cat033').addClass("active-span1");
    jQuery('#cat032').removeClass("active-span1");
    jQuery('#cat031').removeClass("active-span1");

    // document.getElementById("cat031").classList.remove("custom-active");
    // document.getElementById("cat032").classList.remove("custom-active");
    // document.getElementById("cat033").classList.add("custom-active");
    addHide("click-copy-text");
    // document.getElementById('text-inside').innerText='[outgrow type="pop_up_r" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="pop_up_r" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    document.getElementById('text-inside-tthree').innerText='[outgrow type="pop_up_r" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';
    
  }
  
  function chatLeft(){
    jQuery('#chatLeft').addClass("active-span1");
    jQuery('#bottomRight').removeClass("active-span1");
    addHide("click-copy-text");
    // document.getElementById('bottomRight').classList.remove('custom-active');
    // document.getElementById('chatLeft').classList.add('custom-active');
    document.getElementById('text-inside-tfour').innerText='[outgrow type="chat_left" " data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="chat_left" " data_url="'+url3+'" ][/outgrow]';
    
  }

  function chatRight(){
    jQuery('#bottomRight').addClass("active-span1");
    jQuery('#chatLeft').removeClass("active-span1");
    addHide("click-copy-text");
    // document.getElementById('bottomRight').classList.add('custom-active');
    // document.getElementById('chatLeft').classList.remove('custom-active');
    document.getElementById('text-inside-tfour').innerText='[outgrow type="chat_right" " data_url="'+url3+'" ][/outgrow]';
    // document.getElementById('text-inside-1').innerText='[outgrow type="chat_right" " data_url="'+url3+'" ][/outgrow]';
    
  }

  function getDesktopHeight(e){
    var count1=0;
    if(e.which >=48 && e.which <=57 || e.which == 8 || e.which == 46){
      window.onclick=function(){
        if(count1==0){
          var heightD=document.getElementById("heightDesktop").value;
          textcustom=document.getElementById('text-inside');
          customHeightD=heightD;
          // custom='[outgrow type="custom_desktop_height" " data_url="'+url3+'" "height"="'+heightD+'"][/outgrow]';
          // document.getElementById('text-inside').innerText='[outgrow type="custom_desktop_height" " data_url="'+url3+'" "height"="'+heightD+'"][/outgrow]';
          customOutput();
          count1++; 
        }
        return true;
      }
    }else{
      return false;
    }
      
  }

  function getTabletHeight(e){
    var count2=0;
    if(e.which >=48 && e.which <=57){
      window.onclick=function(){
        if(count2==0){
          var heightD=document.getElementById("heightTablet").value;
           count2++; 
          customHeightT=heightD;
          customOutput();

        }
        return true;

      }
    }else{
      return false;
    }
      
  }

  function getMobileHeight(e){
    var count3=0;
    if(e.which >=48 && e.which <=57){
      window.onclick=function(){
        if(count3==0){
          var heightD=document.getElementById("heightMobile").value;
           customHeightM=heightD;
          customOutput();

          count3++; 
        }
        return true;
      }
    }else{
      return false;
    }
      
  }

  function getDesktopWidth(e){
    var count4=0;
    if(e.which >=48 && e.which <=57){
    window.onclick=function(){
      if(count4==0){
        var widthD=document.getElementById("widthDesktop").value;
         customWidthD=widthD;
        customOutput();

        count4++;
      }
        return true;
      }
    }else{
    return false;
  }
}

  function getTabletWidth(e){
    var count5=0;
    if(e.which >=48 && e.which <=57){
      window.onclick=function(){
        if(count5==0){
          var widthD=document.getElementById("widthTablet").value;
           customWidthT=widthD;
          customOutput();

          count5++;
        }
        return true;
      }
    }else{
      return false;
    }
  }

  function getMobileWidth(e){
    var count6=0;
    if(e.which >=48 && e.which <=57){
      window.onclick=function(){
        if(count6==0){
          var widthD=document.getElementById("widthMobile").value;
          customWidthM=widthD;
          customOutput();

          count6++;
        }
        return true;
      }
    }else{
      return false;
    }
  }

  function getHeightD(){
    hdim=document.getElementById("selecthDesktop").value;
    customHeightDDim=hdim;
    customOutput();
  }
  function getHeightT(){
    hdim=document.getElementById("selecthTablet").value;
    customHeightTDim=hdim;
    customOutput();
 }
  function getHeightM(){
    hdim=document.getElementById("selecthMobile").value;
    customHeightMDim=hdim;
    customOutput();
 }
  function getWidthD(){
    wdim=document.getElementById("selectwDesktop").value;
    customWidthDDim=wdim;
    customOutput();
}
  function getWidthT(){
    wdim=document.getElementById("selectwTablet").value;
    customWidthTDim=wdim;
    customOutput();
}
  function getWidthM(){
    wdim=document.getElementById("selectwMobile").value;
    customWidthMDim=wdim;
    customOutput();
   }

  function result(type){
    addHide("click-copy-text");
    if(type == 'Calculator'){
      document.getElementById('icon-la-calc').classList.add('icon-active');
      document.getElementById('icon-la-quiz').classList.remove('icon-active');
      document.getElementById('icon-la-Assessment').classList.remove('icon-active');
      document.getElementById('icon-la-poll').classList.remove('icon-active');
      document.getElementById('icon-la-eCom').classList.remove('icon-active');
      document.getElementById('icon-la-Chatbot').classList.remove('icon-active');
      document.getElementById('icon-la-Giveaway').classList.remove('icon-active');
      document.getElementById('icon-la-Survey').classList.remove('icon-active');
      
      document.getElementById("get-calci-name").innerText="Calculator";
      displayBlock("result1");
      displayNone("result-quiz");
      displayNone("result-Assessment");
      displayNone("result3");
      displayNone("result-eCom");
      displayNone("result-Chatbot");
      displayNone("result-Giveaway");
      displayNone("result-Survey");
      
      return type;
    }
    else if(type == 'Quiz'){
      document.getElementById('icon-la-calc').classList.remove('icon-active');
      document.getElementById('icon-la-quiz').classList.add('icon-active');
     document.getElementById('icon-la-Assessment').classList.remove('icon-active');
      document.getElementById('icon-la-poll').classList.remove('icon-active');
      document.getElementById('icon-la-eCom').classList.remove('icon-active');
      document.getElementById('icon-la-Chatbot').classList.remove('icon-active');
      document.getElementById('icon-la-Giveaway').classList.remove('icon-active');
      document.getElementById('icon-la-Survey').classList.remove('icon-active');
      

      document.getElementById("get-calci-name").innerText="Quiz";
      displayNone("result1");
      displayBlock("result-quiz");
      displayNone("result-Assessment");
      displayNone("result3");
      displayNone("result-eCom");
      displayNone("result-Chatbot");
      displayNone("result-Giveaway");
      displayNone("result-Survey");
      return type;
    }
    else if(type == 'Assessment'){
      document.getElementById('icon-la-calc').classList.remove('icon-active');
      document.getElementById('icon-la-quiz').classList.remove('icon-active');
     document.getElementById('icon-la-Assessment').classList.add('icon-active');
      document.getElementById('icon-la-poll').classList.remove('icon-active');
      document.getElementById('icon-la-eCom').classList.remove('icon-active');
      document.getElementById('icon-la-Chatbot').classList.remove('icon-active');
      document.getElementById('icon-la-Giveaway').classList.remove('icon-active');
      document.getElementById('icon-la-Survey').classList.remove('icon-active');
      

      document.getElementById("get-calci-name").innerText="Assessment";
      displayNone("result1");
      displayNone("result-quiz");
      displayBlock("result-Assessment");
      displayNone("result3");
      displayNone("result-eCom");
      displayNone("result-Chatbot");
      displayNone("result-Giveaway");
      displayNone("result-Survey");
      return type;
    }
    else if(type == 'Poll'){
      document.getElementById('icon-la-calc').classList.remove('icon-active');
      document.getElementById('icon-la-quiz').classList.remove('icon-active');
      document.getElementById('icon-la-Assessment').classList.remove('icon-active');
      document.getElementById('icon-la-poll').classList.add('icon-active');
      document.getElementById('icon-la-eCom').classList.remove('icon-active');
      document.getElementById('icon-la-Chatbot').classList.remove('icon-active');
      document.getElementById('icon-la-Giveaway').classList.remove('icon-active');
      document.getElementById('icon-la-Survey').classList.remove('icon-active');
      
      document.getElementById("get-calci-name").innerText="Poll";
      displayNone("result1");
      displayNone("result-quiz");
      displayNone("result-Assessment");
      displayBlock("result3");
      displayNone("result-eCom");
      displayNone("result-Chatbot");
      displayNone("result-Giveaway");
      displayNone("result-Survey");
      return type;
    }
    else if(type == 'eCom'){
      document.getElementById('icon-la-calc').classList.remove('icon-active');
      document.getElementById('icon-la-quiz').classList.remove('icon-active');
     document.getElementById('icon-la-Assessment').classList.remove('icon-active');
      document.getElementById('icon-la-poll').classList.remove('icon-active');
      document.getElementById('icon-la-eCom').classList.add('icon-active');
      document.getElementById('icon-la-Chatbot').classList.remove('icon-active');
      document.getElementById('icon-la-Giveaway').classList.remove('icon-active');
      document.getElementById('icon-la-Survey').classList.remove('icon-active');
      

      document.getElementById("get-calci-name").innerText="eCommerce Recommendation";
      displayNone("result1");
      displayNone("result-quiz");
      displayNone("result-Assessment");
      displayNone("result3");
      displayBlock("result-eCom");
      displayNone("result-Chatbot");
      displayNone("result-Giveaway");
      displayNone("result-Survey");
      return type;
    }
    else if(type == 'Chatbot'){
      document.getElementById('icon-la-calc').classList.remove('icon-active');
      document.getElementById('icon-la-quiz').classList.remove('icon-active');
     document.getElementById('icon-la-Assessment').classList.remove('icon-active');
      document.getElementById('icon-la-poll').classList.remove('icon-active');
      document.getElementById('icon-la-eCom').classList.remove('icon-active');
      document.getElementById('icon-la-Chatbot').classList.add('icon-active');
      document.getElementById('icon-la-Giveaway').classList.remove('icon-active');
      document.getElementById('icon-la-Survey').classList.remove('icon-active');
      

      document.getElementById("get-calci-name").innerText="Chatbot";
      displayNone("result1");
      displayNone("result-quiz");
      displayNone("result-Assessment");
      displayNone("result3");
      displayNone("result-eCom");
      displayBlock("result-Chatbot");
      displayNone("result-Giveaway");
      displayNone("result-Survey");
      return type;
    }
    else if(type == 'Giveaway'){
      document.getElementById('icon-la-calc').classList.remove('icon-active');
      document.getElementById('icon-la-quiz').classList.remove('icon-active');
     document.getElementById('icon-la-Assessment').classList.remove('icon-active');
      document.getElementById('icon-la-poll').classList.remove('icon-active');
      document.getElementById('icon-la-eCom').classList.remove('icon-active');
      document.getElementById('icon-la-Chatbot').classList.remove('icon-active');
      document.getElementById('icon-la-Giveaway').classList.add('icon-active');
      document.getElementById('icon-la-Survey').classList.remove('icon-active');
      

      document.getElementById("get-calci-name").innerText="Giveaway";
      displayNone("result1");
      displayNone("result-quiz");
      displayNone("result-Assessment");
      displayNone("result3");
      displayNone("result-eCom");
      displayNone("result-Chatbot");
      displayBlock("result-Giveaway");
      displayNone("result-Survey");
      return type;
    }
    else if(type == 'Survey'){
      document.getElementById('icon-la-calc').classList.remove('icon-active');
      document.getElementById('icon-la-quiz').classList.remove('icon-active');
     document.getElementById('icon-la-Assessment').classList.remove('icon-active');
      document.getElementById('icon-la-poll').classList.remove('icon-active');
      document.getElementById('icon-la-eCom').classList.remove('icon-active');
      document.getElementById('icon-la-Chatbot').classList.remove('icon-active');
      document.getElementById('icon-la-Giveaway').classList.remove('icon-active');
      document.getElementById('icon-la-Survey').classList.add('icon-active');
      

      document.getElementById("get-calci-name").innerText="Form / Survey";
      displayNone("result1");
      displayNone("result-quiz");
      displayNone("result-Assessment");
      displayNone("result3");
      displayNone("result-eCom");
      displayNone("result-Chatbot");
      displayNone("result-Giveaway");
      displayBlock("result-Survey");
      return type;
    }
    
  }
  
  function displayGo(){
    document.getElementById('final-outgrow').style.display="none";
  }
  
  function addSection(){
    document.getElementById('main-section').style.display="block";
  }
  


// upper section

function showOption(){
  var count = document.getElementById("api-list");
  if(count == null){
    displayNone("main-section-option");
  }else{
    var x=document.getElementById('main-section-option');
    if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
  }

}

function getAPIheading(){
  api=document.getElementById('setAPI').value;
  document.getElementById('setAPI').innerText=api;
}

function callAPI(api){
  var countp=0,countc=0,countq=0,counta=0,counts=0,counte=0,countchat=0,countg=0;
  $.ajax({
     url:'https://api-calc.outgrow.co/api/v1/calculator?status=Live&type=All&sort=alpha_as',
    headers: {'API-KEY': api},
      type: 'get',
    data: {ajax: 1},
    success: function(response){
	
    var refinedResponse=JSON.stringify(response);
    if(response.success==true){

      // set-cookies
      apiSet.push(api);
      document.body.backgroundColor="";
      document.body.style.backgroundColor="#f1f1f1";
      displayNone("loader-div-class");
      removeHide("section-round");
      removeHide("get-calci-name");
       response.data.forEach(element => {
        displayBlock("section-1");
        if(element.type=="Calculator"){
          var url0=element.calc_url.split("{");
          // final_url=url0[0]+element.parentapp+"?sLead=1";
          document.getElementById("result1").insertAdjacentHTML('beforeend', 
          // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
          `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
          <div class="calci-card-body">
           <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
           <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
           </div>
          </div></div>`);
          countc++;
        }
        if(element.type=="Quiz"){
          document.getElementById("result-quiz").insertAdjacentHTML('beforeend', 
          // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
          `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
          <div class="calci-card-body">
           <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
           <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
           </div>
          </div></div>`);
          countq++;
        }
         if(element.type=="Assessment"){
          document.getElementById("result-Assessment").insertAdjacentHTML('beforeend', 
          // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
          `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
          <div class="calci-card-body">
           <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
           <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
           </div>
          </div></div>`);
          counta++;
        }
        if(element.type=="Poll"){
          countp++;
          // if(Object.values('Poll').length != 0){
            // if(countp > 0){
            document.getElementById("result3").insertAdjacentHTML('beforeend', 
            // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
             `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
              <div class="calci-card-body">
             <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
             <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
             </div>
            </div></div>`);
          // }
        //   else{
        //     document.getElementById('result3').insertAdjacentHTML('beforeend','<div id="no-found">NO POLLs</div>');
        //   }
        }
         if(element.type=="eCom"){
          document.getElementById("result-eCom").insertAdjacentHTML('beforeend', 
          // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
          `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
          <div class="calci-card-body">
           <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
           <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
           </div>
          </div></div>`);
          counte++;
        }
         if(element.type=="Chatbot"){
          document.getElementById("result-Chatbot").insertAdjacentHTML('beforeend', 
          // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
          `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
          <div class="calci-card-body">
           <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
           <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
           </div>
          </div></div>`);
          countchat++;
        }
         if(element.type=="Giveaway"){
          document.getElementById("result-Giveaway").insertAdjacentHTML('beforeend', 
          // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
          `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
          <div class="calci-card-body">
           <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
           <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
           </div>
          </div></div>`);
          countg++;
        }
         if(element.type=="Survey"){
          document.getElementById("result-Survey").insertAdjacentHTML('beforeend', 
          // `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.id}','${element.calc_url}','${element.short_url}')">
          `<div class="calci-card-row" id="calci-card-row-id"><div class="calci-card-col" onclick="viewDetails('${element.parentapp}','${element.calc_url}','${element.short_url}')">
          <div class="calci-card-body">
           <img class="img-card" id="img-card" src="${element.meta_data.image_url}" width="50%" height="15%">
           <div class="calci-card-content" id="div-content">${element.meta_data.title}</div>
           </div>
          </div></div>`);
          counts++;
        }
       
      
       });
      if(countc==0){
        document.getElementById('result1').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No Calculator Found</div>');
      }
      if(countq==0){
        document.getElementById('result-quiz').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No Quiz Found</div>');
      } 
      if(countp==0){
        document.getElementById('result3').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No Poll Found</div>');
      }
       if(counts==0){
        document.getElementById('result-Survey').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No Survey Found</div>');
      }
       if(counta==0){
        document.getElementById('result-Assessment').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No Assesment Found</div>');
      }
       if(counte==0){
        document.getElementById('result-eCom').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No eCommerce Recommendation Found</div>');
      }
       if(countg==0){
        document.getElementById('result-Giveaway').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No Giveaway Found</div>');
      }
       if(countchat==0){
        document.getElementById('result-Chatbot').insertAdjacentHTML('beforeend','<div id="no-found" class="no-calc">No Chatbot Found</div>');
      }
    }
    },

    error: function(err){
      if(err.responseJSON.code==401){
      }
    }
   });
}

function selectKey(k){
  if(document.getElementById('api-warning')){
    displayNone("api-warning");
  }
  displayNone("main-section-option");
  displayBlock("loader-div-class");
  document.body.style.backgroundColor="white";
  addHide("section-round");
  addHide("get-calci-name");
  result("Calculator");
  document.getElementById("result1").innerHTML="";
  document.getElementById("result-quiz").innerHTML="";
  document.getElementById("result3").innerHTML="";
  document.getElementById("header_script").value=k;
   callAPI(k);
}

function toggleSwitch(){
  document.getElementById('facebook-span').classList.toggle('toggle-on');
  $(document).ready(function(){
    if ( $('#facebook-span').hasClass('toggle-on') ) {
      document.getElementById('facebook-div').style.backgroundColor="#fb5f66";
      document.getElementById('text-inside-tone').innerText='[outgrow type="mobile_full_screen_facebook" id="'+id_used+ '" data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
      // document.getElementById('text-inside-1').innerText='[outgrow type="mobile_full_screen_facebook" id="'+id_used+ '" data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
    
    }else{
      document.getElementById('facebook-div').style.backgroundColor="#a8a8a8";
      document.getElementById('text-inside-tone').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '" data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
      // document.getElementById('text-inside-1').innerText='[outgrow type="mobile_full_screen" id="'+id_used+ '" data_url="'+url+'" short_url="'+short_url_used+'"][/outgrow]';
    
    }
  });  
}

function toggleSwitch2(){
  document.getElementById('time-span').classList.toggle('toggle-on');
  $(document).ready(function(){
    if ( $('#time-span').hasClass('toggle-on') ) {
      document.getElementById('time-div').style.backgroundColor="#fb5f66";
      document.getElementById('text-inside-tthree').innerText='[outgrow type="pop_up_custom" id="'+id_used+ '"  data_url="'+url3+'" ][/outgrow]';
      // document.getElementById('text-inside-1').innerText='[outgrow type="pop_up_custom" id="'+id_used+ '"  data_url="'+url3+'" ][/outgrow]';
    
    }else{
      document.getElementById('time-div').style.backgroundColor="#a8a8a8";
      document.getElementById('text-inside-tthree').innerText='[outgrow type="pop_up" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]'; 
      // document.getElementById('text-inside-1').innerText='[outgrow type="pop_up" id="'+id_used+ '" data_url="'+url3+'" ][/outgrow]';   

    }
  });  
timeOption = document.getElementById('time-option');
timeOption.innerHTML="<div id='input-time'><label><input type='radio' name='selectOptionName' onclick='timed()' value='timed'>Timed (Control exactly when your popup appears.)</label></div>"+ 
  "<div id='timed-div' style='display:none'><div id='set-time-div'><div id='set-time'>Show exactly after</div><div id='set-after'><input type='text' id='timeAfter' onkeypress='return updatePopTime(event)' placeholder='5'><select id='select-time-after' onchange='getOptionPop()'><option value='0'>Secs</option><option value='1'>Mins</option></select></div></div>"+
  "<div id='set-time-div'><div id='set-time'>Repeat After</div><div id='set-after'><input type='text' class='dayAfter' id='get-day' onkeypress='return updatePopDay(event)' placeholder='10'><input type='text' id='day-value'  placeholder='Days' disabled></div></div></div></div></div>"+
  
  "<div id='exit-intent'><div id='exit-intent-text'><label><input type='radio' onclick='exitIntend()' name='selectOptionName' value='exit'>Exit Intend</label></div>"+
  "<div id='exit-input-value' style='display:none'><label id='exit-option-text'>Show before a user leaves your page</label>"+
  "<div id='exit-input-cover'><div id='exit-repeat-day'>Repeat After</div><div id='input-exit'><input type='text' class='exit-day-input' id='get-day2'  onkeypress='return updatePopDay2(event)' placeholder='10'><input type='text' id='exit-day' placeholder='Days' disabled></div></div></div>"+
  "</div>";
}

function customOutput(){
  curl=custom_url.split("?");
  document.getElementById('text-inside-tfive').innerText='[outgrow type="custom_type" " data_url="'+curl[0]+'" "dh"="'+customHeightD+'" dhd="'+customHeightDDim+'" "dw"="'+customWidthD+'" dwd="'+customWidthDDim+'" "th"="'+customHeightT+'" thd="'+customHeightTDim+'" "tw"="'+customWidthT+'" twd="'+customWidthTDim+'" "mh"="'+customHeightM+'" mhd="'+customHeightMDim+'" "mw"="'+customWidthM+'" mwd="'+customWidthMDim+'"][/outgrow]';
  // document.getElementById('text-inside-1').innerText='[outgrow type="custom_type" " data_url="'+curl[0]+'" "dh"="'+customHeightD+'" dhd="'+customHeightDDim+'" "dw"="'+customWidthD+'" dwd="'+customWidthDDim+'" "th"="'+customHeightT+'" thd="'+customHeightTDim+'" "tw"="'+customWidthT+'" twd="'+customWidthTDim+'" "mh"="'+customHeightM+'" mhd="'+customHeightMDim+'" "mw"="'+customWidthM+'" mwd="'+customWidthMDim+'"][/outgrow]';

  
}

function timed(){
  displayBlock("timed-div");
  displayNone("exit-input-value");
}
function exitIntend(){
  displayNone("timed-div");
  displayBlock("exit-input-value");
}

function updatePopTime(e){
  var countp=0;
  if(e.which >=48 && e.which <=57){
    window.onclick=function(){
      if(countp==0){
        var popTime=document.getElementById("timeAfter").value;
       showExact=popTime;
        customPop();

        countp++;
      }
      return true;
    }
  }else{ 
    return false;
  }
}

function updatePopDay(e){
  var countd=0;
  if(e.which >=48 && e.which <=57){
    window.onclick=function(){
      if(countd==0){
        var popDay=document.getElementById("get-day").value;
        repeatTime=popDay;
        customPop();

        countd++;
      }
      return true;
    }
  }else{ 
    return false;
  }
}

function getOptionPop(){
  showExactD=document.getElementById('select-time-after').value;
  customPop();
}

function updatePopDay2(e){
  var countd=0;
  if(e.which >=48 && e.which <=57){
    window.onclick=function(){
      if(countd==0){
        var popDay=document.getElementById("get-day2").value;
        repeatTime=popDay;
        customPop();

        countd++;
      }
      return true;
    }
  }else{ 
    return false;
  }
}

function customPop(){
  document.getElementById('text-inside-tthree').innerText='[outgrow type="pop_up_custom" id="'+id_used+ '" data_url="'+url3+'" "showExact"="'+showExact+'" "showExactD"="'+showExactD+'" "repeatTime"="'+repeatTime+'" ][/outgrow]';
  // document.getElementById('text-inside-1').innerText='[outgrow type="pop_up_custom" id="'+id_used+ '" data_url="'+url3+'" "showExact"="'+showExact+'" "showExactD"="'+showExactD+'" "repeatTime"="'+repeatTime+'" ][/outgrow]';

}

function removeActiveClass(classname){
  // document.getElementById(classname).classList.remove('active-span');
}
function addActiveClass(classname){
  // document.getElementById(classname).classList.add('active-span');
}

function addHide(classname){
  document.getElementById(classname).classList.add('hide');
}
function removeHide(classname){
  document.getElementById(classname).classList.remove('hide');
}
function displayNone(id){
  document.getElementById(id).style.display="none";
}
function displayBlock(id){
  document.getElementById(id).style.display="block";
}

jQuery(document).ready(function(){
  jQuery('.modal-button').click(function(){
    jQuery('.modal-button').removeClass("active-span");
    jQuery(this).addClass("active-span");
});
});

jQuery(document).ready(function(){
  jQuery('.modal-button').click(function(){
    jQuery('.modal-button').removeClass("active-span");
    jQuery(this).addClass("active-span");
});
});

function mobileCat(classid){
//   console.log("====",classid)
//   // document.getElementById(classid).classList.add('hide');
 
  switch(classid){
    case "getcode-container1":
    document.getElementById("getcode-container1").classList.remove('hide');
    document.getElementById("getcode-container2").classList.add('hide');
    document.getElementById("super-extra-option3").classList.add('hide');
    document.getElementById("super-extra-option4").classList.add('hide');
    document.getElementById("super-extra-option5").classList.add('hide');
    break;

    case "getcode-container2":
    document.getElementById("getcode-container1").classList.add('hide');
    document.getElementById("getcode-container2").classList.remove('hide');
    document.getElementById("super-extra-option3").classList.add('hide');
    document.getElementById("super-extra-option4").classList.add('hide');
    document.getElementById("super-extra-option5").classList.add('hide'); 
    break;

    case "super-extra-option3":
    document.getElementById("getcode-container1").classList.add('hide');
    document.getElementById("getcode-container2").classList.add('hide');
    document.getElementById("super-extra-option3").classList.remove('hide');
    document.getElementById("super-extra-option4").classList.add('hide');
    document.getElementById("super-extra-option5").classList.add('hide');
    break;

    case "super-extra-option4":
    document.getElementById("getcode-container1").classList.add('hide');
    document.getElementById("getcode-container2").classList.add('hide');
    document.getElementById("super-extra-option3").classList.add('hide');
    document.getElementById("super-extra-option4").classList.remove('hide');
    document.getElementById("super-extra-option5").classList.add('hide'); 
    break;

    case "super-extra-option5":
    document.getElementById("getcode-container1").classList.add('hide');
    document.getElementById("getcode-container2").classList.add('hide');
    document.getElementById("super-extra-option3").classList.add('hide');
    document.getElementById("super-extra-option4").classList.add('hide');
    document.getElementById("super-extra-option5").classList.remove('hide');
    break;
  }
}

// jQuery(document).ready(function(){
//   console.log("------------------");
//   jQuery('.mobileview').click(function(){
//     jQuery('.mobileview').addClass("hide");
//     jQuery(this).removeClass("hide");
// });
// });

// outgrow-block-editor.js
// import { AlignmentToolbar } from '@wordpress/block-editor';

// import { InspectorControls } from '@wordpress/block-editor';
// import { PanelBody, SelectControl, ColorPicker } from '@wordpress/components';
// Import dependencies from WordPress
const { registerBlockType } = wp.blocks;
const { Button, RadioControl, ColorPalette, Icon } = wp.components;
const { useState, useEffect, createElement } = wp.element;
const { InspectorControls } = wp.blockEditor;

const { Toolbar, BlockControls, AlignmentToolbar } = wp.components;

// const leftIcon = createElement(Dashicon, { icon: 'arrow-left' });
// const rightIcon = createElement(Dashicon, { icon: 'arrow-right' });

// Define the block
function loadDynamicScript() {
  var og_temp = document.createElement("script");
  og_temp.async = true;
  og_temp.defer = true;
  og_temp.src = "//dyv6f9ner1ir9.cloudfront.net/assets/js/nploaderV2.js";
  og_temp.onload = function () {
    initIframe("65b0bb164f3dfb08e74da346");
  };
  document.querySelector("head").appendChild(og_temp);
}
function appendScript() {
  console.log("append script");
  var script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = "https://dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js";
  script.onload = function () {
    initIframe("65b0bb164f3dfb08e74da346");
  };
  document.querySelector("head").appendChild(script);
}
const scriptAttributes = {
  async: true,
  defer: true,
  src: "//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js",
  onload: function () {
    initIframe("65b0bb164f3dfb08e74da346");
  },
};
function closeGreetBar() {
  wp.element.createElement(
    "div",
    { id: "sidenote", className: "fadeOut" },
    null
  );
}
function openGreetPopup() {
  console.log("open");
  // Check if the element with id "greet_popup" exists
  const greetPopup = document.getElementById("greet_popup");
  if (greetPopup) {
    greetPopup.style.display = "flex";
  }
}

function closeGreetPopup() {
  console.log("close");

  wp.element.createElement(
    "div",
    { id: "greet_popup", style: { display: "none" } },
    null
  );
}
registerBlockType("new-outgrow/outgrow-block", {
  title: "Outgrow",
  icon: wp.element.createElement("img", {
    src: "https://d1httwb3aso1fd.cloudfront.net/logoAnim.gif",
    style: { width: "24px" }
  },
 
  ),
  category: "embed",
  attributes: {
    isDivVisible: {
      type: "boolean",
      default: false,
    },
    apiKey: {
      type: "string",
      default: "",
    },
    textSize: {
      type: "string",
      default: "",
    },
    textColor: {
      type: "string",
      default: "",
    },
    buttonColor: {
      type: "string",
      default: "",
    },
    bgColor: {
      type: "string",
      default: "",
    },
    alignment: {
      type: "string",
      default: "",
    },
    snippetToShow: {
      type: "string",
      default: "",
    },
    primaryText: {
      type: "string",
      default: "",
    },
    secondaryText: {
      type: "string",
      default: "",
    },
    height: {
      type: "string",
      default: "",
    },
    width: {
      type: "string",
      default: "",
    },
    align: {
      type: 'string',
      default: 'left', // Default alignment
  },
  },

  edit: function (props) {
    const { className, attributes, setAttributes } = props;
    // Define a state variable to store the API key
    const scriptElement = createElement("script", scriptAttributes);
    const [inputValue, setInputValue] = useState(attributes.apiKey || "");
    const [align, setalign] = useState(attributes.align || "");
    const [snippetElement, setsnippetElement] = useState(attributes.snippetToShow || "");
    const [textSize, settextSize] = useState(attributes.textSize || "");
    const [textColor, settextColor] = useState(attributes.textColor || "");
    const [primaryText, setprimaryText] = useState(attributes.primaryText || "");
    const [secondaryText, setsecondaryText] = useState(attributes.secondaryText || "");
    const [alignment, setalignment] = useState(attributes.alignment || "");
    const [bgColor, setbgColor] = useState(attributes.bgColor);
    const [buttonColor, setbuttonColor] = useState(attributes.buttonColor);
    const [height, setheight] = useState(attributes.height);
    const [width, setwidth] = useState(attributes.width);
    const editing = true;
    // const [textColor, settextColor] = useState(attributes.textColor);
    const colors = [
      { name: "red", color: "#f00" },
      { name: "white", color: "#fff" },
      { name: "blue", color: "#00f" },
    ];
   
    const [selectedIcon, setSelectedIcon] = useState(attributes.selectedIcon || 'admin-post');

  const iconOptions = [
    { icon: 'https://dlvkyia8i4zmz.cloudfront.net/o1PZBSLiQuq5HTCCyrMt_bottom_left.png', value: 'left' },
    { icon: 'https://dlvkyia8i4zmz.cloudfront.net/5uGcgvoRIie2dwQNk9kv_bottom_right.png', value: 'right' },
  ];

  const onChangeIcon = (newIcon) => {
    setSelectedIcon(newIcon);
    props.setAttributes({ selectedIcon: newIcon });
  };

  const iconRadioButtons = iconOptions.map((option) =>
  createElement('label', { key: option.value, style: { marginRight: '10px' , marginTop: '10px'  } },
  createElement('input', {
    type: 'radio',
    value: option.value,
    checked: align === option.value,
    onChange: () => handlealignChange(option.value),
    style: { marginRight: '5px', marginBottom: '30px' }
      }),
      createElement('img', { src: option.icon , style: {height : '70px' }}, )
    )
  );


    const iframe = document.createElement("iframe");
    iframe.id = "og_iframe_65b0bb164f3dfb08e74da346";
    iframe.style.border = "none";
    iframe.style.minHeight = "348.75px";
    iframe.style.overflow = "hidden";
    iframe.style.height = "349px";
    iframe.allow = "camera *";
    iframe.src = inputValue;
    iframe.title = "Himanshus #3708 Outcome Quiz";
    iframe.width = "100%";
    iframe.scrolling = "no";

    const opInteractiveDiv = createElement("div", {
      className: "op-interactive",
      // id: '65b0bb164f3dfb08e74da346',
      // 'data-title': 'Himanshus #3708 Outcome Quiz',
      "data-url": attributes.apiKey,
      "data-surl": "undefined",
      "data-width": "100%",
    });

    const ogScript = createElement("script", {
      async: true,
      defer: true,
      src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js",
      onload: () => {
        const iframe = createElement("iframe", {
          // title: "Himanshus #3685 Calculator",
          src: attributes.apiKey,
          allow: "camera *;",
          width: "100%",
          height: "100%",
        });

        document.querySelector("body").appendChild(iframe);

        // initIframe('65b0bb164f3dfb08e74da346');
      },
    });


    function checkingEmbedType(alignment) {
      if (attributes.apiKey && alignment === "Full_Page") {
        console.log("hello");
        const script = createElement("script", {
          async: true,
          defer: true,
          src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js",
        });
        script.onload = function() {
          initIframe("65b0bb164f3dfb08e74da346");
        };
        setsnippetElement(createElement(
          "div",
          {
            style: { height: "800px", width: "100%", maxWidth: "unset"},
            className: "outer-full-page",
          },createElement("iframe", {
          // title: "Himanshus #3685 Calculator",
          src: attributes.apiKey,
          allow: "camera *;",
          width: "100%",
          height: "100%",
        }),
          script
        ));
      } else if (attributes.apiKey && alignment === "Full_Page_Override") {
        setsnippetElement(createElement(
          "div",
          { className: className }
        ));
      }
      else if (attributes.apiKey && alignment === "In_Page") {
        const script = createElement("script", {
          async: true,
          defer: true,
          src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js",
        });
        script.onload = function() {
          initIframe("65b0bb164f3dfb08e74da346");
        };
        setsnippetElement(createElement(
          "div",
          {
            style: {  height: "800px", width: "100%", maxWidth: "unset" },
            className: "outer-in-page",
          },createElement("iframe", {
          // title: "Himanshus #3685 Calculator",
          src: attributes.apiKey,
          allow: "camera *;",
          width: "100%",
          height: "100%",
        }),
          script
        ));
      } else if (attributes.apiKey && alignment === "Popup") {
        setsnippetElement(createElement(
          "div",
          null,
          createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_sidenote.css",
          }),
          createElement("link", {
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
            rel: "stylesheet",
          }),
          createElement(
            "div",
            null,
            createElement("div", {
              id: "65b0bb164f3dfb08e74da346",
              "data-autoClose": "false",
              "data-closeTimer": "5000",
              "data-openOnScroll": "false",
              "data-scrollValue": "500",
              "data-title": "Himanshus #3708 Outcome Quiz",
              "data-embedCookieDays": "10",
              "data-embedScheduling": "false",
              "data-embedTimed": "true",
              "data-embedExit": "false",
              "data-embedTimeFormat": "0",
              "data-embedTimeValue": "5",
              "data-isLDrawer": "true",
              "data-embedBorderRadius": "0",
              "data-embedFontSize": "12",
              "data-textcolor": "#fb5f66",
              "data-bgcolor": "#fb5f66",
              "data-prop": "outgrow-d",
              "data-type": "outgrow-l",
              "data-url": inputValue,
              "data-text": "Get Started",
              style: { color: textColor , cursor: 'pointer', fontSize: textSize?textSize:'14px', background: bgColor?bgColor:'white'},
              onclick: "openGreetPopup()",
            },
            primaryText?primaryText: "Get Started"
            )
          ),

          createElement(
            "section",
            {
              className: "greet_popup",
              id: "greet_popup",
              style: { display: "none" },
            },
            createElement("iframe", {
              title: "Himanshus #3708 Outcome Quiz",
              src: inputValue,
              allow: "camera *",
            }),
            createElement("a", {
              href: "javascript:void(0);",
              className: "close-popup",
              onclick: "closeGreetPopup()",
            
            })
          ),
          createElement("script", {
            src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_sidenote.js",
          })
      
        ));
      } else if (attributes.apiKey && alignment == "Chat") {
        setsnippetElement(createElement(
          "div",
          { className: className },
          createElement("link", {
            href: "https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/chatV2.css",
            rel: "stylesheet",
          }),
          createElement("link", {
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
            rel: "stylesheet",
          }),
          createElement(
            "a",
            {
              href: "javascript:void(0);",
              style: { backgroundColor: bgColor },
              className: "bot-circle " + (align ? align : " right"),
              id: "bot-circle",
              onclick: "ogAnimationInit()",
            },
            createElement(
              "div",
              { className: "bot-circle-icon-open" },
              createElement(
                "i",
                {
                  style: { color: textColor },
                  className: "material-icons",
                },
                "chat"
              )
            ),
            createElement(
              "div",
              { className: "bot-circle-icon-close" },
              createElement(
                "i",
                {
                  style: { color: textColor },
                  className: "material-icons",
                },
                "expand_more"
              )
            ),
            createElement(
              "div",
              { className: "og-chat-tooltip",  style: { backgroundColor: bgColor }, },
              createElement("p",  {  style: { color: textColor }, }, null, primaryText?primaryText:"What's your future like?"),
              createElement(
                "span",
                {
                  className: "og-chat-cross",
                  onclick: "ogAnimationTextremoveInit(event)",
                },
                createElement("i", { className: "material-icons" }, "clear")
              )
            )
          ),
          createElement(
            "div",
            { className: "og-chat-box-outer" },
            createElement(
              "div",
              {
                className: "og-chat-box no-animation",
                id: "og-chat-box",
                style: { backgroundColor: bgColor },
              },
              createElement(
                "a",
                {
                  href: "javascript:void(0);",
                  className: "bot-circle-mobile",
                  id: "bot-circle-mobile",
                  onclick: "ogAnimationClose()",
                },
                createElement(
                  "div",
                  { className: "bot-circle-icon-close" },
                  createElement(
                    "i",
                    {
                      style: { color: "#ffffff" },
                      className: "material-icons",
                    },
                    "close"
                  )
                )
              ),
              createElement("iframe", {
                // title: "Himanshus #3685 Calculator",
                src: attributes.apiKey,
                allow: "camera *;",
                width: "100%",
                height: "100%",
              })
            )
          ),
          createElement("script", {
            src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/chatV2.js",
          })
        ));
      } else if (attributes.apiKey && alignment === "Greet_Bar") {
        setsnippetElement(createElement(
          "div",
          { className: "my-component" },
          createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_greet_bar.css",
          }),
          createElement(
            "section",
            {
              style: { background: bgColor , top: editing ? '60px' : '' },
              className: "barEmbed",
              id: "barEmbed",
              onclick: "openGreetPopup()",
            },
            createElement(
              "p",
              { style: { color: textColor, fontSize: "15px" } },
              primaryText?primaryText:"Enter Greet Bar Title Here"
            ),
            createElement(
              "a",
              {
                style: {
                  borderRadius: "20px",
                  color: textColor,
                  fontSize: "12px",
                  background: buttonColor?buttonColor:"#FFFFFF",
                },
                href: inputValue,
                target: "_blank",
                className: "greet-popup-open",
              },
             secondaryText?secondaryText: "Button Text"
            ),
          ),
          createElement("script", {
            src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_greet_bar.js",
          })
        ));
      } else if (attributes.apiKey && alignment === "Floating_Rectangle") {
        setsnippetElement(createElement(
          "div",
          { className: className },
          createElement("link", {
            href: "https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/float.css",
            rel: "stylesheet",
          }),
          createElement("link", {
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
            rel: "stylesheet",
          }),
          createElement(
            "div",
            {
              className: "bot-circle center",
              id: "bot-circle",
              onclick: "ogAnimationInit()",
            },
            [
              wp.element.createElement(
                "div",
                {
                  className: "og-chat-tooltip",
                  style: {
                    background: bgColor,
                  },
                },
                [
                  wp.element.createElement(
                    "p",
                    {
                      style: {
                        color: textColor,
                        fontSize: "16px",
                      },
                    },
                    primaryText?primaryText: "Heading of this floating rectangle"
                  ),
                  wp.element.createElement(
                    "div",
                    {
                      className: "helptext",
                      style: {
                        color: textColor,
                        fontSize: "12px",
                      },
                    },
                    secondaryText?secondaryText: "Help text"
                  ),
                ]
              ),
            ]
          ),
          createElement(
            "div",
            {
              className: "og-chat-box-outer",
            },
            [
              wp.element.createElement(
                "div",
                {
                  className: "og-chat-box no-animation",
                  id: "og-chat-box",
                  style: {
                    background: bgColor,
                  },
                },
                [
                  wp.element.createElement(
                    "div",
                    {
                      className: "floating-embedOpen-topbar",
                      style: {
                        background: bgColor,
                      },
                    },
                    [
                      wp.element.createElement(
                        "p",
                        {
                          style: {
                            color: textColor,
                          },
                        },
                        primaryText?primaryText: "Heading of this floating rectangle"
                      ),
                      wp.element.createElement(
                        "a",
                        {
                          href: "javascript:void(0);",
                          onclick: "ogAnimationInit()",
                          className: "bot-circle-icon-close",
                        },
                        [
                          wp.element.createElement(
                            "i",
                            {
                              className: "material-icons",
                              style: {
                                color: textColor,
                              },
                            },
                            "close"
                          ),
                        ]
                      ),
                    ]
                  ),
                  wp.element.createElement("iframe", {
                    title: "Himanshus #3708 Outcome Quiz",
                    src: inputValue,
                    allow: "camera *;",
                    width: "100%",
                    height: "100%",
                  }),
                ]
              ),
            ]
          ),
          createElement("script", {
            src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/float.js",
          })
        ));
      } else if (attributes.apiKey && alignment === "Sidenote") {
        setsnippetElement(createElement(
          "div",
          { className: className },
          createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://dyv6f9ner1ir9.cloudfront.net/assets/css/shared/og_sidenote.css",
          }),
          createElement("link", {
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
            rel: "stylesheet",
          }),
          createElement(
            "section",
            {
              style: { background: bgColor },
              className: "barEmbed sidenote "  + (align ? align : " right"),
              id: "barEmbed",
              onclick: "openGreetPopup()",
            },
            createElement(
              "p",
              { style: { color: textColor, fontSize: "14px" } },
              primaryText?primaryText: "Feedback"
            ),
            createElement(
              "i",
              {
                className: "material-icons",
                style: { color: textColor, fontSize: "20px" },
              },
              "insert_comment"
            )
          ),

          createElement(
            "section",
            {
              className: "greet_popup",
              id: "greet_popup",
              style: { display: "none" },
            },
            createElement("iframe", {
              title: "Himanshus #3708 Outcome Quiz",
              src: inputValue,
              allow: "camera *",
            }),
            createElement("a", {
              href: "javascript:void(0);",
              className: "close-popup",
              onclick: "closeGreetPopup()",
            
            })
          ),
          createElement("script", {
            src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/og_sidenote.js",
          })
        ));
      } else if (attributes.apiKey && alignment === "Custom_Embed")  {
        console.log("hello");
        const script = createElement("script", {
          async: true,
          defer: true,
          src: "https://dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js",
        });
        script.onload = function() {
          initIframe("65b0bb164f3dfb08e74da346");
        };
        setsnippetElement(createElement(
          "div",
          {
            style: { height: height?height:"800px", width: width?width:"100%", maxWidth: "unset"},
            className: "outer-full-page",
          },createElement("iframe", {
          // title: "Himanshus #3685 Calculator",
          src: attributes.apiKey,
          allow: "camera *;",
          width: "100%",
          height: "100%",
        }),
          script
        ));
      }
    }

useEffect(()=>{
  console.log(textSize,textColor,bgColor,"size");
  handletxtSizeChange(textSize);
},[textSize]) 
useEffect(()=>{
  console.log(buttonColor,"button");
  handlebuttonColorChange(buttonColor);
},[buttonColor]) 
useEffect(()=>{
  console.log(primaryText,"text");
  handleprimaryTextChange(primaryText);
},[primaryText]) 
useEffect(()=>{
  console.log(height,"text");
  handleheightChange(height);
},[height]) 
useEffect(()=>{
  console.log(alignment,"text");
},[alignment]) 

useEffect(()=>{
  console.log(width,"text");
  handlewidthChange(width);
},[width]) 

useEffect(()=>{
  console.log(align,"text");
  handlealignChange(align);
},[align]) 
useEffect(()=>{
  console.log(secondaryText,"text");
  handlesecondaryTextChange(secondaryText);
},[secondaryText]) 
    useEffect(() => {
      // console.log("snippetToShow:", attributes.snippetToShow);
      console.log("snippetElement------------->", snippetElement);
      setAttributes({snippetToShow:snippetElement});
    }, [snippetElement]);

    useEffect(() => {
      // console.log("snippetToShow:", attributes.snippetToShow);
      console.log("Attributes------------->", attributes.snippetToShow);
    }, [snippetElement,attributes]);


    // Function to handle API key changes
    const handleInputChange = (event) => {
      const newInputValue = event.target.value;
      setInputValue(newInputValue);
    };
    const handleAlignItemChange = (event) => {
      const newInputValue = event;
      setalignment(newInputValue);
      setAttributes({ alignment: newInputValue });
      checkingEmbedType(newInputValue);
      setAttributes({snippetToShow: snippetElement});
    };
    const handlebgColorChange = (color) => {
      setbgColor(color);
      setAttributes({ bgColor: color });
      console.log(bgColor,"color");
      checkingEmbedType(alignment);
    };
    const handleheightChange = (color) => {
      setheight(color);
      setAttributes({ height: color });
      console.log(height,"color");
      checkingEmbedType(alignment);
    };
    const handlewidthChange = (color) => {
      setwidth(color);
      setAttributes({ width: color });
      console.log(width,"color");
      checkingEmbedType(alignment);
    };
    const handletxtSizeChange = (size) => {
      settextSize(size);
      setAttributes({ textSize: size });
      console.log(textSize,"color");
      checkingEmbedType(alignment);
    };
    const handleprimaryTextChange = (value) => {
      setprimaryText(value);
      setAttributes({ primaryText: value });
      console.log(primaryText,"text");
      checkingEmbedType(alignment);
    };
    const handlesecondaryTextChange = (value) => {
      setsecondaryText(value);
      setAttributes({ secondaryText: value });
      console.log(secondaryText,"text");
      checkingEmbedType(alignment);
    };
    const handletextColorChange = (color) => {
      settextColor(color);
      setAttributes({ textColor: color });
      console.log(textColor,"text color");
      checkingEmbedType(alignment);
    };
    const handlealignChange = (al) => {
      setalign(al);
      setAttributes({ align: al });
      console.log(align,"text align");
      checkingEmbedType(alignment);
    };
    const handlebuttonColorChange = (color) => {
      setbuttonColor(color);
      setAttributes({ buttonColor: color });
      console.log(buttonColor,"button color");
      checkingEmbedType(alignment);
    };
    function handleButtonClick() {
      setAttributes({ apiKey: inputValue });
      console.log(inputValue, attributes.apiKey); // Update the attribute value on button click
    }

    return createElement(
      wp.element.Fragment,
      null,
      createElement(
        InspectorControls,
        { title: "Custom Settings" },
        createElement(
          wp.components.PanelBody,
          { title: "Custom Settings" },
          // Alignment
           attributes.apiKey != '' ? createElement(RadioControl, {
            label: "Alignment",
            selected: alignment,
            options: [
              { label: "Full Page", value: "Full_Page" },
              // { label: "Full Page Override", value: "Full_Page_Override" },
              { label: "In Page", value: "In_Page" },
              { label: "Popup", value: "Popup" },
              { label: "Chat", value: "Chat" },
              { label: "Greet Bar", value: "Greet_Bar" },
              { label: "Floating Rectangle", value: "Floating_Rectangle" },
              { label: "Sidenote", value: "Sidenote" },
              { label: "Custom Embed", value: "Custom_Embed" },
            ],
            onChange: handleAlignItemChange,
          }):'',
          alignment === "Popup" || alignment === "Chat" || alignment === "Greet_Bar" || alignment === "Floating_Rectangle" || alignment === "Sidenote"? createElement(wp.components.TextControl, {
            label: "Primary Text",
            value: primaryText,
            onChange: handleprimaryTextChange,
          }):'',
          alignment === "Floating_Rectangle" || alignment === "Greet_Bar"?
          createElement(wp.components.TextControl, {
            label: "Secondary Text",
            value: secondaryText,
            onChange: handlesecondaryTextChange,
          }):'',
          alignment === "Chat" || alignment === "Sidenote" ? (
            createElement('div', null,
            iconRadioButtons,
          )
        ) : null,
          alignment === "Custom_Embed"?
            createElement('div', { style: { display: 'flex', gap: '10px' } },
                createElement(wp.components.TextControl, {
                    label: "Width",
                    value: width,
                    onChange: handlewidthChange,
                    style: { flex: 1 },
                }),
                createElement(wp.components.TextControl, {
                    label: "Height",
                    value: height,
                    onChange: handleheightChange,
                    style: { flex: 1 },
                })):
                ''
        ,
        
          // Text Size
          alignment === "Popup" ?  createElement(wp.components.SelectControl, {
            label: "Text Size",
            value: textSize,
            options: [
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
            ],
            onChange: handletxtSizeChange,
          }):'',

          alignment === "Popup" || alignment === "Chat" || alignment === "Greet_Bar" || alignment === "Floating_Rectangle" || alignment === "Sidenote"? createElement('div', {}, [
            createElement('label', {}, "Background Color"),
            createElement(ColorPalette, {
              value: bgColor,
              onChange: handlebgColorChange,
            }),
          
            createElement('label', {}, "Text Color"),
            createElement(ColorPalette, {
              value: textColor,
              onChange: handletextColorChange,
            }),
            alignment === "Greet_Bar"? createElement('label', {}, "Button Color"):'',
            alignment === "Greet_Bar"? createElement(ColorPalette, {
              value: buttonColor,
              onChange: handlebuttonColorChange,
            }):'',
          ]): '',
        ),
      ),
      createElement(
        "p",
        { style: { fontWeight: "600", marginTop: "36px" } },
        "Outgrow Block Editor"
      ),
      createElement(
        "div",
        { className: className },
        createElement("input", {
          type: "text",
          placeholder: "Enter Live URL",
          value: inputValue,
          style: {
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
            width: "100%",
            // Add more styles as needed
          },
          onChange: handleInputChange,
        })
        // Add your block editor content here
      ),
      createElement(
        Button,
        {
          isPrimary: true,
          style: { marginTop: "10px" },
          onClick: handleButtonClick,
        },
        "Try this one"
      ),

      snippetElement
    );
  },

  save: function (props) {
    const editing = false;
    const { className, attributes, setAttributes } = props;
    console.log("SAVE-------->",attributes.snippetToShow );

    return attributes.snippetToShow;
  },
});

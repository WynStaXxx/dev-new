// ==UserScript==
// @name           sidebartoggleswitch.uc.js
// @description    サイドバートグルスイッチ
// @include        main
// ==/UserScript==

(function(){

  var sts = document.createXULElement("grippy");
  sts.setAttribute("id", "ucjs-sidebar-toggle-switch");
  sts.setAttribute("onclick", "SidebarUI.toggle()");
//  sts.setAttribute("width", "6");
//左  document.getElementById("browser").insertBefore(sts, document.getElementById("browser-border-start")); 
  document.getElementById("browser").appendChild(sts); 
  var style = `
      #main-window:not([inFullscreen]):not([chromehidden="menubar toolbar location directories status extrachrome "]) #ucjs-sidebar-toggle-switch {
        width: 6px !important;
        min-width: 6px;
        border:1px solid ThreeDShadow;
        cursor: pointer;
      }
      #main-window:not([inFullscreen]):not([chromehidden="menubar toolbar location directories status extrachrome "]) #ucjs-sidebar-toggle-switch:hover {
        background: var(--toolbarbutton-hover-background);
      }
      #main-window[inFullscreen]:not([chromehidden="menubar toolbar location directories status extrachrome "]) #ucjs-sidebar-toggle-switch {
        width: 1px;
        max-width: 1px;
        opacity: 0;
        margin-left: -1px;
      }
      #main-window[inDOMFullscreen]:not([chromehidden="menubar toolbar location directories status extrachrome "]) #ucjs-sidebar-toggle-switch {
        visibility: collapse;
      }
	`;
    style = style.replace(/\s+/g, " ");
    let sspi = document.createProcessingInstruction(
      'xml-stylesheet',
      'type="text/css" href="data:text/css,' + encodeURIComponent(style) + '"'
    );
    document.insertBefore(sspi, document.documentElement);
    sspi.getAttribute = function(name) {
      return document.documentElement.getAttribute(name);
    };

})()
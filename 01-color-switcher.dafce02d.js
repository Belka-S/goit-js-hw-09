const t={startBtnEl:document.querySelector("button[data-start]"),stopBtnEl:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")};t.startBtnEl.addEventListener("click",(function(){t.stopBtnEl.disabled=!1,t.startBtnEl.disabled=!0,e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtnEl.addEventListener("click",(function(){t.stopBtnEl.disabled=!0,t.startBtnEl.disabled=!1,clearInterval(e)})),t.stopBtnEl.disabled=!0;let e=null;
//# sourceMappingURL=01-color-switcher.dafce02d.js.map

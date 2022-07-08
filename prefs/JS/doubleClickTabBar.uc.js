gBrowser.tabContainer.addEventListener("dblclick", (e) => {
    if (e.button !== 0 || gBrowser.tabContainer._blockDblClick) return;
    BrowserOpenTab(e);
    e.preventDefault();
});
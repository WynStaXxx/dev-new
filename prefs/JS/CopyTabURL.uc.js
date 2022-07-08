// ==UserScript==
// @name          CopyTabURL.uc.js
// @description   タブコンテキストメニューから対象タブのURLをコピーする
// @include       main
// @charset       UTF-8
// @version       2020/01/12  Fx68+
// @version       2016/01/13  メニュー表示位置を先頭に変更してセパレータを追加
// ==/UserScript==
(function(doc) {
	var node = doc.getElementById("tabContextMenu");
	var mi = doc.createXULElement("menuitem");
	mi.setAttribute("id", "copytaburl");
	mi.setAttribute("label", "タブのURLをコピー");
	mi.addEventListener('command', (event) => {
		var tab = TabContextMenu.contextTab;
		var curURL = tab.linkedBrowser.currentURI.spec;
		var cb = Cc['@mozilla.org/widget/clipboardhelper;1']
						.getService(Ci.nsIClipboardHelper);
		cb.copyString(curURL);
	});
	node.insertBefore(mi, node.firstChild);

	if (!sep) {
		var sep = doc.createXULElement('menuseparator');
		sep.setAttribute('id', 'copytaburl-sep');
		var insPos = doc.getElementById('copytaburl');
		node.insertBefore(sep, insPos.nextSibling);
	}
}(document));

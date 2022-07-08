// ==UserScript==
// @id             www.youtube.com-2925af97-1b59-4d38-bc09-e2fff53f9d6a@defb5eb4-0168-463d-913b-8b4fbfa18502
// @name           YouTube + MP3 Downloader
// @version        1.3.2.1
// @namespace      defb5eb4-0168-463d-913b-8b4fbfa18502
// @author         atmega
// @description    Download YouTube videos with a single click of a button!
// @include        http://www.youtube.com/watch?v=*
// @include        http://www.youtube.com/watch?feature=*
// @run-at         document-end
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MUM3QzMxNTZCRTExRTE4MTBGQjc5Q0NCNENBNTYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MUM3QzMyNTZCRTExRTE4MTBGQjc5Q0NCNENBNTYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzgxQzdDMkY1NkJFMTFFMTgxMEZCNzlDQ0I0Q0E1NjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzgxQzdDMzA1NkJFMTFFMTgxMEZCNzlDQ0I0Q0E1NjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6QWzmgAAAj6ElEQVR42uxdCXxcxXn/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
// ==/UserScript==
(function () {
    timer1 = new Date().getTime();
    // Video Settings
    var VIDEO_TITLE = document.getElementById('eow-title').getAttribute('title');
    var VIDEO_ID = window.location.href.match(/v=[A-Za-z0-9-_]{11}/)[0].substring(2);

    // Script settings
    var SETTINGS = {
        "SCRIPT_VERSION": "1.3.2.1",
        "URL": "http://userscripts.org/scripts/source/123836.user.js",
        "SCRIPT_ID": 123836,
        "DOWNLOAD_DISABLE_TIME": 3,
        "NOTIFY_WAIT_TIME": 5,
        "QUALITY": {
            "13": "3GP",
            "17": "3GP (HQ)",
            "5": "240p (FLV)",
            "34": "360p (FLV)",
            "35": "480p (FLV)",

            "18": "360p (MP4)",
            "22": "720p HD(MP4)",
            "37": "1080p HD (MP4)",

            "43": "360p (WebM)",
            "44": "480p (WebM)",
            "45": "720p HD(WebM)",
            "46": "1080p HD (WebM)",

            "100": "360p 3D(WebM)",
            "101": "480p 3D(WebM)",
            "102": "720p 3D(WebM)",

            "82": "360p 3D(MP4)",
            "83": "240p 3D(MP4)",
            "84": "720p 3D(MP4)",
            "85": "520p 3D(MP4)"
        }
    };

    // Create the main interface div box along with the download button
    createDownloadBox();

    // Get an array of all available download links
    links = getDownloadLinks();

    // Populate the combox box with available links
    populateList(links);

    // Update button is clicked
    document.getElementById('download-checkUpdate').addEventListener('click', function (e) {
        e.preventDefault();
        notify('Checking for updates...this might take a few seconds.');
        var rVer = checkForUpdates(SETTINGS.SCRIPT_ID, function (rver) {
            if (confirm('Local version: ' + SETTINGS.SCRIPT_VERSION + '\nRemote version: ' + rver + '\n\nWould you like to update this script?')) {
                window.location.href = SETTINGS.URL;
            }
        });

    });

    // Report bug button is cliced
    document.getElementById('download-reportBug').addEventListener('click', function (e) {
        e.preventDefault();
        notify('Feature coming soon!');
    });

    // Download button is clicked
    document.getElementById('download-button').addEventListener('click', function (e) {
        var cmdButton = this;
        cmdButton.setAttribute('disabled', 'disabled');
        window.location = document.getElementById('qualitySelect').value;
        setTimeout(function () {
            cmdButton.removeAttribute('disabled');
        }, SETTINGS.DOWNLOAD_DISABLE_TIME * 1000);

    });

    timer2 = new Date().getTime();
    diff = (timer2 - timer1) / 1000;
    notify('YouTube + MP3: Script loaded in <strong>' + diff + '</strong> seconds.');

    function createDownloadBox() {
        var headline = document.getElementById('watch-actions');

        // Create the main download widget box
        var box = document.createElement('div');
        var boxCSS = 'padding:15px';
        box.setAttribute('style', boxCSS);
        box.setAttribute('id', 'download-box');
        headline.appendChild(box);

        // Attach the script logo
        var logoLink = document.createElement('a');
        var logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'http://i41.tinypic.com/4h71g1.png');
        logoImg.setAttribute('class', 'yt-uix-tooltip-reverse yt-uix-tooltip');
        logoImg.setAttribute('data-tooltip-text', 'YouTube + MP3 - Check for updates');
        logoLink.href = '#';
        logoLink.setAttribute('id', 'download-checkUpdate');
        logoLink.setAttribute('style', 'position:relative;top:6px;');
        logoLink.appendChild(logoImg);
        box.appendChild(logoLink);

        // Report bug logo
        var logoLink = document.createElement('a');
        var logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'http://i40.tinypic.com/2edmtzc.png');
        logoImg.setAttribute('class', 'yt-uix-tooltip-reverse yt-uix-tooltip');
        logoImg.setAttribute('data-tooltip-text', 'YouTube + MP3 - Report a bug');
        logoLink.href = '#';
        logoLink.setAttribute('id', 'download-reportBug');
        logoLink.setAttribute('style', 'position:relative;top:6px;');
        logoLink.appendChild(logoImg);
        box.appendChild(logoLink);

        // Create the combo box
        var selector = document.createElement('select');
        selector.setAttribute('id', 'qualitySelect');
        box.appendChild(document.createTextNode('Available Formats '));
        box.appendChild(selector);

        // Create the download button
        var button = document.createElement('button');
        button.setAttribute('class', 'start yt-uix-tooltip-reverse  yt-uix-button yt-uix-button-default');
        button.setAttribute('id', 'download-button');
        button.setAttribute('style', 'position:relative;bottom:2px;left:10px;');
        button.appendChild(document.createTextNode('Download video'));
        box.appendChild(button);

        // Create notification box
        var notify = document.createElement('div');
        notify.setAttribute('id', 'download-notify');
        notify.setAttribute('style', 'display:none;text-align:center;padding-top:6px;margin-top:10px;width:auto;height:24px;background:#B1FFBD;border:1px solid #8BFF7D;');
        document.getElementById('download-box').appendChild(notify);
        return box;
    }

    function getDownloadLinks() {
        var PAGE_SOURCE = document.body.innerHTML;
        var downloadLinks = [];
        var matches = PAGE_SOURCE.match(/m_map": "url=(.*?)", "/g)[0].split('url=');

        // Iterate through each valid download link and clean it up
        for (i = 0; i <= matches.length - 1; i++) {
            // Make sure it's a valid download link
            if (matches[i].indexOf('lscache') !== -1) {
                downloadLinks.push(unescape(matches[i]).replace(/(\\u0026quality.+|\\u0026type.+)/, ''));
            }
        }
        return downloadLinks;
    }

    function notify(m) {
        var nbox = document.getElementById('download-notify');
        nbox.innerHTML = m;
        nbox.style.display = "block";
        // Hide the notification box after 'x' seconds.
        setTimeout(function () {
            nbox.style.display = "none";
        }, SETTINGS.NOTIFY_WAIT_TIME * 1000);

    }

    function populateList(list) {
        console.log('Populating combo box with ' + list.length + ' links.');
        var qSelect = document.getElementById('qualitySelect');

        // Append MP3 download link
        var option = document.createElement('option');
        option.setAttribute('value', 'http://www.youtube-mp3.org/#v=' + VIDEO_ID);
        qSelect.appendChild(option);
        option.appendChild(document.createTextNode('MP3'));

        // iterate through the download link list and append it to the select combo box
        for (i = 0; i <= list.length - 1; i++) {

            // Attach the video's title to the download link
            var downloadLink = list[i] + "&title=" + VIDEO_TITLE;

            // Get the itag query string which indicates video format and quality
            var format = downloadLink.match(/itag=\d{1,3}/)[0].substr(5);
            var quality = SETTINGS.QUALITY[format];

            if (typeof quality === 'undefined') {
                console.log("Ran into unknown quality: " + format + ". Skipping...");
                continue;
            }

            //console.log('Video format: ' + format);
            option = document.createElement('option');
            option.setAttribute('value', downloadLink);
            qSelect.appendChild(option);
            option.appendChild(document.createTextNode(quality));
            //console.log('Link ' + (i + 1) + ' proccessed.');	
        }
    }

    function checkForUpdates(scriptID, success) {
        console.log('checkForUpdates: Now checking for updates...');

        // Browser does not support GM_xmlhttprequest
        if (typeof GM_xmlhttpRequest === 'undefined') {
            notify('Your browser does not support this feature.');
            return;
        }
        // Request
        GM_xmlhttpRequest({
            method: "GET",
            url: "http://userscripts.org/scripts/review/" + scriptID,
            onload: function (res) {
                //get remote version
                try {
                    var remoteVersion = res.responseText.match(/@version\s+(\d|\.)+/)[0].match(/(\d|\.)+/)[0]
                    console.info('Successfully received remote version ' + remoteVersion);
                    success(remoteVersion);
                } catch (e) {
                    console.warn('Unable to check for updates: ' + e.message);
                }
            }
        });
    }
})();
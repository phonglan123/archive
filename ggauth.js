function tableToObj(table) {
    var rows = table.rows;
    var propCells = rows[0].cells;
    var propNames = [];
    var results = [];
    var obj, row, cells;

    // Use the first row for the property names
    // Could use a header section but result is the same if
    // there is only one header row
    for (var i = 0, iLen = propCells.length; i < iLen; i++) {
        propNames.push(propCells[i].textContent || propCells[i].innerText);
    }

    // Use the rows for data
    // Could use tbody rows here to exclude header & footer
    // but starting from 1 gives required result
    for (var j = 1, jLen = rows.length; j < jLen; j++) {
        cells = rows[j].cells;
        obj = {};

        for (var k = 0; k < iLen; k++) {
            obj[propNames[k]] = cells[k].textContent || cells[k].innerText;
        }
        results.push(obj)
    }
    return results;
}

function otpauth_url_decode(otpauth_url = localStorage.getItem("otpauth-migration")) {
    if (otpauth_url == null) return undefined;
    if (localStorage.getItem("otpauth-migration") == null)
        localStorage.setItem("otpauth-migration", otpauth_url);
    document.querySelector("#gatsby-focus-wrapper > div > main > div.container > div:nth-child(2) > div > div.card-body > div > form > div > input").value = decodeURIComponent(otpauth_url).replace("otpauth-migration://offline?data=", "");
    document.querySelector("#gatsby-focus-wrapper > div > main > div.container > div:nth-child(2) > div > div.card-body > div > form > button").click();
    let table = tableToObj(document.querySelector("#gatsby-focus-wrapper > div > main > div.container > div:nth-child(2) > div > div.card-body > div > div > table"));
    let secrets = {},
        defcounter = new Date().getFullYear() * (new Date().getMonth() + 5) * new Date().getDate(),
        counter = defcounter;
    Object.entries(table[4]).forEach(name => {
        if (name[1] != "name")
            secrets[table[3][name[0]].toUpperCase() + "     " + name[1].toLowerCase().replace(table[3][name[0]].toLowerCase(), "")] = table[5][name[0]];
    });
    setInterval(() => {
        if (counter == defcounter) {
            Object.entries(secrets).forEach(name => {
                document.querySelector("#gatsby-focus-wrapper > div > main > div.container > div:nth-child(3) > div > div.card-body > div > form > div > input").value = name[1];
                document.querySelector("#gatsby-focus-wrapper > div > main > div.container > div:nth-child(3) > div > div.card-body > div > form > button").click();
                document.querySelector("#gatsby-focus-wrapper > div > main > div.container > div:nth-child(4) > div > div.card-body > div > form > button").click();
                secrets[name[0]] = parseInt(document.querySelector("#gatsby-focus-wrapper > div > main > div.container > div:nth-child(4) > div > div.card-body > div > div > table > tbody > tr > td > pre").innerHTML);
            });
            if (document.querySelector("#baophu") == undefined) {
                let me = document.createElement("div");
                me.id = "baophu";
                me.style = "position: absolute; width: 100%; height: 100%; top:0;background: inherit;    word-break: break-all;"
                me.innerHTML = otpauth_url + "<br/><span style='color: white;background:blue; border: 1px solid; border-radius: 5px; margin: 5px; padding: 5px; font-size: 20px;'>counter: <b id='c'></b></span><br/>"
                document.body.appendChild(me);
            } else
                document.querySelector("#baophu").innerHTML = otpauth_url + "<br/><span style='color: white;background:blue; border: 1px solid; border-radius: 5px; margin: 5px; padding: 5px; font-size: 20px;'>counter: <b id='c'></b></span><br/>";
            Object.entries(secrets).forEach(name => {
                document.querySelector("#baophu").innerHTML += "<b>" + name[0] + "</b><span style='color: red; border: 1px solid; border-radius: 5px; margin: 5px; padding: 5px; font-size: 20px;' onclick='copyTextToClipboard(" + name[1] + ")'>" + name[1] + "</span><br/>";
            });
        }
        document.querySelector("#baophu #c").innerHTML = counter;
        counter--;
        if (counter == -1) counter = defcounter;
    }, 1000);
}

otpauth_url_decode();

function addscript(url) {
    let me = document.createElement("script");
    me.src = url;
    document.body.appendChild(me);

    /*
    s = document.createElement("script"); s.src = url; document.body.appendChild(s);
    */
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
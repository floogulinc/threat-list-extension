function httpGet(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
		console.log(chrome.extension.getURL("blocked.html"))

httpGet("https://hexxiumcreations.github.io/threat-list/hexxiumthreatlist.txt", function(res) {
	var BAD_URLS = res.split("\n")
	for(index = 8; index < BAD_URLS.length; index++)
	{if (BAD_URLS[index].replace("||", "").replace("/", "") === window.location.hostname) {console.log(BAD_URLS[index]);
chrome.runtime.sendMessage({state: "bad"}, function(response) {console.log(response.res)})
}}		
	})
var data = require("self").data;

var pageMod = require("sdk/page-mod");


pageMod.PageMod({
  include: "*", 
  contentScriptWhen: "ready",
  contentScriptFile: [data.url("jquery-1.4.2.min.js"),
  						data.url("inetfilter.js"),
  						data.url("noworker.nude.min.js"),
  						data.url("nude.min.js"),
  						data.url("worker.nude.min.js")
  						]
  	
});

var status = require("sdk/panel").Panel({
  width: 150,
  height: 40,
  contentURL: data.url("inetfilter-status.html")
});

require("sdk/widget").Widget({
  label: "inetfilter-status",
  id: "inetfilter",
  contentURL: "http://www.mozilla.org/favicon.ico",
  panel: status
});
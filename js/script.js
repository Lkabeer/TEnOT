// JavaScript Document
// chat X-Team Start
//window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: 'e87ada04-74d6-4b98-b10a-f2ba969f17a6', f: true }); done = true; } }; })();
// chat X-Team End

// Moving Monuments X-Team Start
 	$('#webTicker').webTicker();
// Moving Monuments X-Team end

// defer CSS X-Team Start
//	  var loadDeferredStyles = function() {
//		var addStylesNode = document.getElementById("deferred-styles");
//		var replacement = document.createElement("div");
//		replacement.innerHTML = addStylesNode.textContent;
//		document.body.appendChild(replacement);
//		addStylesNode.parentElement.removeChild(addStylesNode);
//	  };
//	  var raf = requestAnimationFrame || mozRequestAnimationFrame ||
//		  webkitRequestAnimationFrame || msRequestAnimationFrame;
//	  if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
//	  else window.addEventListener('load', loadDeferredStyles);
// defer CSS X-Team end
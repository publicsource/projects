(function(){
//module for interfacing with GA

/**
@param [category] - usually "interaction"
@param action - what happened
@param [label] - not usually visible in dashboard, defaults to title or URL
*/
var DIMENSION_PARENT_URL = 'dimension1';
var DIMENSION_PARENT_HOSTNAME = 'dimension2';
var DIMENSION_PARENT_INITIAL_WIDTH = 'dimension3';
var a = document.createElement("a");

var track = function (eventAction, eventLabel, eventValue) {
  var event = {
    eventAction,
    eventLabel,
    eventValue,
    hitType: "event",
    eventCategory: document.title
  };
  var search = window.location.search.replace(/^\?/, "");
  var query = {};
  search.split("&").forEach(pair => {
    var [key, value] = pair.split("=");
    query[key] = value;
  });
  var parentURL = query.parentUrl;
  a.href = parentURL;
  var hostname = a.hostname;
  event[DIMENSION_PARENT_URL] = parentURL;
  event[DIMENSION_PARENT_HOSTNAME] = hostname;
  if (window.ga) ga("send", event);
};

var _$track_3 = track;

/* removed: var _$track_3 = require("./tracking"); */;

var _$pym_2 = new Promise((ok, fail) => {
  var url = "https://pym.nprapps.org/pym.v1.min.js";
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);

  script.onload = function () {
    var child = new pym.Child({
      polling: 100
    });
    child.onMessage('on-screen', function (bucket) {
      _$track_3('on-screen', bucket);
    });
    child.onMessage('scroll-depth', function (data) {
      data = JSON.parse(data);
      _$track_3('scroll-depth', data.percent, data.seconds);
    });
    ok(child);
  };

  script.onerror = fail;
});

var _$expander_1 = {};
'use strict';

var toggleVisibility = function (event) {
  event.preventDefault();
  var expandedContent = event.target.previousElementSibling;

  if (!expandedContent || !expandedContent.classList.contains("expanded")) {
    return;
  }

  if (expandedContent.style.display == 'block') {
    expandedContent.classList.remove('animated', 'slideInUp');
    expandedContent.classList.add('animated', 'slideOutDown');
    expandedContent.style.display = 'none';
    event.target.innerHTML = 'Read More';
  } else {
    expandedContent.classList.remove('animated', 'slideOutDown');
    expandedContent.classList.add('animated', 'slideInUp');
    expandedContent.style.display = 'block';
    event.target.innerHTML = 'Collapse';
  }
};

var aboutSection = document.getElementsByClassName('about')[0];
aboutSection.addEventListener('click', toggleVisibility);

var _$main_4 = {};
_$pym_2;

_$expander_1;

}());
//# sourceMappingURL=app.js.map

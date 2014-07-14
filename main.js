$(function() {

    $.getJSON("http://api.thni.net/jzip/X0401/JSONP/J/state_index.js?callback=?");

});

function StateIndex(data) {
    console.log(data);
};


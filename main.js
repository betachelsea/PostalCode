$(function() {


    function StateIndex(data) {
        console.log(data);
    }
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "http://api.thni.net/jzip/X0401/JSONP/J/state_index.js",
        jsonp: 'StateIndex',
        success: function(data, dt, jqxhr) {
            console.log("success");
        },
        timeout: 30000,
        error: function(e) {
            console.error(e);
            alert("エラーでました");
        }
    });

    function jsoncallback() {
        alert("jsoncallback");
    }
});

document.addEventListener('DOMContentLoaded', function(e) {
    var url = window.location.href;
    var params = {};

    if(url.split('?').length !== 2) {
        return;
    }

    url.split('?')[1].split('&').forEach(function(element) {
        var arr = element.split('=');
        params[ arr[0] ] = decodeURIComponent( arr[1] );
    });

    document.getElementById('ionic-iframe').src = params.url;
});

function fetchSimilarHeaders (callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            //
            // The following headers may often be similar
            // to those of the original page request...
            //
            if (callback && typeof callback === 'function') {
                callback(request.getAllResponseHeaders());
            }
        }
    };

    //
    // Re-request the same page (document.location)
    // We hope to get the same or similar response headers to those which 
    // came with the current page, but we have no guarantee.
    // Since we are only after the headers, a HEAD request may be sufficient.
    //
	
    request.open('HEAD', include/header.html, true);
    request.send(null);
}
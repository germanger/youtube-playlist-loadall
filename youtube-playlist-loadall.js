function clickLoadMoreUntilItDoesntExist() {
    chrome.runtime.sendMessage({action: "hideIcon"}, function(response) {});

    if ($(".load-more-button").length == 0) {
        return;
    }
    
    $(".load-more-button").first().click();
    window.setTimeout(function () {
        clickLoadMoreUntilItDoesntExist();
        window.scrollTo(0,document.body.scrollHeight);
    }, 500);
}

function watchButton() {
    window.setTimeout(watchButton, 700);
   
    if (location.pathname != '/playlist' || $(".load-more-button").length == 0 || $(".load-more-button").first().is(":disabled")) {
        chrome.runtime.sendMessage({action: "hideIcon"}, function(response) {});
        return;
    }
    
    chrome.runtime.sendMessage({action: "showIcon"}, function(response) {});
}

/*
(document.body || document.documentElement).addEventListener('transitionend', function(event) {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
        watchButton();
    }
}, true);*/

watchButton();

// Listen for background messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'clickLoadMoreUntilItDoesntExist') {
        clickLoadMoreUntilItDoesntExist();
    }
});
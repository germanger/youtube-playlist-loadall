chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {               
    if (request.action == "showIcon") {
        chrome.pageAction.show(sender.tab.id);
        chrome.pageAction.setIcon({
            tabId: sender.tab.id,
            path: "icon38-active.png"
        });
    }
    
    if (request.action == "hideIcon") {
        chrome.pageAction.hide(sender.tab.id);
    }
});

// When pageAction icon is clicked, we send a message to that tab
chrome.pageAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, {action: "clickLoadMoreUntilItDoesntExist"}, function(response) {
    });
});
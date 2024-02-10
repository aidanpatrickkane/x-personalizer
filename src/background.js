chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.keyword) {
        console.log('Keyword received in background: ' + message.keyword);
        // If you need to store the keyword, do it here
        var currentKeyword = message.keyword;

        // Find the active tab and send the keyword to its content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {keyword: message.keyword}, function(response) {
                // Handle any response here from your content script
                console.log(response);
            });
        });
    }
    // This response goes back to popup.js, it's good practice to confirm receipt
    sendResponse({ result: "Keyword received" });
    return true; // required to keep the response open for async messages
});
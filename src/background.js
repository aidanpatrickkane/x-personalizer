let currentKeyword = ""; //holds current keyword

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.keyword) {
        console.log('Keyword received in background:  ' + message.keyword);
        currentKeyword = message.keyword; //store keyword
    }
    sendResponse({ result: "Keyword received" });
    return true; // required to keep the response open for async messages
});
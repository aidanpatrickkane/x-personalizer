// This event listener will be triggered when the form is submitted
document.getElementById('keywordForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents page from reloading on submit

    var keyword = document.getElementById('keywordInput').value;    // Get input value for keyword

    // Sends message to background script with keyword
    chrome.runtime.sendMessage({ keyword: keyword }, function(response) {
        console.log('Keyword sent to background: ' , keyword);
        //handle response from background script
        console.log('Response received from background: ', response.result);
    });
});
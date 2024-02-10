chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.keyword) {
        // Call a function that handles the search and like operation
        searchAndLikeTweets(message.keyword);
    }
});

// Logic to interact with the Twitter page:
// 1. Search for the keyword within the tweets.
// 2. Like the posts where the keyword is found.
// 3. Keep a count of liked posts.
// 4. Refresh the page after liking 20 posts or running out of posts to check.

// Placeholder for the actual implementation...

function searchAndLikeTweets(keyword) {
    let likedCount = 0;
    
    // Function to process tweets, find comments, and like if the keyword is present
    function processTweets() {
        const tweets = document.querySelectorAll('article'); // Selector for tweets
        
        for (const tweet of tweets) {
            // Check if we've liked enough tweets
            if (likedCount >= 20) {
                break;
            }
            
            // Selector for comments might involve opening the tweet and finding the comment section
            const comments = findCommentsForTweet(tweet);
            
            if (comments.some(comment => comment.textContent.includes(keyword))) {
                // Logic to 'like' the tweet
                likeTweet(tweet);
                likedCount++;
            }
        }

        // If we haven't liked enough tweets, we may need to scroll to load more
        if (likedCount < 20) {
            window.scrollTo(0, document.body.scrollHeight);
            // You would need to set a timeout here to wait for new tweets to load
            setTimeout(processTweets, 2000); // Adjust time as needed
        } else {
            // Refresh the page to show new content
            window.location.reload();
        }
    }
    
    // Start the process
    processTweets();
}
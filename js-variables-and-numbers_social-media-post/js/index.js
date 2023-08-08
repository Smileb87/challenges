newFunction();

// Create the variables for a social media post
let postTitle = "My Summer Vacation";
let postText = "I just returned from a 2-week summer vacation in Hawaii. It was a blast!";
let postLikes = 200;
let postUser = "TravelLover123";
let postIsReported = false;

function newFunction() {
	console.clear();
}

// Function to display the post
function displayPost() {
    console.log(`Title: ${postTitle}`);
    console.log(`Text: ${postText}`);
    console.log(`Likes: ${postLikes}`);
    console.log(`Created By: ${postUser}`);
    console.log(`Is Reported: ${postIsReported}`);
}

// Increase the likes by one
function increaseLikes() {
    postLikes++;
    console.log(`New Like Count: ${postLikes}`);
}

// Call the functions
displayPost();
increaseLikes();

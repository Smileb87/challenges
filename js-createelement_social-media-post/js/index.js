console.clear();

// Function to handle like button click
function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

// Create post container
const postContainer2 = document.createElement("div");
postContainer2.classList.add("post");

// Create user section
const userSection2 = document.createElement("div");
userSection2.classList.add("user-section");

// Create user avatar
const userAvatar2 = document.createElement("img");
userAvatar2.classList.add("user-avatar");
userAvatar2.src = "avatar2.jpg";
userAvatar2.alt = "User Avatar";
userSection2.appendChild(userAvatar2);

// Create username
const username2 = document.createElement("span");
username2.classList.add("username");
username2.textContent = "Jane Smith";
userSection2.appendChild(username2);

// Create post content
const postContent2 = document.createElement("div");
postContent2.classList.add("post-content");

// Create post text
const postText2 = document.createElement("p");
postText2.classList.add("post-text");
postText2.textContent = "I love JavaScript!";
postContent2.appendChild(postText2);

// Create like button
const likeButton2 = document.createElement("button");
likeButton2.classList.add("like-button");
likeButton2.setAttribute("data-js", "like-button");
likeButton2.textContent = "Like";
likeButton2.addEventListener("click", handleLikeButtonClick);
postContent2.appendChild(likeButton2);

// Append user section and post content to post container
postContainer2.appendChild(userSection2);
postContainer2.appendChild(postContent2);

// Append the second post container to the body
document.body.appendChild(postContainer2);

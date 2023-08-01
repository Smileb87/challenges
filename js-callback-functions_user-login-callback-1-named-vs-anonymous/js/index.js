console.clear();
}

// Named callback
function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}
handleUserLogin(showWelcomeMessage);

// Anonymous callback
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});

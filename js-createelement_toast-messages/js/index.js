console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToastMessage = createToastMessage();
  toastContainer.appendChild(newToastMessage);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = '';
});

function createToastMessage() {
  const toastMessage = document.createElement('li');
  toastMessage.className = 'toast-container__message';
  toastMessage.textContent = "This is a toast message";
  return toastMessage;
}
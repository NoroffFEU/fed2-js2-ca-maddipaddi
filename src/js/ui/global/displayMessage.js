/**
 * Displays a temporary message on the page, removing any existing message.
 * The type parameter is used for applying different styles to the message.
 *
 * @function displayMessage
 * @param {string} message - The message text to display.
 * @param {string} type - The type of the message (used for styling, e.g., "success", "error").
 * @returns {void}
 *
 * @example
 * displayMessage("Login successful!", "success");
 */
export function displayMessage(message, type) {
  const existingMessage = document.querySelector(".message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageContainer = document.createElement("div");
  //remember type is added for styling, if styling not implemented, remove later
  messageContainer.classList.add("message", type);

  const messageText = document.createElement("p");
  messageText.innerText = message;

  messageContainer.appendChild(messageText);

  document.body.appendChild(messageContainer);
}

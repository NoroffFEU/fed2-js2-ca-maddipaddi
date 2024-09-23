export function displayMessage(message, type) {
    const existingMessage = document.querySelector(".message");
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageContainer = document.createElement("div");
    //remember type is added for styling, if styling not implemented, remove later
    messageContainer.classList.add("message", type);
    messageContainer.innerText = message;

    document.body.appendChild(messageContainer);
}
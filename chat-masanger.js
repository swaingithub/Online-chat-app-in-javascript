var messageInput = document.getElementById("message-input");
var sendButton = document.getElementById("send-button");
var chatMessages = document.getElementById("chat-messages");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  var message = messageInput.value;

  if (message.trim() !== "") {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    messageInput.value = "";
  }
}

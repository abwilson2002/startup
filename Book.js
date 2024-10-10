function insertChat(text) {
    const newChildChat = document.createElement('tr')
    newChildChat.id = "selfReport";
    newChildChat.className = "messages";

    const parentElement = document.querySelector('table');
    parentElement.appendChild(newChildChat);
}


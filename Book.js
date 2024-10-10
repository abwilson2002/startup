function insertChat(text) {
    const newChildChat = document.createElement('td')
    newChildChat.id = "selfReport";
    newChildChat.className = "messages";

    const parentElement = document.querySelector('td');
    parentElement.appendChild(newChildChat);
}


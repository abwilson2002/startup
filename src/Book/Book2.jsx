import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Book.css";
import "../../service/index";

export function Book2(props) {
    const userName = props.userName;
    let messageList = [];
    return (
        <main>
          <section className="main-container">
              <img className="book-image" src="/book_image.jpg" alt="Book image"/>
              <div className="chat-table-container">
              <table className="chat-table">
                <thead>
                <tr><th>Chat</th></tr> 
                </thead>
                <tbody className="chat-table" id="mainChatTable">
                </tbody>
              </table>
              </div>
          </section>
          <section id="userInput">
              <input id="messageInput" className="buttonInput" type="text" placeholder="Type your response here"/>
              <button className="buttonChat" 
                type="Submit" 
                onClick={() => 
                    (messageList, userName)}>
                    Chat
              </button>
          </section>
        </main>
      );
  }

  function Chat(messageList, messageUsername) {
    const userName = messageUsername;
    let messageInput = document.getElementById('messageInput');
    messageList.push({ message: messageInput.value, username: messageUsername});
    let tableBody = document.getElementById('mainChatTable');
    
    tableBody.innerHTML = '';

    messageList.forEach(item => {
        let row = document.createElement('tr');
        let messageCell = document.createElement('td');

        messageCell.textContent = item.message;
        messageCell.id = item.username === userName ? 'selfReport' : 'otherReport';

        row.appendChild(messageCell);
        tableBody.appendChild(row);
    });
}
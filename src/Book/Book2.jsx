import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Book.css";
import { Comment } from 'comment.js';

export function Book2() {
    return (
        <main>
          <section className="main-container">
              <img className="book-image" src="/book_image.jpg" alt="Book image"/>
              <table className="chat-table">
                  <tr>
                      <th>Chat</th>
                  </tr>
                  <tr>
                      <td className="messages"id="selfReport">Example message from user</td>                    
                  </tr>
                  <tr>
                      <td className="messages" id="otherReport">Example reply message from other users</td>
                  </tr>
              </table>
          </section>
          <section id="userInput">
              <input className="buttonInput" type="text" placeholder="Type your response here"/>
              <button className="buttonChat" type="Submit" onClick={Chat}>Chat</button>
          </section>
        </main>
      );
  }

  function Chat() {
    [chatLog, newChatLog] = array[Message, chatUserName];

    /* PsuedoCode:
        Add new message to chatLog with data {message: message, chatUserName: userName}
        run through chatLog and show each message within the chat table
    */
  }
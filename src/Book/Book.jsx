import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Book.css";

export function Book() {
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
                    <p><td className="messages" id="otherReport">Example reply message from other users</td></p>
                </tr>
            </table>
        </section>
        <section id="userInput">
            <input className="buttonInput" type="text" placeholder="Type your response here"/>
            <button className="buttonChat" type="Submit">Chat</button>
        </section>
      </main>
    );
  }
import React from "react";
import "./Book.css";
/*

export function About(props) {
    const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=')


    React.useEffect(() => {
        setImageUrl('book_image.jpg');
    }, []);


    return (
            <main>
                <section>
                    <img src={imageUrl} alt="Book image" height="400" width="300"/>
                    <table>
                        <tr>
                            <th>Chat</th>
                        </tr>
                        <tr>
                            <td class="messages"id="selfReport">Example message from user</td>
                        </tr>
                        <tr>
                            <p><td class="messages" id="otherReport">Example reply message from other users</td></p>
                        </tr>
                    </table>
            </section>
            <section id="userInput">
                <div id="userInput">
                    <input class="buttonInput" type="text" placeholder="Type your response here"/>
                    <button class="buttonChat" type="Submit">Chat</button>
                </div>
            </section>
        </main>
    );
}*/

export function Book() {
    return (
      <main className='container-fluid bg-secondary text-center'>
        <section>
            <img src="/book_image.jpg" alt="Book image" height="400" width="300"/>
            <table className='container-fluid'>
                <tr>
                    <th>Chat</th>
                </tr>
                <tr>
                    <td className="text-right" class="messages"id="selfReport">Example message from user</td>                    
                </tr>
                <tr>
                    <p><td className='text-left' class="messages" id="otherReport">Example reply message from other users</td></p>
                </tr>
            </table>
        </section>
        <section id="userInput">
            <div id="userInput">
                <input class="buttonInput" type="text" placeholder="Type your response here"/>
                <button class="buttonChat" type="Submit">Chat</button>
            </div>
        </section>
      </main>
    );
  }
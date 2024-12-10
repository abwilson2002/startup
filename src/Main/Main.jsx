import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';


export function Main(props) {
    const userName = props.userName;
    return (
      <main className='container-fluid bg-secondary text-center'>
        <h6>{userName}</h6>
        <table>
            <tr>
                <th>Book Picture</th>
                <th>Title Of Book</th>
            </tr>
            <tr id="booklist">
                <td><img src="/book_image.jpg" alt="Example Book" height="100" width="100"/></td>
                <td>
                  <a href="HarryPotter">Harry Potter</a>
                </td>
            </tr>
            <tr id="booklist">
                <td><img src="/book_image.jpg" alt="Example Book" height="100" width="100"/></td>
                <td><a href="Mistborn">Mistborn</a></td>
            </tr>
        </table>
      </main>
    );
  }
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
                <th>Active Users</th>
                <th>New Comments?</th>
            </tr>
            <tr id="booklist">
                <td><img src="/book_image.jpg" alt="Example Book" height="100" width="100"/></td>
                <td>
                  <a href="Book">Example Book Title</a>
                </td>
                <td>8</td>
                <td>
                  <li>
                    <input type="checkbox" id="checkbox1" name="varCheckbox" value="checkbox1" checked/>
                  </li>
                </td>
            </tr>
            <tr id="booklist">
                <td><img src="/book_image.jpg" alt="Example Book" height="100" width="100"/></td>
                <td><a href="Book2">Example Book Title 2</a></td>
                <td>15</td>
                <td><li><input type="checkbox" id="checkbox2" name="varCheckbox" value="checkbox2"/></li></td>
            </tr>
        </table>
      </main>
    );
  }
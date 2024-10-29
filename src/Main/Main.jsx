import React from 'react';
import './about.css';

export function Main(props) {
  return (
    <main>
        <h6>User's Username</h6>
        <table>
            <tr>
                <th>Book Picture</th>
                <th>Title Of Book</th>
                <th>Active Users</th>
                <th>New Comments?</th>
            </tr>
            <tr id="booklist">
                <td><img src="book_image.jpg" alt="Example Book" height="100" width="100"/></td>
                <td><a href="Book.html">Example Book Title</a></td>
                <td>8</td>
                <td><li><input type="checkbox" id="checkbox1" name="varCheckbox" value="checkbox1" checked/></li></td>
            </tr>
            <tr id="booklist">
                <td><img src="book_image.jpg" alt="Example Book" height="100" width="100"/></td>
                <td><a href="Book.html">Example Book Title 2</a></td>
                <td>15</td>
                <td><li><input type="checkbox" id="checkbox2" name="varCheckbox" value="checkbox2"/></li></td>
            </tr>
        </table>
    </main>
  );
}
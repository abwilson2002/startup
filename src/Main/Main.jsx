import React from 'react';
import Button from 'react-bootstrap/Button';
import {userName} from '././index/login.jsx'
import './Main.css';

export function Main(props) {
    const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=')


    React.useEffect(() => {
        setImageUrl('book_image.jpg');
    }, []);


  return (
    <main>
        <h6>{userName}</h6>
        <table>
            <tr>
                <th>Book Picture</th>
                <th>Title Of Book</th>
                <th>Active Users</th>
                <th>New Comments?</th>
            </tr>
            <tr id="booklist">
                <td><img src={imageUrl} alt="Example Book" height="100" width="100"/></td>
                <Button variant='primary' onClick={() => navigate('/Book')}>
        Book
      </Button>
                <td>8</td>
                <td><li><input type="checkbox" id="checkbox1" name="varCheckbox" value="checkbox1" checked/></li></td>
            </tr>
            <tr id="booklist">
                <td><img src="book_image.jpg" alt="Example Book" height="100" width="100"/></td>
                <Button variant='primary' onClick={() => navigate('/Book')}>
        Book 2
      </Button>
                <td>15</td>
                <td><li><input type="checkbox" id="checkbox2" name="varCheckbox" value="checkbox2"/></li></td>
            </tr>
        </table>
    </main>
  );
}
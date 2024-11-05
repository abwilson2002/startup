import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css";
/*

export function About(props) {
    const [imageUrl, setImageUrl] = React.useState('././public/Bookmarked_Theories_Logo.png.jpg');



    React.useEffect(() => {
        setImageUrl('././public/Bookmarked_Theories_Logo.png.jpg');
    }, []);


    return (

    );
}*/

export function About() {
    return (
      <main className='container-fluid bg-secondary text-center'>
        <div id="picture" className="picture-box">
            <img src="/Bookmarked_Theories_Logo.png.jpg" alt="Logo" height="200" width="200"/>
        </div>
        
        <p>Welcome to Bookmarked Theories! This is a site dedicated to allowing anyone who wishes to discuss a book to have that opportunity without the chance for someone to spoil it for you.</p>
        <p>What to do: Create a profile, choose a book to discuss, enter the page number you are on, and chat!</p>
        <h2>That's all there is!</h2>
        <p>Now go enjoy discussion your favorite books without concern for spoilers!</p>
    </main>
    );
}
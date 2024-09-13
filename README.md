# startup
My primary repository

# Elevator Pitch:
Have you ever wanted to talk about a book that you really enjoy but nobody around you has read it or already knows the ending? Well fear not, for this application is here to help your creative mind! Book discuss is an application dedicated to connecting you with others who are at the same part of the book and therefore cannot spoil it but will have a genuine discussion with you. Especially useful for individuals who wish to create their own spinoff stories, such as authors and dungeon masters. The best part is that this application is dedicated to being spoiler free, so you can discuss away with others without anyone actually knowing the end and thus ruining the book. (Potentially can also work with tv shows).

# Design
<img src="Design_main_page+logo.jpg" alt="Main Page for Startup" width="600">
<img src="Design_book_page.jpg" alt= "Individual Book page for Startup" width="600">
<img src="Design_about_page.jpg" alt="About page for Startup" width="600">

# Key Features
 - Ability to connect to other users through a secure login
 - Ability to select the book/tv show to discuss
 - Display of already entered books and tv shows
 - Ability to set where user is at with chosen media
 - Results and chats are stored
 - Users are able to chat with one another
 - Ability for admin to moderate chats

# Technology Used
 - *HTML*: Uses HTML to build the application. Multiple HTML pages, one for login, one for the main page (where the books/shows are listed), one for a how-to page, and one for each book/show. Uses hyperlinks to move between pages.
 - *CSS*: Stylize screen to allow for different resolutions/screen sizes, adds color to denote different sections (ex. books vs shows). Uses contrast to make navigating the site easier.
 - *React*: Provides a login, already entered books/shows, conversations, user comments/where they are in the book/show, and use of React for routing. (I am unsure of the capabilities of React at this point to explain it further.)
 - *Service*: Backend service with endpoints for:  
        > Login  
        > Retrieving comments and profile stats  
        > Submitting responses  
        > Submitting books/shows  
 - *DB/Login*: Stores logins, comments, where in the book/show, registers new users, limits user options until logged in.
 - *WebSocket*: Sends user's replies and comments to other users in the same chat.
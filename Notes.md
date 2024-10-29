CS 260 Notes for the year

Simon looks fun
Ideas for my startup:
 - Frogger
 - Recipe Book (prices, time)
 - Monopoly
 - Book/TV show chat platform

Server Elastic IP address: 34.235.37.3

Ports are like doors (443 is a popular example).
Port 443 is the only way to get secure https traffic.
Caddy is the gateway, it routes traffic to the ports I want it to.
Port 80 is http access.
Port 22 is SSH

Website url: bookmarkedtheories.click

New Classroom: KMBL 230!!!!!!!!

git commit -am "Explanation"\n
^ is the command to commit, do between editing and git push\n
Remember to git pull even when you just pushed and no one else is editing.

https://codepen.io/abwilson2002/pen/jOjjzYz -> url for my HTML structure pen.

link element: How you connect other files

Div tag: adds a divider

#title and .grid: # is id . is class

Padding is within the border, margin is at the border

Yes a web certificate is used

a.b.c.com    click is top level domain, c is root domain, a and b are subdomain

javascript object = const myObject = {variable: value, etc.};

to change color of item with id "blank" is use a function, set a const with document.getElementById("blank"); and call the constant.style.color = "desired color";

If/else, while, and for aree just like C++. Switch is like if/else with a default as else.

paragraph p
ordered lists ol
unordered list ul
level heading h(whatever level is the number)

Async/await: try/catch is similar to python try/except. Finally is used for whatever comes after finishing.

Use cat to go into any non-file subdirectory (similar to cd)

Javascript function format: const functionName = (parameters) => {function code, has a return}

.createElement('html tag', null, "text", valueInText)

ReactDOM.render used to replace items in DOM (ex. ReactDOM.render(<p>Hello World</p>, document.querySelector("location in DOM")) replaces things in the location in DOM with Hello World)

React builds a copy of DOM, and edits the copy, then copies the changes to the original DOM.

From ex. in line 59:            (ReactDOM.render(tag+text, querySelector("location")))
    - ReactDOM is from a file that needs to be imported into the file   (also import React and ReactDOM)
        import React from "https://cdn.skypack.dev/react"
        import ReactDOM from "https://cdn.skypack.dev/react-dom"
    - render tells React to update the original DOM with the copy (see previous note)
    - querySelector selects items of that location as the target location
    - tag+text is what you are replacing in.

from previous note: tag+text can look like this (<Hello />)
with connected variable
    const Hello = () => {return <p>Hello world</p>}
    - include trigger in parenthesis to have the returned <p> have a variable (requires {} in both function trigger and when called inside function. Means it can be evaluated)


Use previous note to code heading and footer for each page

Destructuring (Javascript): When you pull one or more (but not all) parts of an object out of that object. Requires knowing the name to get the proper key (think C++ maps).

Javascript changeColor() {setColor (color === "red" ? "green" : "red");} if it is red, turn green, otherwise turn red.

vi is a good console command to see files


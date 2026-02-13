const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


/* Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

- a <p> with red text that says “Hey I’m red!”
- an <h3> with blue text that says “I’m a blue h3!”
- a <div> with a black border and pink background color with the following elements inside of it:
    - another <h1> that says “I’m in a div”
    - a <p> that says “ME TOO!”
    - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/


const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const head3 = document.createElement("h3");
head3.style.color = "blue";
head3.textContent = "I'm a blue h3!";

const newDiv = document.createElement("div");
newDiv.style.border = "1px solid black";
newDiv.style.backgroundColor = "pink";

const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

newDiv.appendChild(head1);
newDiv.appendChild(para2);

container.appendChild(para);
container.appendChild(head3);
container.appendChild(newDiv);
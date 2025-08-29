
01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
document.getElementById Selects one element by its id and returns a single element object (or null if not found).
document.getElementsByClassName Selects all elements with the given class and Returns a live HTMLCollection. Its like- Array but not an array.
document.querySelector Selects the first element matching a CSS selector and returns a single element (or null).
document.querySelectorAll Selects all elements matching a CSS selector and returns a NodeList.



02. How do you create and insert a new element into the DOM?

Answer:
First, Create an element using document.createElement(). Then, Set content or attributes using .textContent, .innerHTML, .setAttribute(), etc. Finally, Insert into the DOM using methods like .appendChild(), .append, etc.



03. What is Event Bubbling and how does it work?What is Event Bubbling and how does it work?

Answer:
Event bubbling means when an event is added on an element then, it first runs the event on that element, then go upward to its ancestors in the DOM. 
Example: If someone click on a <button> inside a <div>, the click event will run on the button first, then bubble up to the div, then body, then document.



04. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation is a technique where an event listener need to be attached to a parent element, instead of each child element. When a child is interacted with, the event bubbles up and can be caught at the parent. It works using event bubbling and event target.
It needs fewer event listeners, works for all child’s under the parent


05. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() prevents the default action of an event.
stopPropagation() stops the event from bubbling in the DOM.
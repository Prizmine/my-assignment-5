*Answer to the question number 1 :*
--------------------------------

getElementById can only find and return one element, because there can only be 1 and uniq id.

getElementsByClassName can find and return more than one element by there class name. This may looks like an array but actually it is not.

however the querySelector and the querySelectorAll is quite as same as getElementsByClassName. But querySelector finds and returns the first matched element and querySelectorAll finds and returns every matched element in a list.



*Answer to the question number 2 :*
--------------------------------

I always use **document.createElement("div")** to create a new element into the DOM

and I always ues **container.appendChild(newDiv)** to insert a new element into the DOM.



*Answer to the question number 3 :*
--------------------------------

Event Bubbling means a process where whenever a event happens into a child the reaction of thats event moves up to the parent elements, and continue to go up unless u stop it.

**how it works:**

When you trigger an event (like click) on a child element, it first happens on that element.

After the event runs on the child, it automatically propagates to the parent element, then the grandparent, and so on, all the way to the document root.



*Answer to the question number 4 :*
--------------------------------

Event Delegation is a technique in JavaScript where instead of adding an event listener to every child element, you add a single event listener to a parent element.

**Why is it useful?**

I don’t need a separate listener for each child element, and if new child elements are added later, the parent listener still works.



*Answer to the question number 5 :*
--------------------------------

**preventDefault()** Stops the default behavior of an element from happening, like Clicking a link normally opens a new page.It stops it, and Submitting a form normally refreshes the page. it also prevents that.

**stopPropagation()** Stops the event from going up to parent elements, like Clicking a button inside a div normally triggers click events on the div too, but it prevents that. However it does not stop the default behavior of the element.


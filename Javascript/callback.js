console.log("Callback function in js")

console.log("Start");

setTimeout(function () {
    console.log("I am taking some time")
}, 0)

function x(cb) {
    console.log("Print X")
    cb()
}

x(function y() {
    console.log("Print Y")
})

/* Or */

/* x(() => {
    console.log("Print Y")
}) */

let p1 = new Promise((Resolved, Rejected) => {
    Resolved("I am Resoolved")
    Rejected("I am Rejected")
})

p1.then((value) => {
    console.log(value)
})

console.log("End");

{
    `
⚡ Diagram(Mental Model)
 ┌───────────────────────────────┐
 │           Call Stack           │  ← runs sync code
 └───────────────────────────────┘
                 ⬇
 ┌───────────────────────────────┐
 │        Microtask Queue         │  ← Promises, async / await
 └───────────────────────────────┘
                 ⬇
 ┌───────────────────────────────┐
 │        Macrotask Queue         │  ← setTimeout, setInterval
 └───────────────────────────────┘
                 ⬇
    (Event Loop cycles)

Think of it like:
  1:-Call Stack = "What’s being executed right now".
  2:-Task Queues = "What’s waiting to be executed next".
  3:-Event Loop = "The manager that moves tasks from the queues to the stack when it’s empty".

⚡ Types of Queues
1:-Call Stack
   Runs normal synchronous code line by line.
   Example: console.log("Hi").

2:-Microtask Queue (High Priority 🚀)
   Contains Promises callbacks, async/await, .then(), .catch(), and .finally() MutationObservers.
   Runs right after the current stack finishes, before any setTimeout.

3:-Macrotask Queue (Lower Priority 🐢)
   Contains setTimeout, setInterval, setImmediate (Node.js), I/O callbacks.
   Runs after all microtasks are cleared.

⚡ Execution Flow
 Step:1:- Run all synchronous code in the Call Stack.
 Step:2:- When stack is empty → execute all microtasks (Promises).
 Step:3:- After microtasks → pick the next macrotask (like setTimeout) and execute.
 Step:3:- Repeat this cycle forever → this is the Event Loop.

 Step-by-step:
 #:-Start → immediately logged
 #:-setTimeout → goes to macrotask queue
 #:-Promise.then → goes to microtask queue
 #:-End → immediately logged
 #:-Call stack empty → run microtask first → Promise
 #:-Then run macrotask → Timeout

🌀 Node.js Event Loop Order
When Node.js runs, it follows this order on each iteration (tick) of the loop:
 1:-Synchronous code (top-level execution)
 2:-process.nextTick() queue (special high-priority queue)
 3:-Microtask queue (Promise.then, queueMicrotask)
 4:-Timers phase (setTimeout, setInterval)
 5:-I/O callbacks (like reading files, sockets, etc.)
 6:-Check phase (setImmediate)
 7:-Close callbacks (e.g., socket.on("close"))
`}


/* Event Listner:- 
    like
        (click – user clicks an element
        dblclick – user double-clicks
        mousedown – mouse button pressed
        mouseup – mouse button released
        mousemove – mouse moves over element
        mouseover – mouse enters an element
        mouseout – mouse leaves an element
        mouseenter – mouse enters element (doesn’t bubble)
        mouseleave – mouse leaves element (doesn’t bubble)
        contextmenu – right-click) 
*/

/* const eventListner = document.getElementById('clickMe').addEventListener('click',function xyz(){
    console.log("User Clicked on Button")
}) */

/* Or */
// Q: Calculate how much time button clicked (Most Ask interview Question)

/* 1st way:- Using Global variable */
/* const btn = document.getElementById('clickMe')
let count = 0
function pressBtn() {
    console.log("Button Pressed")
    ++count
    console.log("Button Clicked time:-", count)
}
btn.addEventListener('click', pressBtn)
console.log("btn:-", btn) */

/* other and Best way */
/* This is not the best way to count number of times button click beacuse it can be modify by another */
/* because it it outside so use 'closures' so wrap all your coode of Event Lisner inside function */

/* 2nd way:- Using Closures */
function attachEventListner (){
    let count = 0
    document.getElementById('clickMe').addEventListener('click',function xyz(){
        console.log("Button Pressed")
        ++count
        console.log("Count value:-",count)
    })
}

attachEventListner()


// Q:- Why do we need to remove eventListner
/* Ans:- EventListners are heavy, When I say it is heavy that means it takes memory. right so when ever you attach 
an eventListner it kind of form as closure so Even when the callstack is empty so it take memory and we dont when the user
click the button so removeEventLister when we are not using them and also let suppose there are thousands of eventListner
 are attached on screen like mouseHover, click , onScroll etc then our page can go slow because of these so many closures
 like sitting in the memory and consuming memory of all their scops and thse callback function hold those scope so generally good 
 practice is to free up show when you remove eventListner then all these varaibles which was held by this closures will be 
 garbage collector. */











/* setTimeout(() => {
    btn.removeEventListener('click', pressBtn)
    console.log("Event listener removed");
}, 5000) */
// We use removeEventListener when we want to stop listening to an event on an element. Essentially,
//  it’s used to detach a previously added event listener.

/* document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('clickMe');
    btn.addEventListener('click', () => {
        console.log("Button Clicked");
    });
}); */



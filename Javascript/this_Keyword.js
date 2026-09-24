"use strict"
console.log("'this' Keyword")

/* 'this' is a global scope */
// console.log(this) /* This will print window object with multiple module opr methods in inside Object of Window */
// 'this' it is globalObject window and it caN BE DIFFRENT in node js run time 

/* 'this' inside a function */
function x() {
    console.log("Inside function:-", this) /* here also showing window Object but it is not same from outside window */
    /* Note If "use strict" mode is active then the result and output show undefined output:- Inside function:- undefined */
    console.log(window.this) /* In Strict mode but if we call like console.log(window.this) then it will show again window object*/
}
// x()

/* Note:-
if the value of 'this' keyword is null or undefined also by default it is undefined in non-strict mode but js chasnge it quickly
to global object thats by you see while log the value of this keyword inside the function and it shows window Object
or
so 'this' keyword will replacey by javascript to globalObject only in non-strict mode
*/

/* 'this' keyword value depends on how the function called */

// x()  /* In Strict mode  Inside function:- undefined*/
// x()  /* In non-Strict mode  Inside function:- window Object*/
window.x()  /* If strict mode it will show undefinded */


/* 'this' keyword value inside object method */
// Note:- their is difference from method and function 
/* Method:- when we create a function inside object that is methode */
/* Function:- We use normally all function function() , fat Arrow function() */

let obj = {
    firstName: "Abhay",
    lastName: function () {
        console.log("inside Object Method:-", this)
        console.log("inside Object Method:-", this.firstName) /* This will print namer Abhay */
    }
}
// obj.lastName() /* inside Object Method:- {firstName: 'Abhay', lastName: ƒ} */
/* So here basically 'this' keyword show the result of 'this' is that object details */



/* call() apply() bind() methods (sharing or borrowing methods) */
/* call() */
let student1 = {
    name: "Abhay Dubey",
    printName: function (className, city) {
        // console.log("Without using this:-", name)  /* print nothingh */
        console.log("With using this:-", this.name, className, city)
        /* Output:-
        Without using this:- 
        With using this:- Abhay Dubey
         */
    }
}

let student2 = {
    name: "Sachine Shakya",
}

/* using call() */
student1.printName.call(student2, 'BTC', 'Sahar') /* output: With using this:- Sachine Shakya BTC Sahar */
/* using apply() */
student1.printName.apply(student2, ['BSC', 'Bidhuna']) /* output: With using this:- Sachine Shakya BSC Bidhuna */
/* using bind() */
const result = student1.printName.bind(student2, '12th', 'Auraiya')
result() /* output: With using this:- Sachine Shakya 12th Auraiya */




/* 'this' keyword inside arrow function ()=>{} */
/* Note: Arrow function do not have their own 'this' bindig
 they take the value of their encloseing laxical Environment */

let obj1 = {
    a: 20,
    b: () => {
        console.log(this) /* Here it is just behave (not really hapeen) like it is in the global Space and show window object */
    }
}

obj1.b()

let obj2 = {
    a: 20,
    b: function () {
        const y = () => {
            console.log("Arrow Function this:-", this)
            /* output :- Arrow Function this:- {a: 20, b: ƒ} becuse of it is "enclose Laxical context or Environment" */
        }
        y()
        // console.log(this) /* Here it is just behave (not really hapeen) like it is in the global Space and show window object */
    }
}

/*  Arrow function laxical environment is:
 {
        const y = () => {
            console.log("Arrow Function this:-",this)  
            // output :- Arrow Function this:- {a: 20, b: ƒ} becuse of it is "enclose Laxical context"
 }


 so it behaive like  that there is no arrow function 
 function () {
        const y = () => {
           console.log("Arrow  Function behaive like this:-",this)  
            output :- Arrow Function this:- {a: 20, b: ƒ} becuse of it is "enclose Laxical context"
        }
*/

obj2.b()


const person = {
    name: "Abhay",
    greet() {
        console.log("Hello", this.name);
    }
};

/* output: Hello  */

setTimeout(person.greet, 1000);


/* this is inside DOM */
 //<button onclick="alert(this)" >Click me to check 'this' value</button>
// <!-- output: [object HTMLButtonElement] -->
/* here this inside alert(this) refer to button  */

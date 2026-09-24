console.log("Async and Await:-")

async function getName() {
    /* TThis async function always return a Promise even if we return a String */
    return 'Hello Abhay'
}

const name = getName()
console.log(name)

/* Output:-
Promise {<fulfilled>: 'Hello Abhay'}
*/

/* or retrun Promise */
const pro = new Promise((ressolve, reject) => {
    ressolve("Hello Abhay, How are are.")
})

/* async function showMessage() {
    return pro
} */

// const message = showMessage()
// message.then(res=>console.log("res:-",res))  /* res:- Hello Abhay, How are are. this is without using await  */

async function showMessage() { /* using await keyword to handle Promise instead of .then */
    const value = await pro
}

// showMessage()

/* Diffrence between async await and .then to handle Promise */

const pro1 = new Promise((res, rej) => {
    setTimeout(() => res("Hello Javascript"), 5000)
})
const pro2 = new Promise((res, rej) => {
    setTimeout(() => res("Hello Javascript"), 10000)
})

/* using async and await to handle Promise */
async function gree1() {
    console.log("Hello")
    /* Here 'Hello' will print first and on next line wait to resolve promise and after promise resolve move to next line  */
    const val = await pro1
    console.log("Hello Abhay")
    console.log("Val:-", val)
}

// gree1() /* js Engine was waiting to promise to resolve and print line by line code together */

/* output:- Here both will print same time because async function return Promise whole code of Function
Hello Abhay
Val:- Hello Javascript
*/

/* using .then to handle Promise */
function greet1() {
    pro1.then(res => console.log(res))
    console.log("I will print First before Promise Print")
}
// greet1()

/* output:-  
I will print First before Promise Print
Hello Javascript
*/



/* Here we are call same promise two time */
async function gree2() {
    console.log("Hello DUbey")
    /* Here 'Hello' will print first and on next line wait to resolve promise and after promise resolve move to next line  */
    const val = await pro1
    console.log("Hello Abhay")
    console.log("Val:-", val)

    const val1 = await pro1
    console.log("Val1:-", val1)
    console.log("hello Bhai")

}

// gree2()

/* output:-
Hello DUbey
 Hello Abhay "This line will print first and move to next line and wait to resolve promise and then after promise resolve print all"
 Val:- Hello Javascript   "Same time print"
 Val1:- Hello Javascript  "Same time print"
 hello Bhai               "Same time print"
*/



/* with .then */
function hello() {
    console.log("Start")
    pro1.then(res => console.log('Res:-', res))
    console.log("Exit")
    pro1.then(res => console.log("next res:-", res))
    console.log("Final Exit")
}

// hello()

/* output:- here, start, Exit Final Exit Print Immediately
and Res:- Hello Javascript, next res:- Hello Javascript Print together after 1 sec because both use same promises
 Start
 Exit
 Final Exit
 Res:- Hello Javascript
 next res:- Hello Javascript
 */



/* use two diffrent Promise */
async function handlePromises() {
    console.log("Print Line 1")
    const p1 = await pro1
    console.log("Print Line 3")
    console.log("First Promise:-", p1)
    console.log("Print Line 5")
    const p2 = await pro2
    console.log("Print Line 7")
    console.log("Secand Promise:-", p2)
    console.log("Exit")
}

handlePromises()

/* output:-
Print Line 1  This will print Immediatly in first round

Print Line 3  This will Print after 5sec  together in secand round
First Promise:- Hello Javascript  This will Print after 5sec  together in secand round
Print Line 5  This will Print after 5sec together in secand round
 
Print Line 7  This will print after 10 sec in third round
Secand Promise:- Hello Javascript   This will print after 10 sec in third round
Exit   This will print after 10 sec in third round


Note:- And if we change time of P1 => 10Sec and P2 => 5 Sec then 
Print Line 1 This will print Immediatly in first round

Print Line 3  These will print after 10sec all together
First Promise:- Hello Javascript  These will print after 10sec all together resolve 10 sec along with first promise it also handle secand promise
Print Line 5  These will print after 10sec all together resolve 10 sec along with first promise it also handle secand promise 
Print Line 7  These will print after 10sec all together resolve 10 sec along with first promise it also handle secand promise
Secand Promise:- Hello Javascript   These will print after 10sec all together resolve 10 sec along with first promise it also handle secand promise
Exit   These will print after 10sec all together resolve 10 sec along with first promise it also handle secand promise
 */


const getGitProfileData = async (userName) => {
    try {
        const endPoint = `https://api.github.com/users/${userName}`
        const apiData = await fetch(endPoint) /* here both return Promise in fetch() */
        const jsonFormat = await apiData.json() /* here both return Promise in fetch() */
        console.log("JsonFormat is:-", jsonFormat)

    } catch (error) {
        console.error(error)
    }
}
getGitProfileData('abhay2767')
console.log("callApi:-",callApi)









/*Note:- Here what happen is js Engine does not wait to resolve Promise 1 it just appers when while it see their is await pro1
        It suspend the excution and handlePromises() move out to call Stack and now Call stack is Empty and then wait to resolve
        p1 then it again come in callback stack and start excution from where it left previously and same with await pro2 line will
        came and it repeat same again.
 */
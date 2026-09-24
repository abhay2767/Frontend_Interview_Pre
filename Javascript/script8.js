console.log("Hello Javascript")
/*Promise in js */

// const res = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log("res:-",res)

/* 1st way Async await */
/* async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log("res:-",await res)
} */

// getData()

/*  2nd way using .then .catch .finally */
/* fetch('https://jsonplaceholder.typicode.com/posts')
.then((result)=>{
console.log("result:",result)
})
.catch((error)=>{
    console.error("Error:-",error)
})
.finally(()=>{
    console.log("Finally COmplete Execution of Program")
}) */

/* create Promise */
// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
//     setTimeout(() => {
//         console.log("I am promised and I am fullfilled")
//         resolve("I am Resolved")
//         /* or */
//         // reject(new Error)  
//     }, 2000)

//     // reject("Error hai")  
// })

// console.log("promise:-",promise)
/* promise.then((value) => {
    console.log("value:-", value)
}), function (error) {
    console.log("error is:-", error)
}
    .catch((error) => {
        console.error("error:-", error)
    }) */


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved after 3 Secand")
    }, 3000)
})

p1.then((done) => {
    console.log("P1 promise is Resolved", done)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("I am rejected after 2 Secand")
        }, 2000)
    }) 
    return p2
}).then((result) => {
    console.log("p2 Promise is Rejected", result)
}).catch((error)=>{
console.log("P2 Catch error:-",error)
})
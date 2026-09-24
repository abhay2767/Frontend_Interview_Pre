console.log("Hello Javascript")
/* call(), apply(), bind() */
console.log("call(), apply(), bind() Method is javascript")

const name = {
    firstName: "Abhay",
    lastName: "Dubey",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

// name.fullName()

/* Call() methode*/
console.log("1:- call() method")
let person1 = {
    firstName: "Ramesh",
    lastName: "Kumar",
    /*  fullName: function(){
         console.log(`Full name is:- ${this.firstName} ${this.lastName}`)
     } */
}
let person2 = {
    firstName: "Abhay",
    lastName: "Dubey"
}

let fullName = function () {
    console.log(`Full name is:- ${this.firstName} ${this.lastName} it is print using call()`)
}

let fullNameWithHomeTown = function (hometown) {
    console.log(`Full name is:- ${this.firstName} ${this.lastName} and he is from ${hometown} it is print using call()`)
}
let fullNameWithHomeTownAndState = function (hometown, state) {
    console.log(`Full name is:- ${this.firstName} ${this.lastName} and he is from ${hometown}, ${state} it is print using call()`)
}

// person1.fullName.call(person2)  /* Here in call() it take reference of so here we pass person2 as first argument */
/* It is quite useful while we borrow function from other methods */
fullName.call(person1)
fullNameWithHomeTown.call(person1, "Sahar")
fullNameWithHomeTownAndState.call(person1, "Sahar", "Uttar Pradesh")

console.log("2: apply() method")
/* The only Diffrence between call() and apply() is that how we pass argument 
1:- call() :- we pass aargument seprate using ','
2:- apply() :- Here we pass argument in form of Array
 */
let fullNameWithHomeTownAndStateUsingApplyMethod = function (hometown, state) {
    console.log(`Full name is:- ${this.firstName} ${this.lastName} and he is from ${hometown}, ${state} it is print using apply()`)
}
fullNameWithHomeTownAndStateUsingApplyMethod.apply(person1, ["Sahar", "Uttar Pradesh"])

console.log("3:- bind() method")

let fullNameWithHomeTownAndStateUsingBind = function (hometown, state) {
    console.log(`Full name is:- ${this.firstName} ${this.lastName} and he is from ${hometown}, ${state} it is print using bind()`)
}
let printName = fullNameWithHomeTownAndStateUsingBind.bind(person1, "Sahar", "Uttar Pradesh")
console.log(printName)
printName()






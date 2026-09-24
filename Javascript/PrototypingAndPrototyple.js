console.log("Prototyping and Prototyple Inheritance")

const arr = [1, 2, 3, 4, 5]
const obj1 = {
    name: "Abhay Dubey",
    city: "Delhi",
    getInfo: function () {
        console.log(this.name + " from " + this.city)
    }
}
function fn() {

}

const obj2 = {
    name: "Sachine Shakya",
    // city: "Sahar Auraiya"
}

/* Never do this */
obj2.__proto__ = obj1 /* By this you can acces of obj1 methods from obj2 */

/* Output: console  write :- obj2.__proto__   It will now showing obj1 data from obj2

{name: 'Abhay Dubey', city: 'Delhi'}
city :  "Delhi"
name :  "Abhay Dubey" 
*/

/* output It has access the obj1 from obj2 first it check in main top obj2 is method or value avaible else check
obj2.__proto__ and if not found then check obj2.__proto__.__proto__ and this is go through this chain and this is
while prototype chain. so this is prototypal Inheritance it first check in thier main obj and found name but city 
not found then it goes through prototype  and check in obj1
 obj2.city
'Delhi'
obj2.getInfo
ƒ () {
        console.log(this.name + "from" + this.city)
    } 
        obj2.getInfo()
 Sachine Shakya from Delhi
         */


 Function.prototype.mybind = function(){
    console.log("hello Abhay")
 }

 function fun1 (){
    console.log("Fun 1")
 }

 function fun2 (){
    console.log("Fun 2")
 }

 /*  Here Function.prototype.mybind will be accessble for each fuction because we use mybind()
 fun2.mybind()
hello Abhay */

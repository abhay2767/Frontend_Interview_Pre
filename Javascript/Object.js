console.log("Objects method Operation:-")

/* Delete object Property */
const data = {
    name: "Abhay Dubey",
    address: {
        city: "Kanpur"
    },
    mobile: 8859022825,
    "Add Key Like This": "And This the Value"
}

console.log("Data:-", data) /* {name: 'Abhay Dubey', address: {…}, mobile: 8859022825},Add Key Like This: 'And This the Value' */
delete data.mobile
console.log("After delete mobile Data:-", data) /* {name: 'Abhay Dubey', address: {…},Add Key Like This: 'And This the Value'} */


/* Access key */
console.log(data['Add Key Like This']) /* output:-  And This the Value */

/* Add Dynamic value */
const Name = "name"
const value = "Abhay"
const mobile = "Mobile"
const number = 8859022825

const data1 = {
    address: "Kanpur",
    [Name]: value,
    [mobile]: number
}

console.log("data1:-", data1) /*{address: 'Kanpur', name: 'Abhay', Mobile: 8859022825} */

/* Access key using loop */
for (key in data1) {
    console.log("key is:-", key)
}

/* 
key is:- address
key is:- name
key is:- Mobile
 */

/* Access Val using loop */
for (key in data1) {
    console.log("value is:-", data1[key])
}
/* 
value is:- Kanpur
value is:- Abhay
value is:- 8859022825 */

/* Q:1 What will be the output if the key is same is Object */
const obj = {
    a: "one",
    b: "two",
    a: "three"
}
/* If the key is repeating or same then javascript consider last key */
console.log("obj:-", obj) /* {a: 'three', b: 'two'} */

/* Q:2 Craete a function multiPlyByTwo(obj) that multiply all numeric property value of nums by 2 */
const obj1 = {
    a: 100,
    b: 200,
    c: "Hello Abhay"
}

function multiPlyByTwo(obj) {
    for (key in obj) {
        // console.log("isNaN(key):-",isNaN(obj[key]))
        if (!isNaN(obj[key])) {
            obj[key] *= 2
        } else {
            console.log("key is:-", key)
        }
    }
}
multiPlyByTwo(obj1)

console.log("obj1:-", obj1) /* {a: 200, b: 400, c: 'Hello Abhay'} */

/* Q:3 What will be the output */
const a = {}
const b = { key: "b" }
const c = { key: "c" }

a[b] = 123,  /*  a["[object object]"] = 123  */
    a[c] = 456  /*  a["[object object]"] = 456 */ /* this will overwrite above line */

console.log(a[b]) /* output:- 456 */

/* Q: 4 JSON.stringify and JSON.parse */
/* Ans:-
JSON.stringify: Convert Object to string
JSON.parse: Convert Object to string
 */

const dataObj = {
    name: "Abhay",
    mobile: 8859022825
}

/* use case while we adding the value in localstorage then we have save it as string because directly saveing the object 
will show [object, object] in localstorage so thats by we use JSON.stringify to convert object to string and after that
we need that data back in object format we use JSON.parse() to convert back to object */
const str1 = JSON.stringify(dataObj)
console.log("str1:-",/* typeof  */str1) /* {"name":"Abhay","mobile":8859022825} */ /* typeof string */
localStorage.setItem("Value", str1)
const str2 = localStorage.getItem("Value")
console.log("str2:-", str2)
const convertBackToObj = JSON.parse(str2)
console.log("convertBackToObj:-",/* typeof */ convertBackToObj) /* {name: 'Abhay', mobile: 8859022825} */ /* typeof object */

/* Q:5 What will be the output [..."Abhay"] */
console.log([..."Abhay"]) /* ['A', 'b', 'h', 'a', 'y'] */

/* Q:6 What will be the output */
const obj2 = {
    name: "Abhay",
    city: "Kanpur",
    mobile: 8859022825
}
const str3 = JSON.stringify(obj2, ["name", "mobile"]) /* It will only convert name and mbile from object to string, ignore: city */
console.log("str3:-", str3) /* str3:- {"name":"Abhay","mobile":8859022825} */

/* Q:7 What will be the output */
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2 /* here 'this' keyword refer to shape object */
    },
    perrmeter: () => {
        return 2 * Math.PI * this.radius /* here 'this' will refer window object show this will be an Error */
    }
}

console.log("Diameter:-", shape.diameter()) /* Diameter:- 20 */
console.log("Perimeter:-", shape.perrmeter()) /* Perimeter:- NaN */

/* Q:8 Destructure object property */
const obj3 = {
    name: "Abhay",
    city: "Kanpur",
    address: {
        state: "Uttar Pradesh"
    }
}

const { name, city } = obj3
console.log("name:-", name)
console.log("city:-", city)
/* if name is already Declared above code then you can also initialize destructuring name: Myname */
const { name: Myname, city: Mycity, address: { state } /* Nesting destruture */ } = obj3
console.log("Myname:-", Myname)
console.log("Mycity:-", Mycity)
console.log("state:-", state)

/* Output:-
name:- Abhay
city:- Kanpur
Myname:- Abhay
Mycity:- Kanpur
Mycity:- Uttar Pradesh */


/* Q:9 What will be the output  */
function getItem(fruits, favfruits, ...arg) { /* Note: ...arg alway define in parameter at last  */
    return [...fruits, favfruits, ...arg]
}

console.log("Fruits:-", getItem(['mango', 'appble'], 'banana', 'pear', 'orange'))  /* ['mango', 'appble', 'banana', 'pear', 'orange'] */

/* Q:10 What will be the output */
let e = { greeting: "hey" }
let d;
d = e;
/* here we are provide all value here we just provide the reference of e here so we change original e or d
 then it reflect in both d and e also */
e.greeting = "Hello"
console.log("d:-", d) /* {greeting: 'Hello'} */

/* Q:11 What will be the output */
console.log({ a: 10 } == { a: 10 })
/* false becuase here both object have diffrent memory location and object are only equal when their references are equal or same
 */
// console.log({a:100} === {a:100}) /* This condition will always return 'false' since JavaScript compares objects by reference, not value. */


/* Q:11 What will be the output */
let person = { name: "Abhay" }
const members = [person] /* here person is set at name of 0 in members[0:person] */
person = null
// person.name = null /* but here it will affect the name this is show null */
console.log(members)
/* [{…}]
0 : {name: 'Abhay'}
length : 1 
*/

/* Q:12 What will be the output */
const value1 = {
    number: 10
}

const multiply = (x = { ...value1 }) => { /* this will be defailt value x = { ...value1 } if no value pass then use it directly value1 */
    console.log((x.number *= 2)) /* here after clone object it is changing the original value of object from 10 to 20 */
}

multiply() /* 20 */
multiply() /* 20 */
multiply(value1) /* 20 */ /* here it modified the value above original array to 10 to 20 */
multiply(value1) /* 40 */ /* here 20*2 comes 40 */

/* Q:13 What will be the output */
function changeAgeAndReference(person) {
    person.age = 25 /* // (1) modifies original object */
    
    person = { /* // (2) reassigns parameter to a new object */
        name: "Abhay",
        age: 50
    }
    return person /*  // (3) returns the new object */
}

const personObj1 = {
    name:"Alex",
    age:30
}

const personObj2 = changeAgeAndReference(personObj1)

console.log("personObj1:-",personObj1) /* personObj1:- {name: 'Alex', age: 25} */
console.log("personObj2:-",personObj2)  /* personObj2:- {name: 'Abhay', age: 50} */
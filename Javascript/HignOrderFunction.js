console.log("High order Function")
// Functions are first class citizen in Javascript

function x() {
    console.log('I am Callback Function')
}

function y(x) {
    console.log("I am High Order Function")
}

y()

/* Q:- Calculate Area of Circle */
const radius = [3, 1, 2, 4]

function CalculateArea(radius) {
    const output = []
    radius.forEach((val) => {
        output.push(Math.PI * val * val)
    })
    return output;
}


console.log("Area of Circle:-", CalculateArea(radius))

/* Q:- circumference of circle of Same Data */

const circumferenceCalculate = (radius) => {
    console.log("Radius:-", radius)
    const outPut = [];
    for (let i = 0; i < radius.length; i++) {
        outPut.push(2 * Math.PI * radius[i] * radius[i])
    }
    return outPut
}

console.log("Circumference of Circle:-", circumferenceCalculate(radius))

/* Q:- Diameter of Circle for same Data */

const calculateDiameter = (radius) => {
    const output = []
    radius.map((item) => {
        output.push(2 * item)
    })
    return output;
}

console.log("Diameter of Circle:-", calculateDiameter(radius))

/* Optimize code and DRY (Do Not Repeat Pattern) */
const Area = (r) => { return Math.PI * r * r }
const Circumference = (r) => { return 2 * Math.PI * r * r }
const Diameter = (r) => { return 2 * r }

/* const calculate = (rad, logic) => {
    const output = []
    rad.forEach((r) => {
        output.push(logic(r))
    })
    return output
} */

// console.log("Area of Circle Optimized Way:-", calculate(radius, Area))
// console.log("Circumference of Circle Optimized Way:-", calculate(radius, Circumference))
// console.log("Diameter of Circle Optimized Way:-", calculate(radius, Diameter))

/* Another way to define this Function using Array.prototype */
/* Array.prototype.calculate = (rad, logic) => {
    const output = []
    rad.forEach((r) => {
        output.push(logic(r))
    })
    return output
}
console.log("Area of Circle Optimized Way:-", radius.calculate(radius, Area)) */

/* One more way */
Array.prototype.calculate = (logic) => {
    const output = []
    /*  rad.forEach((r) => {
         output.push(logic(r))
     }) */
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}
console.log("Area of Circle Optimized Way:-", radius.calculate(Area))

/* Another way to calculate Area */
console.log(radius.map(Area))




console.log("Hello Javascript")
/*Generators in js */
console.log("1:- Generators in javascript")

function* numbersGenerate() {
    let i = 0

    yield 1
    yield 2
    yield 3
    yield 4

}

const gen = numbersGenerate();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


/* output
{value: 1, done: false}
{value: 2, done: false}
{value: 3, done: false}
{value: 4, done: false}
{value: undefined, done: true}
 */


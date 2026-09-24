console.log("Block Main Thread for 10 sec to test SetTimeout")

console.log("Start")

setTimeout(function cb() {
    console.log("Callback function is now called")
}, 5000) /* 5 Secand */

console.log("End")

/* Block and run the 10 Sec to see the behaviour of code and setTimeout */
let startDate = new Date().getTime()
console.log("startDate:-", startDate)
let endDate = startDate

/* while (endDate < startDate + 10000) {
    endDate = new Date().getTime()
} */

console.log("endDate:-", endDate)
console.log("While loop Expires")


/* Output:-
Block Main Thread for 10 sec to test SetTimeout
 Start
 End
 startDate:- 1758792629380
 endDate:- 1758792639380
 While loop Expires
 Callback function is now called
 */


 /* If the Time is 0 does not care it print immediatly same process will fallow it code to callback Queue */
 setTimeout(function test(){
    console.log("How Much i will take")
 },0)
 
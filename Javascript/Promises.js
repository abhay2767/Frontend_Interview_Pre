console.log("Promise:-")

const GithubDetails = "https://api.github.com/users/abhay2767"

const user = fetch(GithubDetails)

// console.log(user)

/* user.then(function (data) {
    console.log("data:-", data)
}) */

const cart = ['Pants', 'Shirts', 'Jeans']
// const cart = ''


/* Promise chaing to resolve issue of Inversion of Control */
/* createOrder(cart)
    .then(function (orderId) {
        return processToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function () {
        updateWallet()
    }) */

/* or using Fat Arrow FUnction for more readability */
createOrder(cart) /* Here you are attaching callback() function not passing like callback hell  */
    .then(orderId => processToPayment())
    .catch(err => console.error("Error:", err.message)) /* This will only show Error from  processToPayment() and continue Exxecution*/
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(summaryStatus => updateWallet(summaryStatus))
    .catch(err => console.error("Error:", err.message)); /* This is a Generic catch which handle all above function Error and Stop Execution */

/* output:- if we dont pass orderId in processToPayment() this will show error and continue the code execute Ahead
 but then is also show Error from last Catch because it will not found PaymentInfo from processToPayment().
Promises.js:32 Error: OrderId not Found
overrideMethod @ hook.js:608
(anonymous) @ Promises.js:32
Promise.catch
(anonymous) @ Promises.js:32Understand this error
Promises.js:35 Error: PaymentInfo not Found
*/

/* Create Own Promise */ 

function createOrder(cart) {
    const pro = new Promise(function (res, rej) {
        if (!checkCart(cart)) {
            const err = new Error("Cart is Empty")
            rej(err)
        }

        /*  if (orderId) {
             setTimeout(function (orderId) {
                 res(orderId)
             }, 5000)
         }  
            This will send orderId: 'undefined'
             Inside that function, you wrote function (orderId) { res(orderId) }.
            ❌ But this orderId is a parameter of the inner function, not the orderId you defined above.
            Since setTimeout doesn’t pass an orderId argument, it will be undefined. */

        const orderId = "1234556789";
        setTimeout(() => res(orderId), 5000);
    })

    return pro;
}

function createOrder(cart) {
    return new Promise((res, rej) => {
        if (!checkCart(cart)) {
            return rej(new Error("Cart is Empty"));
        }

        const orderId = "1234556789";
        if (orderId) {
            setTimeout(() => {
                res(orderId); // use the orderId from outer scope
            }, 2000);
        }
    });
}


function checkCart(value) {
    // console.log("Cart value:-",value)
    return value ? true : false
}

function processToPayment(val) {
    const paymentPromise = new Promise((res, rej) => {
        if (val) {
            const paymentId = 'shfuisjgfu'
            setTimeout(() => res(paymentId), 2000)
        }
        else {
            const error = new Error("OrderId not Found")
            rej(error)
        }
    })
    return paymentPromise
}

function showOrderSummary(val) {
    const summaryPromise = new Promise((res, rej) => {
        if (val) {
            const status = 'Success'
            setTimeout(() => res(status), 2000)
        }
        else {
            const error = new Error("PaymentInfo not Found")
            rej(error)
        }
    })
    return summaryPromise
}

function updateWallet(val) {
    const walletPromise = new Promise((res, rej) => {
        if (val) {
            const Balance = '$1000'
            setTimeout(() => res(console.log("Updated Balance is:-", Balance)), 2000)
        }
        else {
            const error = new Error("Unable to update Balance")
            rej(error)
        }
    })
    return walletPromise
}

/* output:-
Order Id:- 1234556789
Payment Info:- jsdfhjds
Value updated of Wallet is $1000
 */
console.log(`
    Promise APi:-
    1: Promise.all([P1,p2... so on])
    2: Promise.allSettled([P1,p2... so on])
    3: Promise.race([P1,p2... so on])
    4: Promise.any([P1,p2... so on])
    `)

const p1 = new Promise((res, rej) => {
    // setTimeout(() => res("P1 Resolved"), 3000)
    setTimeout(()=>rej("P1 Rejected"),3000)
})

const p2 = new Promise((res, rej) => {
    // setTimeout(() => res("P2 Resolved"), 2000)
    setTimeout(()=>rej("P2 Rejected"),3000)
})

// const p3 = fetch('https://api.github.com/')
const p3 = new Promise((res, rej) => {
    // setTimeout(() => res("P3 Resolved"), 1000)
    setTimeout(()=>rej("P3 Rejected"),3000)
})

/* Promise.all() */
Promise.all([p1, p2, p3])
    .then(res => console.log("Promise.all()  Result is:-", res))
    .catch(err => console.error("Promise.all()  Error is:-", err))

/* Output:-
Result is:- (3) ['P1 Resolved', 'P2 Resolved', Response]

if any Promise got reject
 Promise.all()  Error is:- P1 Rejected
*/

/* Promise.allSettled() */
Promise.allSettled([p1, p2, p3])
    .then(res => console.log("Promise.allSettled() Result is:-", res))
    .catch(err => console.error("Promise.allSettled() Error is:-", err))

/* Output:-
Result is:- 
(3) [{…}, {…}, {…}]
0 : {status: 'fulfilled', value: 'P1 Resolved'}
1 : {status: 'fulfilled', value: 'P2 Resolved'}
2 : {status: 'fulfilled', value: Response}

if all got Rejected
Promise.allSettled() Result is:- 
(3) [{…}, {…}, {…}]
0 : {status: 'rejected', reason: 'P1 Rejected'}
1 : {status: 'rejected', reason: 'P2 Rejected'}
2 : {status: 'rejected', reason: 'P3 Rejected'}
length : 3
*/

/* Promise.race() */
Promise.race([p1, p2, p3])
    .then(res => console.log("Promise.race() Result is:-", res))
    .catch(err => console.error("Promise.race() Error is:-", err))

/* Output:-
Promise.race() Result is:- Response {type: 'cors', url: 'https://api.github.com/', redirected: false, status: 200, ok: true, …}

If Promise got rejected 
 Promise.race() Error is:- P1 Rejected
*/

/* Promise.any() */
Promise.any([p1, p2, p3])
    .then(res => console.log("Promise.any() Result is:-", res))
    .catch(err => console.error("Promise.any() Error is:-", err, err.errors))

/* Output:-
Promise.any() Result is:- P3 Resolved

If all Promise Got Reject:-
Promise.any() Error is:- AggregateError: All promises were rejected 
(3) ['P1 Rejected', 'P2 Rejected', 'P3 Rejected']
0 : "P1 Rejected"
1 : "P2 Rejected"
2 : "P3 Rejected"
length : 3
*/


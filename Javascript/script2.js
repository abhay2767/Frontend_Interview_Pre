console.log("Hello Javascript")
/* Debouncing and throttling in js */
console.log("1:- Debouncing")

function debounce(fun, delay) {
    let timerId;
    return function (...args) { /* User can pass anythingh ...args argument */
        clearTimeout(timerId) /* Clear the last call */
        /* Now we start new timer using setTimeout and it become new timerId*/
        timerId = setTimeout(() => {
            fun(...args)
        }, delay)
    }
}

const search = (query) => {
    console.log("user is searching for:-", query)
}

const searchWithDebounce = debounce(search, 100) /* 100 milisec delay */
// searchWithDebounce('ha')
// searchWithDebounce('har')
// searchWithDebounce('hard')
// searchWithDebounce('hard j')
// searchWithDebounce('hard js')
// searchWithDebounce('hard js for Interview ok hai ')
// searchWithDebounce('hello abhay i am looking for React native Developer')

console.log("2:- Throttling")

function throttle(fun, delay) {
    let lastCallAt = 0
    return function (...args) {
        const now = Date.now()
        if (now - lastCallAt < delay){
            return ;
        }
        lastCallAt = now
        return fun(...args)
    }
}

const sendMessage = (msg) => {
    console.log("User message is:-", msg)
}

const messageSendWithSlowMode = throttle(sendMessage, 1000)
messageSendWithSlowMode('hii')
messageSendWithSlowMode('sir how are you')
messageSendWithSlowMode('i am Abhay Dubey')
messageSendWithSlowMode('ok send now')
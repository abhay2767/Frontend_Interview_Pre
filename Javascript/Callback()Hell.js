console.log("1:- Callback() Hell:-")
let api; /* Suppose it is Api Utils */
const cart = ['Shirt', 'Pants', 'Jeans']

api.createOrder(cart,function(){
    api.processPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet(function(){
                api.clearCard(function(){
                    console.log("Cart is Clear and and navigate to Home Screen")
                })
            })
        })
    })
})

/* Show this is known as Callback hell here we are call another and another function insede parent function and so on keep going */
/* Show this is also  known as Pyramid of doom because the same structure it following, growing Horizontally instaed Vertically */
 
console.log("2:- Inversion of Control:-")

api.createOrder(cart,function(){ /* this will create order */
    api.processPayment(function(){ /* this will process payment and inside function() callback we give it to craeteOrderApi*/
       /* Here we are call our function back inside this callback so this is risky to call createOrder() inside this callback */
       /* Means here let suppose any api shows bug and throw Error then whole function not work */
    })
})
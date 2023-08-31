// how promised call
// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// 3 states  1. resolve , 2. reject  3. pending 



let promise = new Promise(function(resolve,reject){

    const  x = "shubham"
    const y = "shubham"

    if (x == y) {
        resolve()
    }
    else 
    {
        reject
    }
})
promise.then(function(){
    console.log("promise made")
}).catch(function(){
    console.log("promie not made")
})
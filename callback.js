
// when you call a function inside another fun as an arg that is nothih but a callback fun 

function test (e){
    var a = 101 ; 
    e(a)
}

test(a => {
    console.log("function"  +a)
})
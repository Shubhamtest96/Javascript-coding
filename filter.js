//   const fruits = [
//     { name : "mango"  , season : "winter"}, 
//     { name : "banana"  , season : "all"}, 
//     { name : "kela"  , season : "winter"}
//   ]

//   const res = fruits.filter(function(seasonable){

//     return seasonable.type === "all"

//   })

//   console.log(res)



  const names = [
    {name : "shubham"  , age :"26" , type : "cool"}, 
    {name : "jishu"  , age: "23"  , type : "hot"},
    {name : "fote" , age: "33" , type : "normal"}
  ]

  const result = names.filter(function(foto){
    return foto.type === 'normal'
  })

  console.log(result)
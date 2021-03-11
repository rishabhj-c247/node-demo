let time = setInterval(fun=>{
    console.log("I am in set Interval")
},3000)

setTimeout(fun =>{
    console.log("I am set TimeOut")
},2000)

clearTimeout(time,12000)
console.log("Try this")
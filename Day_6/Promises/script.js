// Call Stack queue , Microtasking queue (Higher priority) , call back queue (Low priority Queue)
// Inversion of control is when the  calling control of one function  is transferred to another function
// Why promises are used


// Js visualizer 9000   website to visualiaze working of JS



// Firstly all the lines will execute then set timeout waiting in call back queue will get executed

// console.log("start")
// setTimeout(()=>{console.log("Timeout")},0)
// console.log("start")
// console.log("start")







// setTimeout(()=>{
//     console.log("Timeout")
// },20000)
// console.log("start")
// setTimeout(()=>{
//     console.log("Timeout")
// },10000)
// console.log("start")
// console.log("start")






// const p = new Promise( (resolve,reject) => {
//     if(true){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// console.log(p);




// const pr= new Promise((x,y)=>{
//     if(true) y();
//     else x();
// })

// console.log(pr)



// const p = new Promise( (resolve,reject) => {
//     setTimeout(()=>{
//         reject("Byy");resolve("Jiii")
//     },1000)
// });

// p.then((res)=>console.log(res))
// .catch((rej)=>{console.log(rej,rej)})






// setTimeout(()=>{console.log("First")},0)

// const p = new Promise((x,y)=>{
//     setTimeout(()=>{x("Second")},0)
// })

// setTimeout(()=>{console.log("Third")},0)
// p.then((res)=>console.log(res))



setTimeout(function abc(){
    console.log("one")
},0)

const p = new Promise((x,y)=>{
    setTimeout(()=>{x("Done")},0)
})

p.then(function b(){
    console.log("Promise completed",res)
})

setTimeout(function xyz(){
    console.log("two")
},0)


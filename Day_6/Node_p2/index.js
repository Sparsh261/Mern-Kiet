// let figlet = require('figlet')

// figlet(
//     'Sparsh Chauhan !',
//     (err,data) => {console.log(data);}
// )





// fetch("https://apii.github.com/users/sparsh261")
//     .then((res)=>{
//         return res.json()
//     })
//     .then(
//         (data) => console.log(data)
//     )
//     .catch(er => console.log('Error occured'))






// async function getApi(){
//     const pr = await fetch('https://api.github.com/users/sparsh261');
//     console.log("tryy")
//     const data = await  pr.json()
//     console.log(data);
//     console.log("tryy")
// }

// getApi();






// console.log("Start")

// async function call(){

//     const pr = new Promise((res,rej) => {
//         console.log("Promise 1");
//         setTimeout(()=>{
//             console.log("Tieout 1");
//         },10000)
//     })

//     console.log("Promise Ended");
    
//     const pr2 = new Promise((res,rej) => {
//         console.log("Promise 2");
//         setTimeout(()=>{
//             console.log("Tieout 2");
//         },10000)
//     })
    
//     console.log("promise 1 ended");


// }

// call()






const os = require("os");
console.log(os.cpus().length)
// If we make an object constant then its value of keys can be changed but whole object cant be changed. If we ake object by let then we can do this.

// Array or objects are dy default both objects. 

// Array.isArray is used to chk if a variable is array or not.

// for each loop givees elements and for in loop gives indeces

// for each work for array but not objects wwhile for in works for both












// Both ways are diferent not same . Do not use new String method.

// let a = new String("Helo")
// let b = "Helo";
// console.log(a)
// console.log(b)

// if(a==b) console.log("1Yes")
// else console.log("1No")

// if(a===b) console.log("2Yes")
// else console.log("2No")





// let obj = {
//     1 : "Sparsh",
//     2 : "Ram"
// }
// console.log(obj)
// document.write(JSON.stringify(obj));




// let obj = {
//         1 : "Sparsh",
//         2 : "Ram"
//     }

// obj = {
//     1 : "Sparsh",
//     2 : "Ram"
// }

// console.log(obj)




// let obj = {
//     1 : "Sparsh",
//     2 : "Ram"
// }
// obj.age = 5
// console.log(obj)




// const ar = [1,2,3];
// // ar[10] = 50            
// ar.push(5)
// ar.pop()
// console.log(ar)
// console.log(typeof(ar))
// console.log(Array.isArray(ar))




// const ar = [1,2,3];
// const obj = {1:10,2:23}

// console.log(typeof(ar))
// console.log(typeof(obj))
// console.log(Array.isArray(ar))
// console.log(Array.isArray(obj))




// console.log(typeof(null))
// console.log(typeof(undefined))




// function chkObject(x){
//     if(Array.isArray(x)) console.log("Not object")
//     else if(typeof(x) == "object") console.log("Object")
//     else console.log(" Not Object")
// }
// chkObject([1,2,3])
// chkObject({1:3})
// chkObject(1)
// chkObject(null)
// chkObject(undefined)




// const ar = [12,32,55,"6456", {1:"Nae"}]
// const obj = {12:32, 55:6456, 3:{10:12}}

// for(let i of ar) console.log(i)
// // for(let i of obj) console.log(i)

// for(let i in ar) console.log(i)
// for(let i in obj) console.log(i)





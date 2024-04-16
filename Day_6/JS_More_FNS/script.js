






// const arr = [10,20,50]

// arr.forEach((a)=>console.log(a))

// const ans = arr.forEach((a)=>console.log(a))   // forEach returns nothiing
// const ans = arr.map((a)=>console.log(a))
// const ans = arr.map((a)=>{return a*10})
// const ans = arr.map(a=>a*10)

// console.log(ans)




// const arr = [11.2, 15.485, 5.84]

// const arr2 = arr.map(a=>Math.floor(a))
// const arr2 = arr.map(a=>parseInt(a))

// console.log(arr2)





// const ar = [10,22,25]

// const ans = ar.filter((a)=>{
//     if(a>20) return false
//     else return true
// })

// console.log(ar)
// console.log(ans)







// const ar = ['Delhi', 'Mumbai','Chenna', 'Kolkata', 'India', 'Russia']

// // const ans = ar.filter((a)=>{
// //     for(let i = 0; i < a.length; i++){
// //         if(a.charAt(i) == 'i' || a.charAt(i) == 'I') return true
// //     }
// // })

// const ans = ar.filter((a)=>{
//     if(a.includes('i') || a.includes('I')) return true
//     else return false
// })

// console.log(ans)





// const arr = [
//     "Delhi,India", "Mumbai,india","Bihar,INDIA",
//     "Beijing,China","Shanghai,China",
//     "Washintion,USA","Texas,USA"
// ]

// const ans = arr.filter((a)=>{
//     const ns = a.toLowerCase()
//     if(ns.includes('india')) return true
//     else return false
// })


// const ans = arr.filter(
//     a => a.toLowerCase().includes('india')
// )

// console.log(ans)








// const arr = [40,30,20,10]

// const ans = arr.reduce((a,b,c,d)=>{
//     console.log(a,b,c,d)
//     return a+b;    
// });
// console.log(ans)



const arr = ['ram','shyam','kam','zald']

const ans = arr.reduce((a,b,c,d)=>{
    console.log(a,b,c,d)
    return a+b;    
});
console.log(ans)







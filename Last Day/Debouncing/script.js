// let timeout;

// const input = document.getElementById("search-box");



// function useDebounce(fn,time){
//     return function(){
//         clearTimeout(timeout);
//         timeout = setTimeout(fn,time);
//     }
// }

// const debounncedProducts = useDebounce(getSuggestions,1000);

// async function getSuggestions(text){
//     const res = await fetch(`https://dumyjson.com/products/products?search=${text}` );
//     const data = await res.json();
//     console.log(data);
// }


//     input.addEventListener('keyup',(e)=>{
//         debounncedProducts(e.target.value);
//     })








// Implement a fun to add numbers
// const add = (...args)=>{
//     let sum = 0;
//     console.log(args)
//    args.forEach(i => {
//     sum += i;
//    });
//    console.log(sum)
// }

// add();
// add(1);
// add(1,2);
// add(1,2,3);
// add(1,2,3,4);






const jow = {
    id:"1",
    name:"Jon",
    courses:[
        'c++','web'
    ]
}

console.log(jow)

const p = {...jow};
const r = jow;
console.log(jow)

p.name = "Roy";

console.log(r)
console.log(jow)
console.log(p)

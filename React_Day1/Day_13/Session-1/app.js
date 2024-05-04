console.log("Hello world")

// const parent = document.getElementById('root');
// // parent.innerHTML = `<h1>Hello from Dom</h1>
// //                         <ul>
// //                             <li>item1</li>
// //                         </ul>`

// const heading = document.createElement('h1');
// heading.innerText = "Hello from create Element"
// parent.appendChild(heading)
// const list = document.createElement('ul');
// const item2 = document.createElement('li');
// const item1 = document.createElement('li');
// item1.innerText = "Banana"
// item2.innerText = "Banana"
// list.appendChild(item1)
// list.appendChild(item2)
// parent.appendChild(list)

// console.log(React)







// Adding list with react

// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent)  // It is the link between root of html page and the root of virtual dom of react

// const heading = React.createElement('h1', {}, "Hello from React")
// // console.log(heading)

// const listitem1 = React.createElement('li', { key:'li1', 
//                                                 className:'li1', 
//                                                 name:"Sparsh", 
//                                                 style:{
//                                                         backgroundColor:'red'
//                                                     }
//                                             }, "Banana");

// const listitem2 = React.createElement('li', {key:'li2'}, "Apple");

// const list = React.createElement('ul', {}, [listitem1, listitem2]);

// // root.render(heading)
// root.render(list)







const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent)  // It is the link between root of html page and the root of virtual dom of react
// const heading = React.createElement('h1', {}, "Hello from React")

const str = "Hello from React";

const heading = <h1>{str}</h1>
const l1 = <li style={{backgroundColor:"red"}} > Apple </li>
const l2 = <li> Banana </li>

// const list = <ul>
//                 {l1}{l2}
//             </ul>

const arr = [l1,l2]
const list = <ul>
                {
                    arr.map(a=>{return a})
                }
            </ul>
root.render(list)

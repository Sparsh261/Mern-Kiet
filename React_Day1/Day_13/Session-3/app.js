const React = require('react')
const ReactDOM = require('react-dom/client')
// import ReactDOM from 'react-dom/client';
// import React from 'react';


import Homepage from './src/pages/homepage/homepage'


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// const heading = React.createElement('h1', {}, "Hello from react")

// React Element
// const heading = <h1>Hello from React</h1>



// const heading = ()=>{
//     return <h1>Hello World</h1>
// }

// root.render(heading());



// const Heading = ()=>{
//     return <h1>Hello</h1>
// }

// root.render(<Heading/>);

// console.log(Heading())





const obj = {
    title: "Watch",
    price: "42.99"
}

const arr = [
    {
        title: "Laptop",
        price: 500
    },
    {
        title: "Watch",
        price: 400
    },
    {
        title: "Clock",
        price: 450
    },
    {
        title: "Bike",
        price: 200
    }
]

// const App = () => {
//     const data = arr.map(elem => {
//         return (
//             <Card key={elem.title} title={elem.title} price={elem.price} />
//         )
//     })
//     return (<div>
//         <h1>Hello there!</h1>
//         {data}
//     </div>
//     )
// }




const App = () => {
    
    return (
        <Homepage/>
    )
}


root.render(<App />)
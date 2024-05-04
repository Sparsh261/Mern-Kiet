// const ReactDOM = require('react-dom/client')
import ReactDOM from 'react-dom/client';
import React from 'react';

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// const heading = <h1>Hello from React</h1>
const heading = React.createElement('h1', {}, "Hello from react")

root.render(heading);

import React from 'react';
import ReactDOM from 'react-dom';

const el = <h1>Hello World</h1>
console.log(el)

//const el = React.createElement('h1', null, 'Hello world!!')

ReactDOM.render(el, document.getElementById('root'));
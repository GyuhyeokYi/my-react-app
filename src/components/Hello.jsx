// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = (
//     <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleString()}.</h2>
//     </div>
// );
// ReactDOM.render(element, document.getElementById('root'));

function Hello() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleString()}.</h2>
        </div>
    );
}

export default Hello;
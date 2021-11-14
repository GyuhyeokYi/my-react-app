// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Clock from './components/Clock';

// const hello = Hello();

ReactDOM.render((
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
), document.getElementById('root'));

function tick() {
  const hello = Hello();
  ReactDOM.render(hello, document.getElementById('root'));
}

// setInterval(tick, 1000);

const element = <Welcome name="Sara" />

ReactDOM.render(element, document.getElementById('page'));

function NameList() {
  return (
    <div>
      <Welcome name="Sara"/>
      <Welcome name="Cahal"/>
      <Welcome name="Edite"/>
    </div>
  )
}

ReactDOM.render(<NameList/>, document.getElementById('page'));

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)



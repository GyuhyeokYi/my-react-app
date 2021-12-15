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
import Toggle from './components/Toggle';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl';
import Page from './components/Page';
import NameForm from './components/NameForm';
import FlavorForm from './components/FlavorForm';
import Reservation from './components/Reservation';
import Calculator from './components/Calculator';
import Calculator2 from './components/Calculator2';
import SignUpDialog from './components/SignUpDialog';
import FilterableProductTable from './components/ui-test/FilterableProductTable';
import MyComponent from './components/bundle-test/MyComponent';

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

function App() {
  return (
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
      <Toggle/>
    </div>
  );
}

ReactDOM.render(
  <App/>
  , document.getElementById('root')
);

ReactDOM.render(
  <Greeting isLoggedIn={false}/>
  , document.getElementById('root')
);

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

// const numbers = Array.from(new Array(5), (x, i) => i + 1);//[...new Array(5).keys()]; //[1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => 
//   <li>{number}</li>
// );

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('list')
// );
function ListItem(props) {
  const value = props.value;
  return (
    <li>{value}</li>
  )
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number}/>
  );

  return (
    <ul>{listItems}</ul>
  )
}

const numbers2 = Array.from(new Array(5), (x, i) => i + 1);

ReactDOM.render(
  <NumberList numbers={numbers2} />,
  document.getElementById('list')
);

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}


const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('list')
);

ReactDOM.render(
  <NameForm />,
  document.getElementById('list')
);

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('list')
);

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);

ReactDOM.render(
  <input value="hi"/>,
  document.getElementById('root')
);

setTimeout(() => 
ReactDOM.render(<input value={null} />, document.getElementById('root')), 2000)

ReactDOM.render(
  <Calculator />,
  document.getElementById('calc')
)

ReactDOM.render(
  <Calculator2 />,
  document.getElementById('calc')
)

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('dialog')
)

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('table')
)

ReactDOM.render(
  <MyComponent />,
  document.getElementById('bundle')
)
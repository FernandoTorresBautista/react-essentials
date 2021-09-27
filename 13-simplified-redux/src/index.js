import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

//actions
const increment = (value) => {
  return {type:'INCREMENT'}
}
const decrement = (value) => {
  return {type:'DECREMENT'}
}
//reducers
const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'INCREMENT':
      return state - action.payload;
    default:
      return state;
  }
} 
// Create a store
let store = createStore(counterReducer)
// display
store.subscribe(()=>{
  console.log(store.getState());
})
//dispatch the action 
store.dispatch(increment(5));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

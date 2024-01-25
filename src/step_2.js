//продовження роботи  с redux № 2

import {legacy_createStore as  createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';


const store = createStore(reducer);
const {getState, subscribe, dispatch } = store;

const update = () => {
   document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActive = (active, dispatch) => (...arg) => {
//   dispatch(active(...arg))
// }

const {inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10 );
  rnd(value);
});

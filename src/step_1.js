//Начало роботи с redux
//1. Створюємо пустой проект react
//2. Інсталируємо додаткові окремі бібліотеки "redux" та "react-redux"
// npm i redux react-redux
// Создадим простое реакт приложения счетчика с использованием redux

//підключим бібліотеке redux: import {legacy_createStore as  createStore } from 'redux'
import {legacy_createStore as  createStore } from 'redux';

//console.log('Hello Redux!');
//3. Создаем начальное значение - ініціалізація - наш стейт
const initialState = {value: 0};
//4. Создаем редюсер - функцию преобразования стейта
// reducer - должна бить чистая функція - 1.должна возвращать одинаковий результат когда в нее приходят одинаковие данние, 2.без побочних ефектов (запроси на сервер, вивод у консоль, случайних чисел, робота з дом деревом) и на принципе імутатабельності
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INC':
      return {
        ...state,
        value: state.value + 1
      }
    case 'DEC':
      return  {
        ...state,
        value: state.value - 1
      }
    case 'RND':
      return  {
          ...state,
          value: state.value * action.payload
        }
    default:
      return state
  }
}
// 5. ініціруем создание нашего глобального стейта
//для створення обекта store - із него возьмем фукцію createStore:

const store = createStore(reducer);
// на етом етапі вже створили стейт и редюсер
// let state = reducer(initialState, {type: 'INC'});
//state = reducer(state, {type: 'INC'});
//console.log(state);



//  console.log(store.getState().value);
//  це функція для subscribe
const update = () => {
   document.getElementById('counter').textContent = store.getState().value;
}
// store.subscribe() - срабативает каждий раз когда изменеются значения внутри стора (стейта)
// 7. subscribe функція для ізменения интерфейса при изменения стора, но подпісиваться на изменния стора нужно до виполненния действий, т.е. до dispatch
store.subscribe(update);

//8. для того щоб менять стейт через редакс нужно визвать функцію dispatch, она берет актіон и виполняет действія,  функція dispatch - тоже храниться в store

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
//9. создание action creater - для визова в dispatch на обекта типа {type: 'INC'} а строки 'inc'

const inc = () => {
  return {type: 'INC'}
}
const dec = () => {
  return {type: 'DEC'}
}

const rnd = (value) => {
  return {type: 'RND',  payload: value}
}

// store.dispatch() - dispatch - изменение значения стейта, она берет екшен и передает его в редьюсер
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec())
});

// payload - значение у обекте dispatch для передачі его в reducer
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10 )
  store.dispatch(rnd(value));
});

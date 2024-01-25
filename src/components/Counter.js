// соединение реакт компонентов и рдеакс через хуки
// поняття селектора - функції  redux, которие должни получить косочек стора
// и давать ету информації компоненту, они должни бить чистими функиями і синхронними
// по суті mapStateToProps и есть селектор
// для получения пропсов используем хук useSelector
// для получения действий используем хук useDispatch

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {inc, dec, rnd} from '../actions';

const Counter = () => {

const counter = useSelector(state => state.value);
const dispatch = useDispatch();

  return (
    <div>
      <h1 className="m-2">{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary m-2">DEC</button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary m-2">INC</button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary m-2">RND</button>
    </div>

  )
}

export default Counter;

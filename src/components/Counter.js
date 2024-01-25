import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import * as actions from '../actions';
// функція connect єто HOC, оборачивает наш компонент и в качестве пропсов ему передаст что-то із нашего стейта (store)
// connect -   в качестве аргументов принимает в себя несколько функцій
// первий аргумент: mapStateToProps - каждий раз создается вручную, в качестве аргумента принимает state
// функція должна возвращать обект с темі сво-вами которие ми хотим витащить із стейта
// когда ета фінкція создана, то передаем ее првим аргуметов в connect
// с помощью mapStateToProps можно использовать глобальний state в любой части приложения
// каждий раз когда будет изменятся state, будет срабатівать функція connect и компонент будет обновляться с изменением значения із стейта
// второй аргумент: mapDispatchToProps -  в качестве аргумента принимает dispatch
// ета функція возвращает тоже обект - пропси нашего компонента: inc, dec, rnd
// функції mapStateToProps і mapDispatchToProps должни бить чистими функціями
// поєтому вичисление random переносим в action

// особенность функції connect - если в нее вторим аргументом передать не функцію а обект
// то она сама оборачивает акшенкрейтори в функцію dispatch
const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div>
      <h1 className="m-2">{counter}</h1>
      <button onClick={dec} className="btn btn-primary m-2">DEC</button>
      <button onClick={inc} className="btn btn-primary m-2">INC</button>
      <button onClick={rnd} className="btn btn-primary m-2">RND</button>
    </div>

  )
}
const mapStateToProps = ( state ) =>{
  return {
    counter: state.value
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return  bindActionCreators(actions, dispatch);

//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, actions)(Counter);

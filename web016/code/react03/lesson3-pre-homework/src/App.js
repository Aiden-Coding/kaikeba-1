import React, {useState} from "react";
import ReactReduxPage from "./pages/ReactReduxPage";
import RouterPage from "./pages/RouterPage";
import RouteChildren from "./pages/RouteChildren";
import RouteComponePage from "./pages/RouteComponePage";

// import {connect} from "./kReactRedux";
import {connect} from "react-redux";
import mapDispatchToProps from './dispatch'

function App(props) {
  // const [num, setNum] = useState(0);
  // console.log('App-page',props);
  return (
    <div className="App">
      {/* <button onClick={() => setNum(num + 1)}>change num {num}</button> */}
      {/* react redux 学习 */}
      {/* <ReactReduxPage num={num} /> */}

      {/* router 学习 */}
      <RouterPage {...props}/>

      {/* route children  */}
      {/* <RouteChildren /> */}

      {/* // ! 比较一下render和component,重点掌握  */}
      {/* <RouteComponePage /> */}
    </div>
  );
}

// export default App;
export default connect(s=>s,mapDispatchToProps)(App);

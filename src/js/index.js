//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { InputToDo } from "./component/InputToDo.js";
import injectContext from "./store/appContext";

//render your react application
const TodoList = injectContext(InputToDo);
ReactDOM.render(<TodoList />, document.querySelector("#app"));

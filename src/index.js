import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContext } from "./Context";

// Shopping cart
import { Provider } from "react-redux";
import { store } from "./components/State/Store";

const checkCustomer = localStorage.getItem("customer_login");
// if(checkCustomer==true){
//   const userLoggedIn = true;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContext.Provider value={checkCustomer}>
        <Provider store={store}>
          <App />
        </Provider>
      </UserContext.Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

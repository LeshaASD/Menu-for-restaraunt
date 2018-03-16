import React, { Component } from 'react';
import './App.css';
import Menu from "./containers/Menu/Menu";
import Cart from "./containers/Cart/Cart";
import SendForm from "./containers/SendForm/SendForm";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu/>
          <Cart/>
          <SendForm/>
      </div>
    );
  }
}

export default App;

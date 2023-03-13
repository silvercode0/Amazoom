import React from 'react';
import "./App.css"
import Login from "./Login"
// import Supplier from "./Supplier"
// import BuyOptions from "./BuyOptions"

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Login></Login>
        <p class="test2">
          TESTING
        </p>
      </header>
      <footer>
        {/* <BuyOptions></BuyOptions>
        <Supplier></Supplier> */}
      </footer>
    </div>
  );
}


export default App;

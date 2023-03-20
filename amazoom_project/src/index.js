// import React from 'react';
// import App from './App';


// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import Main from "./components/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/App"
/*  renders the webpage  */
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
<Routes>

    <Main />

</Routes>);

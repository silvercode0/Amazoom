// import React from 'react';
// import App from './App';


// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Products } from "./components";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//       <HashRouter>
//           <App>
//               <Switch>                      
//                     <Route path="/" component={ Content }/>
//                     <Route path="login" component={Login} />
//                     <Route path="products" component={Products} />
//                     <Route path="logout" component={Logout} />
//                     <Route path="register" component={Register} />
//                     <Route path="profile" component={Profile} />
//                     <Route path="contactus" component={ ContactUs  }/>
//                 </Switch>
//           </App>
//       </HashRouter>
//     </Provider>
//     , document.querySelector('.container'));

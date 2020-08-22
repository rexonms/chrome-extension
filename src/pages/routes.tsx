import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Home from './home/home'

const Routes = () => 
  <Router>
    <div>
      <Route path="/" component={Home} />
    </div>
  </Router>

export default Routes;


// import React from 'react';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

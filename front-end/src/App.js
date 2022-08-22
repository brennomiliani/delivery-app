// import React from 'react';
// import { Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Switch>
//       <Route exact path="/" component={ Home } />
//       <Route path="/create" component={ SignIn } />
//       <Route path="/login" component={ Login } />
//       <Route path="*" component={ NotFound } />
//     </Switch>);
// }

// export default App;
import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default App;

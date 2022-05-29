import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Register from './register';
import Footer from './Footer';
function App() {
  return (
     <Router>
    <div className="App">
         <Switch>
           <Route path="/" exact>
           <Header />
           <Home />
           </Route>
            <Route path="/login">
              <Login />
           </Route>
           <Route path="/register">
              <Register />
           </Route>
            <Route path="/checkout">
            <Header />
            <Checkout />
           </Route>
         </Switch>
         <Footer />
    </div>
     </Router>
  );
}

export default App;

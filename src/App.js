import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Entries from "./pages/entries";
import Statistics from "./pages/statistics";
import About from "./pages/about";
import Calculator from "./pages/calculator";
import SplashScreen from "./pages/splashScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path='/' exact component={SplashScreen} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/entries' exact component={Entries} />
          <Route path='/statistics' exact component={Statistics} />
          <Route path='/about' exact component={About} />
          <Route path='/calculator' exact component={Calculator} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

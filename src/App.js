import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Entries from "./pages/entries";
import Statistics from "./pages/statistics";
import About from "./pages/about";
import SplashScreen from "./pages/splashScreen";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/entries" exact component={Entries} />
          <Route path="/statistics" exact component={Statistics} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

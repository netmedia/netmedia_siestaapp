import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Entries from './pages/entries';
import Statistics from './pages/statistics';
import About from './pages/about';
import Calculator from './pages/calculator';
import SplashScreen from './pages/splashScreen';
import Error404 from './pages/error404';
import Error401 from './pages/error401';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';

function App() {
  const isUserLoggedIn = useSelector(
    (state) => state.user.credentials.loggedIn
  );

  const ErrorScreen = () => {
    return (
      <Switch>
        <Route path='*' exact component={Error401} />
      </Switch>
    );
  };

  const AppContent = () => {
    return (
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/entries' exact component={Entries} />
        <Route path='/statistics' exact component={Statistics} />
        <Route path='/about' exact component={About} />
        <Route path='/calculator' exact component={Calculator} />
        <Route exact path='*' component={Error404} />
      </Switch>
    );
  };

  return (
    <div className='App'>
      <ToastContainer transition={Flip} />
      <Router>
        <Switch>
          <Route path='/' exact component={SplashScreen} />

          {isUserLoggedIn ? <AppContent /> : <ErrorScreen />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

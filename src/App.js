
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Counter from './components/Counter';
import Breadcrumb from './components/themes/Breadcrumb';
import Dashboard from './components/themes/Dashboard';
import Header from './components/themes/Header';
import LeftMenu from './components/themes/LeftMenu';
import Forms from './components/themes/Forms';


function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">

          <LeftMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Breadcrumb />
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/forms">
                <Forms />
              </Route>

            </Switch>
          </main>
        </div>
      </div>





    </Router>

  );
}

export default App;

import React from 'react';
import logo from './../assets/logo.svg';
import './app/styling/App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import FirstPage from './app/pages/FirstPage';
import SecondPage from './app/pages/SecondPage';
import Footer from './app/pages/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header"> 
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Firstpage">First Page</Link>
            </li>
            <li>
              <Link to="/Secondpage">Second Page</Link>
            </li>
          </ul>
        </header>
        <section id="main">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Firstpage" component={FirstPage}/>
            <Route exact path="/Secondpage" component={SecondPage} />
          </Switch>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

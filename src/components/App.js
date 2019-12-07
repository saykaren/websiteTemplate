import React from 'react';
import './app/styling/App.scss';
import './app/styling/navigation.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import FirstPage from './app/pages/FirstPage';
import SecondPage from './app/pages/SecondPage';
import Footer from './app/pages/Footer';
import Hamburger from './app/resources/hamburger';


const App = () => {
  return (
    <Router>
      <div className="App">
          <Hamburger />
        <section id="main">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Firstpage" component={FirstPage}/>
            <Route exact path="/Secondpage" component={SecondPage} />
          </Switch>
          <Footer />
        </section>
      </div>

    </Router>
  );
}

export default App;

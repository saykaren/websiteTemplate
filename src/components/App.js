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
        <header className="App-header"> 
          <Hamburger />
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

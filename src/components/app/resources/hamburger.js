import React, {useState} from 'react';
import './../styling/ham.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


const Hamburger = () =>{
    const [navigation, setNavigation] = useState(false);
    const activateNavigation = (x) =>{
        navigation ? setNavigation(false) : setNavigation(true);
    }

    let ham1ClassName = "hamburger1";
    let ham2ClassName = "hamburger2";
    let ham3ClassName = "hamburger3";
    let navigationList = "hiddenNavigation";

    if(navigation === true){
        ham1ClassName = "changehamburger1";
        ham2ClassName = "changehamburger2";
        ham3ClassName = "changehamburger3";
        navigationList = "activeNavigation";
    }

 
 
    return(
        <header className="App-header"> 
            <div className="hamContainer" onClick={activateNavigation}>
                <div className={ham1ClassName}></div>
                <div className={ham2ClassName}></div>
                <div className={ham3ClassName}></div>
            </div>
        <ul>
          <li className={navigationList}>
            <Link to="/">Home</Link>
          </li>
          <li className={navigationList}>
            <Link to="/Firstpage">First Page</Link>
          </li>
          <li className={navigationList}>
            <Link to="/Secondpage">Second Page</Link>
          </li>
        </ul>
      </header>

    )
}

export default Hamburger;
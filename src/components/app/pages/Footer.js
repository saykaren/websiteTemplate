import React from 'react';
import './../styling/App.scss';
import './../styling/footer.scss';
import sayKarenLogo from './../../../assets/sayKaren_Logo_transparent_7.2019.png';

const Footer= ()=> (
    <div className="footer">
        <footer
          id="footer"
          className="footerDetails"
        >
          Website created by:
          <a 
            href="http://saykaren.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sayKarenLogo}
              className="footerDetails"
              id="sayKarenLogo"
              alt="sayKaren.com"
            />
          </a>
        </footer>  
    </div>
  );

export default Footer
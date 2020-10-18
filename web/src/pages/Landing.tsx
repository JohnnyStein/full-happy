import React from 'react';
import { FiArrowRight} from 'react-icons/fi';

import LogoImg from '../images/logo.svg'

import '../styles/global.css';
import '../styles/pages/landing.css';

import { Link } from 'react-router-dom';

function Landing() {
    return(
       <div id="page-landing">
       <link rel="icon" href="../src/images/logo.svg" />
     <div className="content-wrapper">
      <img src={LogoImg} alt="logo"/>

      <main>
        <h1>Leve felicidade para o mundo.</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>São Paulo,</strong>
        <span>São Paulo</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
      </Link>

  </div>
    </div>
    )
}

export default Landing;
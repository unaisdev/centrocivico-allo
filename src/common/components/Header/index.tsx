import React from 'react';
import logo from '../../../assets/logo.png'; // with import
import NavBar from './components/NavBar';
import './styles.css'


function Header() {
  return(
    <div className="headerContainer">
      <div className="headerLeft">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="headerRight">
        <NavBar/>
      </div>
    </div>
  )
}


  

export default Header;    
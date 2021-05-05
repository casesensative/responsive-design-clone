import React from 'react';

export default function MobileHeader() {

  return (
    <div className="mhcontainer">
      <div className="mhlogocontainer">
        <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" className="logo" alt='Logo'></img>
      </div>
      <div className="mhmenubutcontainer">
        <div className="menubutton">
          <p>MENU</p>
          <div className="menuslitscontainer">
            <div className="menuslits"></div>
            <div className="menuslits"></div>
            <div className="menuslits"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
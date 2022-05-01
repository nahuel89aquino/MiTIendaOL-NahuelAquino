import React from 'react'
import Logo from '../logo.svg'

const Brand = () => {
  return (
    <div>
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="" width="40" height="30" />
      </a>
    </div>
  );
}

export default Brand
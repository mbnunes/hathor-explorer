import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/hathor-white-logo.png';


class Navigation extends React.Component {
  render() {
    return (
      <div className="main-nav">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/" href="/">
            <img src={logo} alt="" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Network</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wallet/" exact className="nav-link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Wallet</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/decode-tx/" exact className="nav-link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Decode Tx</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/push-tx/" exact className="nav-link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Push Tx</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navigation;
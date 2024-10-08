import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Headers({ Title = "blaaa", Search }) {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="ILOGO.jpeg" alt="mylogo" className="logo-set" />
          <Link to="/" className="name">{Title}</Link>
        </div>
        <form className="form-inline my-2 my-lg-0" onSubmit={Search}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn" type="submit">Search</button>
        </form>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Prop types
Headers.propTypes = {
  Title: PropTypes.string,
  Search: PropTypes.func.isRequired,
};

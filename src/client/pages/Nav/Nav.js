import React, { Component } from 'react'
import { Link } from 'react-router-dom';




export default class Nav extends Component {
  render() {
    return (
      <section className='navigation_container' >
          <div className='nav_content_container' >
               <Link className='link__button' to='/profile' >Profile</Link>
               <Link className='link__button' to='/connect' >Connect</Link>
          </div>
          <div className='logo_container_nav' >
          <p className='logo'>InterCoin</p>
          <p className="footer-company-name">Version 3.0 &copy; 2018</p>
          </div>
      </section>
    )
  }
}




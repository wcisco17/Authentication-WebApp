import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom';
import FormSignUp from '../../molecules/AuthInputs/FormSignUp';
export default class SignUp extends Component {
  render() {
    return (
      <Fragment>
      <section className='login_page_container' >
        <section className='signup_section' >
            <div className='login_container' >
          <div className='top_container' >
             <p className='logo'>InterCoin</p>
             <div className='link_container'>
              <Link to='/' className='link_btn' >
                  Login
              </Link>
              <Link to='/signup' className='link_btn' >
                  Sign Up
              </Link>
             </div>
          </div>
              <div className='content__login' >
              <FormSignUp { ...this.props }  />
              </div>
            </div>
        </section>
        <section className='signup_section_img' >
        </section>
      </section>
    </Fragment>

    )
  }
}

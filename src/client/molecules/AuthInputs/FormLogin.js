import React, { Fragment } from 'react'
import AuthInput  from "../../atoms/Input/AuthInput";

import { Mutation } from 'react-apollo';
import { LOGIN_USER } from '../../../assets/mutation'


export default class FormLogin extends React.Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };
  handleChange = password => event => {
    this.setState({
      [password]: event.target.value,
    });
  };

    render() {
      const { email, password } = this.state;

      return (
      <Mutation
        mutation={LOGIN_USER}
        >
        {(mutate, err) => {
          return(
            <Fragment>
          <form className='form__login'>
                    <div className='form__content__header' >
                    <h3>Login</h3>
                    <p>Sign In and gain access to your wallet,</p>
                    <div style={{ paddingTop: 20 }} />
                    {err.error ? <p style={{ fontSize: '13px',
                  color: 'red' }} >{`Error: ${(err.error.message).slice(15)}`}</p> : null }
                    </div>
                    <AuthInput
                    text={'Username'}
                    type={'text'}
                    value={email}
                    onChange={this.handleChange('email')}
                    />
                    <AuthInput
                    onChange={this.handleChange('password')}
                    value={password}
                    type={'password'}
                    text={'Password'}
                    />
                      <button className='btn_forms_auth'
                      onClick={ async (e) => {
                        e.preventDefault()
                        await mutate({ variables: { email, password } })
                        this.props.history.push('/profile')
                      }}
                      >Submit</button>
                    <div className="social-btns">
                    <a className="btn facebook" href="/">
                    <i className="fa fa-facebook"></i>
                    </a>
                    <a className="btn twitter" href="/"><i className="fa fa-twitter"></i></a>
                    <a className="btn google" href="/"><i className="fa fa-google"></i></a>
                    </div>
          </form>
          </Fragment>

      )}}

      
      </Mutation>
    )
  }
}

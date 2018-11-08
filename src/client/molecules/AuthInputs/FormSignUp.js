import React, { Fragment, Component } from 'react'

import AuthInput  from "../../atoms/Input/AuthInput";
import { Mutation } from 'react-apollo';
import { REGISTER_USER } from '../../../assets/mutation';


export default class FormSignUp extends Component {
    constructor(props) {
        super(props)
        this.state ={
            username: '',
            email: '',
            phone_number: '',
            password: '',
        }
       this.userRef = React.createRef();
       this.emailRef = React.createRef();
       this.phoneRef = React.createRef();
       this.passwordRef = React.createRef();
    }



    clearInput = _ => this.setState({ username: '',email: '', phone_number: '', password: "" })

    handleChange = key => event => {
        this.setState({
            [key]: event.target.value
        })
    }

  render() {
      const {
          username,
          email,
          phone_number,
          password
      } = this.state
    return (
    <Mutation
    mutation={REGISTER_USER}
    >
        {(mutate, error) => {
            return (
                <Fragment>
                    <form className='form__signup'>
                            <div className='form__content__header_signup' >
                            <h3>Sign Up</h3>
                            <p>Sign Up take charge of your finance,</p>
                            </div>
                            <AuthInput
                            text={'Username'}
                            type="text"
                            ref={this.userRef}
                            onChange={this.handleChange('username')}
                            value={username}
                            />
                            <AuthInput
                            text={'Email'}
                            type="text"
                            ref={this.emailRef}
                            onChange={this.handleChange('email')}
                            value={email}
                            />
                            <AuthInput
                            text={'Phone Number'}
                            type="text"
                            ref={this.phoneRef}
                            onChange={this.handleChange('phone_number')}
                            value={Number(phone_number)}
                            />
                            <AuthInput
                            text={'Password'}
                            type="password"
                            ref={this.passwordRef}
                            onChange={this.handleChange('password')}
                            value={password}
                            />
                     <button className='btn_forms_auth'
                      onClick={ async (e) => {
                        e.preventDefault()
                        await mutate({ variables: {username , email, phone_number , password } })
                        this.props.history.push('/login')
                      }}
                      >Submit</button>
                        </form>
                </Fragment>
            )
        }}
    </Mutation>
    )
  }
}










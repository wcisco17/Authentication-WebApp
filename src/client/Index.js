import React, { Component, Fragment } from 'react'
import { Route, Switch, BrowserRouter, } from "react-router-dom";

import SignUp from '../client/pages/Auth/SignUp'
import Login from '../client/pages/Auth/Login'


import Nav from '../client/pages/Nav/Nav';
import Profile from '../client/pages/Dashboard/Account/Profile/Profile';
import Connect from '../client/pages/Dashboard/Account/Connect/Connect';
import ConfirmedEmail from '../client/pages/Dashboard/Account/ConfirmedEmail';




import { Query } from 'react-apollo';
import { VIEW_USER } from '../assets/mutation';
import Loading from './molecules/Loading';



export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: false
    }

    setTimeout(() => {
        this.setState((prevState) => ({
            loading: !prevState.loading
        }))
    }, 4000)
}
  componentWillUnmount() {
    clearTimeout(this.state.loading)
  }

  render() {
    return (
    <Query query={VIEW_USER} >
      {({ data, loading }) => {
        if (!data) return null
        console.log(data)
        if (this.state.loading === false) {
          return (
            <Loading />
          )
        } else {
        if (loading) return <h2>Loading...</h2>
          return (
            <BrowserRouter>
              <Switch>
              <Route exact path='/' component={Login} />
               <Route  path='/signup' component={SignUp} />
                  <Main />
              </Switch>
        </BrowserRouter>
        )
      }
      }}
    </Query>
    )
  }
}



export const Main = () => (
            <React.Fragment>
                <Nav />
                <Route path='/profile' component={Profile} />
                <Route path='/connect' component={Connect} />
                <Route  path='/confirmemail/::token=' component={ConfirmedEmail} />
            </React.Fragment>
)


const RenderAuthentication = () => (
  <Fragment>
      <Route exact path='/' component={Login} />
      <Route  path='/signup' component={SignUp} />
  </Fragment>
)
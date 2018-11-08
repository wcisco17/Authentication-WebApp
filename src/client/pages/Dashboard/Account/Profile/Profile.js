import React, { Component } from 'react'
import { VIEW_USER } from "../../../../../assets/mutation";
import { Query } from 'react-apollo';
// import { Redirect } from 'react-router-dom'
import { Button } from '../../../../atoms/Button/Buttons';

export default class Profile extends Component {


  logout = () => {
      console.log('Logout')
  }


  render() {
    return (
      <Query fetchPolicy="network-only"  query={VIEW_USER} >
      {({ data }) => {
        if (!data) return <h2>No Data {':('} please Login</h2>

        if (!data.user) {
          return (
            <div>
                <h1>No user..</h1>
                <Button
              color="rgb(142,142,222)"
              text='Login'
              onClick={() => this.props.history.push('/')}
              />
            </div>
          )
        }
          return (
            <section className='profile__container' >
            <div className='profile__content'>
              <h1 style={{ paddingBottom: 30 }} >Welcome,</h1>
              <h3 style={{ textTransform: 'uppercase' }} > Your Email: {(data.user.email)}</h3>
              <h3 style={{ textTransform: 'uppercase' }}> Username: {data.user.username}</h3>
              <h3 style={{ textTransform: 'uppercase' }}> Phone Number: {data.user.phone_number}</h3>
              <div style={{ paddingTop: '2rem' }} >
              <Button
              color="rgb(142,142,222)"
              text='Sign Out'
              onClick={() => this.logout()}
              />
              </div>
            </div>
         </section>
        )
      }}
    </Query>
    )
  }
}

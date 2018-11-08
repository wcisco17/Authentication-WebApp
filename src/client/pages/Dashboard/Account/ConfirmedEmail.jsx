import React from 'react'
import { Query } from 'react-apollo';
import { VIEW_USER } from '../../../../assets/mutation';

export default class ConfirmedEmail extends React.PureComponent {
  render() {
    return (
    <Query query={VIEW_USER} >
        {({ data, loading }) => {
            if (loading) return <h2>Loading...</h2>
            if (!data.user) return <h1>No User</h1>

        if (!data.user.validationEmailToken) return <h2>No User data: please Sign In</h2>
        if (data.user.validationEmailToken){
            return (
            <div>
                <h1>Success: Confirmed  Email</h1>
            </div>
            )

        }
        }}
    </Query>
    )
  }
}

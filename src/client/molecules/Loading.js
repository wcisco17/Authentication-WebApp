import React, { Component, Fragment } from 'react'


export default class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }


    }

    async componentDidMount() {

       await setTimeout(() => {
            this.setState((prevState) => ({
                loading: !prevState.loading
            }))
        }, 5000)
    }

    componentWillUnmount() {
        clearTimeout()
    }

  render() {
    return (
        <Fragment>
        {this.state.loading === false ?
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                top: 180
            }} >
           <iframe title='..' width="400" height="400" src="https://lottiefiles.com/iframe/3163-sandclock" frameborder="0" allowfullscreen></iframe>
            </div>
       : null }
            </Fragment>
    )
  }
}

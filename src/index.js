import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css'
import './assets/css/media1.css'
import './assets/css/main.css'
import { MainApp } from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



const uri = "http://localhost:5000/graphql"


const client = new ApolloClient({
    uri,

    credentials: 'include'
})



const AppContainer = () => (
    <ApolloProvider client={client} >
        <MainApp />
    </ApolloProvider>
)


ReactDOM.render(<AppContainer />, document.getElementById('root'));



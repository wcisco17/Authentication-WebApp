import React from 'react';
import { Route } from "react-router-dom";
import Nav from '../Nav/Nav';



import Profile from './Account/Profile/Profile';
import Connect from './Account/Connect/Connect';
import ConfirmedEmail from './Account/ConfirmedEmail';




export const Main = () => (
            <React.Fragment>
                <Nav />
                <Route path='/profile' component={Profile} />
                <Route path='/connect' component={Connect} />
                <Route  path='/confirmemail/::token=' component={ConfirmedEmail} />
            </React.Fragment>
)
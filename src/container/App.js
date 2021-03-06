/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import RctThemeProvider from './RctThemeProvider';
import RctDefaultLayout from './DefaultLayout';
import {
   AsyncSessionLoginComponent,
   AsyncSessionRegisterComponent,
   AsyncSessionLockScreenComponent,
   AsyncSessionForgotPasswordComponent,
   AsyncSessionPage404Component,
   AsyncSessionPage500Component,
} from 'Components/AsyncComponent/AsyncComponent';
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();



/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, authUser, ...rest }) =>
   <Route
      {...rest}
      render={props =>
         authUser
            ? <Component {...props} />
            : <Redirect
               to={{
                  pathname: '/login',
                  state: { from: props.location }
               }}
            />}
   />;



axios.interceptors.response.use(response => {
    return response;
}, error => {

    if (error.response.status === 401) {
        cookies.remove('user_id');
        location.replace("/login");
    }
    return Promise.reject(error);
});




class App extends Component {
   render() {
       const { location, match, user } = this.props;
      if (location.pathname === '/') {
         if (user === null) {
            return (<Redirect to={'/login'} />);
         } else {
            return (<Redirect to={'/admin/dashboard'} />);
         }
      }
      return (
         <RctThemeProvider>
            <NotificationContainer />
            <InitialPath
               path={`${match.url}admin`}
               authUser={user}
               component={RctDefaultLayout}
            />
            <Route path="/login" component={AsyncSessionLoginComponent} />
            <Route path="/register" component={AsyncSessionRegisterComponent} />
            <Route path="/session/lock-screen" component={AsyncSessionLockScreenComponent} />
            <Route
               path="/session/forgot-password"
               component={AsyncSessionForgotPasswordComponent}
            />
            <Route path="/session/404" component={AsyncSessionPage404Component} />
            <Route path="/session/500" component={AsyncSessionPage500Component} />
         </RctThemeProvider>
      );
   }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user } = authUser;
   return { user };
};

export default connect(mapStateToProps)(App);

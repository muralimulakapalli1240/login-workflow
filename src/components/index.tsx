import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Login } from './login/login';
import Workflow from './workflow';
import Nodes from './workflow/components/nodes';
import PublicRoute from './public';
import PrivateRoute from './private';
import Header from './common/header'
import Connect from '../config/connect';

const Main: React.FunctionComponent<any> = (loggedIn) => {
  return (
    <Fragment>
      <Header isAuthenticated={loggedIn} ></Header>
      <Switch>
        <PublicRoute isAuthenticated={loggedIn} component={Login} path="/login" exact />
        <PrivateRoute isAuthenticated={loggedIn}  component={Workflow} path="/" exact />
        <PrivateRoute isAuthenticated={loggedIn}  component={Nodes} path="/:id" />
      </Switch>
    </Fragment>

  );
}
const mapStateToProps = ({data}:any,props: any) => {
  return {
    ...props,
    data
  };
};

export default Connect(mapStateToProps)(Main);

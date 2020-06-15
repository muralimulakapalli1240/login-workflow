import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Login } from './login/login';
import Workflow from './workflow';
import Nodes from './workflow/components/nodes';
import PublicRoute from './public';
import PrivateRoute from './private';
import Header from './common/header'
import Connect from '../config/connect';

const Main: React.FunctionComponent<any> = (props) => {
  const { data:{loggedIn} } = props
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
const mapStateToProps = (props: any) => {
  return {
    ...props
  };
};

export default Connect(mapStateToProps)(Main);

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Connect from '../../config/connect';
import {  workRemoveSelected } from '../workflow/actions';
import {  LogOut } from '../login/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    alignright: {
      float: "right",
      width: 300,
      textAlign:"right"
    },
    btngreen: {
      color: "#fff",
      marginLeft: 10,
      background: "#4caf50"
    },
    btnred: {
      color: "#fff",
      marginLeft: 10
    },
    linkColor: {
      color: "#fff",
    }
  }),
);

function ButtonAppBar({isAuthenticated,selectedWorkFlow,dispatch}:any) {
  const classes = useStyles();
  const history = useHistory();
  const logout = () => {
    dispatch(LogOut())
  }
  const goBack =()=>{
    history.push("/");
    dispatch(workRemoveSelected())
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FOLOWAPP
          </Typography>
          <div className={classes.alignright}>
            {isAuthenticated ? (<Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.btngreen}
              onClick={logout}>
              Logout {selectedWorkFlow.name}
            </Button>) : ""}
            {selectedWorkFlow.id && isAuthenticated ? (
              <Button
                variant="contained"
                size="large"
                className={classes.btnred}
                onClick={goBack}
                color="secondary">
                  Back
              </Button>) : ""}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = ({ selectedWorkFlow }: any, props: any) => {
  return {
      ...props,
      selectedWorkFlow
  };
}
export default Connect(mapStateToProps)(ButtonAppBar)
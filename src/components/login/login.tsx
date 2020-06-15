
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { User } from './types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
    Link
  } from "react-router-dom";
import Connect from '../../config/connect';
import { LoginUser } from './actions';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(0),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#fff',
            color: '#000'
        },
        card: {
            marginTop: theme.spacing(10)
        },
        alginCenter:{
            textAlign:"center",
            flexGrow: 1
        }

    }),
);

const Component = (props : any) => {
    const classes = useStyles();
    const [state, setState] = useState<User>({ username: "", password: "", remember: false })
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error] = useState(false);

    useEffect(() => {
        if (state.username.trim() && state.password) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [state]);

    useEffect(() => {
        const {errors} = props
        if (errors) {
            setHelperText('Incorrect username or password')
        }
    }, [props]);

    const handleLogin = () => {
        props.dispatch(LoginUser(state))
    };
    const handleChange = (val: any, name: string) => {
        state[name] = val;
        setState({...state});
    }
    const handleKeyPress = (e: any) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };

    return (
        <React.Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="Login" />
                    <CardContent>
                            <TextField
                                error={error}
                                fullWidth
                                id="username"
                                type="email"
                                label="Username"
                                placeholder="user"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                multiline
                                variant="outlined"
                                onChange={(e) => handleChange(e.target.value, "username")}
                                onKeyPress={(e) => handleKeyPress(e)}
                            />
                            <TextField
                                error={error}
                                fullWidth
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="demo"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                multiline
                                variant="outlined"
                                helperText={helperText}
                                onChange={(e) => handleChange(e.target.value, "password")}
                                onKeyPress={(e) => handleKeyPress(e)}
                            />
                        <FormControlLabel
                        control={
                            <Checkbox checked={state.remember}
                                onChange={$event => handleChange($event, 'status')}
                                value={state.remember} />
                        }
                        label="Remember me"
                    />
                    </CardContent>
                    
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.loginBtn}
                            onClick={() => handleLogin()}
                            disabled={isButtonDisabled}>
                            Login
            </Button>
            </CardActions>
            <CardActions>
            <Button size="large" className={classes.alginCenter}><Link to="/signup" ></Link>Don't have an account? Signup here</Button>

                    </CardActions>
                </Card>
            </form>
        </React.Fragment>
    );
}


const mapStateToProps = (props: any) => {
  return {
    ...props
  };
};

export const Login = Connect(mapStateToProps)(Component);
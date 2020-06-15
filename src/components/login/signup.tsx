
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
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#fff',
            color: '#000'
        },
        card: {
            marginTop: theme.spacing(10)
        }

    }),
);

const SignUp = () => {
    const classes = useStyles();
    const [state, setState] = useState<User>({ username: "", password: "", remember: false })
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (state.username.trim() && state.password) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [state]);

    const handleLogin = () => {
        if (state.username === 'abc@email.com' && state.password === 'password') {
            setError(false);
            setHelperText('Login Successfully');
        } else {
            setError(true);
            setHelperText('Incorrect username or password')
        }
    };
    const handleChange = (event: any, name: string) => {
        state[name] = event.target.value;
        setState(state);
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
                        <div>
                            <TextField
                                error={error}
                                fullWidth
                                id="username"
                                type="email"
                                label="Username"
                                placeholder="Username"
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
                                placeholder="Password"
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
                        </div>
                    </CardContent>
                    <FormControlLabel
                        control={
                            <Checkbox checked={state.remember}
                                onChange={$event => handleChange($event, 'status')}
                                value={state.remember} />
                        }
                        label="Remember me"
                    />
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
                </Card>
            </form>
        </React.Fragment>
    );
}

export default SignUp;
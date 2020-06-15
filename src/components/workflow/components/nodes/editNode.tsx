
import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CardContent, Card, Button, TextField, InputAdornment, CardActions } from '@material-ui/core';
import { SupervisedUserCircle } from '@material-ui/icons';
import Connect from '../../../../config/connect';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        carddetails: {
            width: "100%"
        },
        icon: {
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            color: "#fff",
            background: "#CCC",
            '&:hover': {
                background: "#CCC"
            },
        },
        loginBtn: {
            color: "#000",
            border: "1px solid #000",
            flexGrow: 1,
            width: "100%",
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            padding: 10,
            boxSizing: "border-box"
        },
        Btn: {
            color: "#000",
            flexGrow: 1,
            width: "100%",
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            padding: 10,
            boxSizing: "border-box"
        },
        status: {
            justifyContent: "space-between",
            display: "flex",
            marginTop: 10,
            alignItems: "center"
        },
        statusname: {

        }
    }),
);
const EditNodes = ({ creatWorkflow,id }: any) => {
    const classes = useStyles();
    const [state, setState] = useState<any>({ name: "", status: "Progress",desc:"",workflowid:id })
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const handleChange = (val: any, name: string) => {
        state[name] = val;
        setState({ ...state });
    }
    useEffect(() => {
        if (state.name.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [state]);
    const handleLogin = () => {
        creatWorkflow(state)
    };
    return (
        <React.Fragment>
            <div className={classes.carddetails}>
                <Card>
                    <CardContent>
                        <div className={classes.loginBtn}>
                            <TextField
                                fullWidth
                                id="name"
                                type="text"
                                label="Title"
                                placeholder="Title"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SupervisedUserCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                multiline
                                variant="outlined"
                                onChange={(e) => handleChange(e.target.value, "name")}
                            />
                            <TextField
                                fullWidth
                                id="name"
                                type="text"
                                label="Title"
                                placeholder="Title"
                                multiline
                                rows={2}
                                rowsMax={4}
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SupervisedUserCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                onChange={(e) => handleChange(e.target.value, "desc")}
                            />


                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.Btn}
                            onClick={() => handleLogin()}
                            disabled={isButtonDisabled}>
                            Create workflow
                       </Button>
                    </CardActions>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default Connect(undefined)(EditNodes);
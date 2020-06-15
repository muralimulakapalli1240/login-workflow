
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CardContent, IconButton, Card } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        carddetails: {
            width: "100%",
            position: "relative"
        },
        icon: {
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            color: "#fff",
            width: 40,
            height: 40,
            position: "absolute",
            top: -23,
            right: -17,
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
        status: {
            justifyContent: "space-between",
            display: "flex",
            marginTop: 10,
            alignItems: "center"
        },
        desc: {
            padding: 10,
            border: "1px solid #000",
            marginTop: 10,
            height: 200

        },
        btngreen: {
            color: "#fff",
            marginLeft: 10,
            background: "#4caf50",
            width: 40,
            height: 40,
            position: "absolute",
            top: -23,
            right: -17,
            '&:hover': {
                background: "#4caf50"
            },
        },
        btnblue: {
            color: "#fff",
            marginLeft: 10,
            width: 40,
            height: 40,
            position: "absolute",
            top: -23,
            right: -17,
            background: "#3f51b5",
            '&:hover': {
                background: "#3f51b5"
            },
        }
    }),
);
const NodeDetails = ({ data: { id, status, name, desc,workflowid },changeStatus }: any) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.carddetails}>
                <Card>
                    <CardContent>
                        <div
                            className={classes.loginBtn}>
                            {name}
                        </div>
                        <div className={classes.desc}>
                            {desc}
                        </div>
                    </CardContent>
                </Card>
                <IconButton className={status === "Progress" ? classes.icon : (status === "Complete"?classes.btngreen:classes.btnblue)} onClick={()=>changeStatus({ id, status, name, desc, workflowid })} color="secondary" aria-label="upload picture" component="button">
                <CheckIcon /> 
            </IconButton>
            </div>
           
        </React.Fragment>
    );
}


export default NodeDetails;
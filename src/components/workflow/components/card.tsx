
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CardContent, IconButton, Card } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import {
    Link
} from "react-router-dom";
import Connect from '../../../config/connect';
import { updateWorkFlow } from './../actions/index';
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
        btngreen: {
            color: "#fff",
            marginLeft: 10,
            background: "#4caf50",
            '&:hover': {
                background: "#4caf50"
            },
        },
        btnblue: {
            color: "#fff",
            marginLeft: 10,
            background: "#4caf50",
            '&:hover': {
                background: "#4caf50"
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
        statusname: {

        }
    }),
);
const CardDetails = ({ data: { id, status, name }, nodes,ChangeIcon, dispatch }: any) => {
    const classes = useStyles();
    const changeStatus = () => {
        let data = []
        data = nodes.filter((val: any) => val.workflowid === id && val.status !== "Complete")
        if (data.length <= 0) { 
            dispatch(updateWorkFlow({ id, status: status === "Pending" ? "Complete" : "Pending", name })) 
            ChangeIcon()
        }
        else if (status === "Complete") { 
            dispatch(updateWorkFlow({ id, status: "Pending", name })) 
            ChangeIcon()
        }
        
    }
    return (
        <React.Fragment>
            <div className={classes.carddetails}>
                <Card>
                    <CardContent>
                        <Link to={`/${id}`} >
                            <div
                                className={classes.loginBtn}>
                                {name}
                            </div>
                        </Link>
                        <div className={classes.status}>
                            <div className={classes.statusname}>{status}</div>
                            <IconButton className={status === "Pending" ? classes.icon : ("Pending"?classes.btngreen:classes.btngreen)} onClick={changeStatus} color="secondary" aria-label="upload picture" component="button">
                                <CheckIcon />
                            </IconButton>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </React.Fragment>
    );
}


const mapStateToProps = ({ nodes }: any, props: any) => {
    return {
        ...props,
        nodes
    };
};

export default Connect(mapStateToProps)(CardDetails);

import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import InputAdornment from '@material-ui/core/InputAdornment';
import Connect from '../../../../config/connect';
import { updateWorkFlow,deleteNodes,nodeShuffle } from './../../actions/index';
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
            flexGrow: 1,
            marginLeft: 10
        },
        shuffleBtn: { background: "#673ab7", color: "#fff",
            marginLeft: 10 },
        deleteBtn: { background: "#e91e63", color: "#fff",
            marginLeft: 10 },
        addBtn: { background: "#4caf50", color: "#fff",
            marginLeft: 10 },
        saveBtn: { background: "#3f51b5", color: "#fff",
            marginLeft: 10 },
        header: {
            textAlign: 'center',
            background: '#fff',
            color: '#000'
        },
        card: {
            marginTop: theme.spacing(0)
        },
        filter: {
            marginTop: 4,
            paddingLeft: theme.spacing(3),
        },
        alginCenter: {
            textAlign: "center",
            flexGrow: 1
        },
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        grid: {
            textAlign: "right"
        },
        input: {
            padding: theme.spacing(1),
            width: "100%",
            boxSizing: "border-box",
            height: 42,
            borderRadius: 3,
            paddingLeft: 5,
            border: "1px solid #000",
            boxShadow: " 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
        },
        icon: {
            position: "absolute",
            marginTop: -21,
            marginLeft: 14
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            maxWidth: 300,
        },
        gridName: {
            display: "flex",
            justifyContent: "space-between"
        }
    }),
);

const Component = ({ handleChange, selectedWorkFlow,id, dispatch,workflowDisabled }: any) => {
    const classes = useStyles();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [title, setTitle] = React.useState<string[]>(selectedWorkFlow.name);
    const updateText = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTitle(event.target.value as string[]);
        setIsButtonDisabled(false);
    };
    const saveText = (event:any) => {
        setTitle(event.target.value as string[]);
        const data = {...selectedWorkFlow,name:title}
        dispatch(updateWorkFlow(data))
        setIsButtonDisabled(true);
    };
    const deleteNode = (event:any) => {
        dispatch(deleteNodes(id))
    };
    const shuffle =()=>{
        dispatch(nodeShuffle(id))
    }
    useEffect(() => {
        if (title !== selectedWorkFlow.name) {
            setTitle(selectedWorkFlow.name);
        }
    }, [selectedWorkFlow]);

    return (
        <React.Fragment>

            <Card className={classes.card}>
                <CardContent>

                    <Grid container spacing={0} className={classes.gridName}>
                        <Grid item xs={4}>
                            <input type="text" placeholder="Search Workflows" value={title} onChange={updateText} className={classes.input}></input>
                        </Grid>
                        <Grid className={classes.grid + " " + classes.card} item xs={6}>
                            {selectedWorkFlow.status==="Complete" ? (<Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                onClick={shuffle}
                                className={classes.shuffleBtn}>
                                <InputAdornment position="start">
                                    <ShuffleIcon />
                                </InputAdornment>
                                Shuffle
                            </Button>) : ""}


                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                onClick={deleteNode}
                                className={classes.deleteBtn}>
                                <InputAdornment position="start">
                                    <DeleteIcon />
                                </InputAdornment>
                                Delete
                            </Button>

                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                onClick={handleChange}
                                className={classes.addBtn}>
                                <InputAdornment position="start">
                                    <AddIcon />
                                </InputAdornment>
                                {!workflowDisabled?"Add Note":"Close"}    
                            </Button>

                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                onClick={saveText}
                                disabled={isButtonDisabled}
                                className={classes.saveBtn}>
                                Save
                            </Button>

                        </Grid>

                    </Grid>


                </CardContent>

            </Card>
        </React.Fragment>
    );
}

const mapStateToProps = ({ selectedWorkFlow }: any, props: any) => {
    return {
        ...props,
        selectedWorkFlow
    };
};

export default Connect(mapStateToProps)(Component);
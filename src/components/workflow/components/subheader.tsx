
import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, FormControl, Select, Input, Checkbox, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
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
            borderRadius: 23,
            paddingLeft: 37
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
        }
    }),
);
const names = [
    'Pending',
    'Complete'
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const Component = ({ handleChange, filterData }: any) => {
    const classes = useStyles();
    const [statusName, setstatusName] = useState<string[]>(names);
    const [title, setTilte] = useState<any>("");
    const handleMultiSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        setstatusName(event.target.value as string[]);
    };
    useEffect(() => {
        filterData(title, statusName)
    },[title,
    statusName])
    const changeVal = (event: any) => {
        setTilte(event.target.value)
    }
    return (
        <React.Fragment>

            <Card className={classes.card}>
                <CardContent>

                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <input type="text" value={title} onChange={changeVal} placeholder="Search Workflows" className={classes.input}>

                            </input>
                            <InputAdornment position="start" className={classes.icon}>
                                <SearchIcon />
                            </InputAdornment>
                        </Grid>
                        <Grid className={classes.filter} item xs={3}>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={statusName}
                                    onChange={handleMultiSelect}
                                    input={<Input />}
                                    renderValue={(selected) => (selected as string[]).join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={statusName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid className={classes.grid + " " + classes.card} item xs={5}>
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                onClick={handleChange}
                                className={classes.loginBtn}>
                                <InputAdornment position="start">
                                    <AddCircleOutline />
                                </InputAdornment>
                                Create Workflow
                            </Button>
                        </Grid>

                    </Grid>


                </CardContent>

            </Card>
        </React.Fragment>
    );
}

export default Component;
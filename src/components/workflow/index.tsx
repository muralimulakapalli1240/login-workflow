
import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { addWorkFlow,workFilter } from './actions';
import SubHeader from './components/subheader';
import CardDetails from './components/card';
import EditCardDetails from './components/editCard';
import Connect from '../../config/connect';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap'
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
            marginTop: theme.spacing(4)
        },
        griddetails: {
            marginTop: theme.spacing(4),
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "24% 24% 24% 24%",
            gridGap: "1.3%",
            padding: 10,
            width: "100%"
        },
        alginCenter: {
            textAlign: "center",
            flexGrow: 1
        }

    }),
);

const Component = ({workflow,dispatch}: any) => {
    const classes = useStyles();
    const [workflowDisabled, setworkflowDisabled] = useState(false);
    const [filters, setFilter] = useState<any>({});
    const handleChange = () => {
        setworkflowDisabled(!workflowDisabled)
    }
    const creatWorkflow = (data:any) => {
        dispatch(addWorkFlow(data))
        dispatch(workFilter(filters.filter,filters.search))
        setworkflowDisabled(!workflowDisabled)
    };
    const ChangeIcon = (data:any) => {

        dispatch(workFilter(filters.filter,filters.search))
    };
    
    const filterData=(filter:any,search:any)=>{
        dispatch(workFilter(filter,search))
        setFilter({filter,search})
    }
    return (
        <React.Fragment>
            <SubHeader  handleChange={handleChange} filterData={filterData}></SubHeader>
            <div className={classes.griddetails}>
                {workflowDisabled?<EditCardDetails creatWorkflow={creatWorkflow}></EditCardDetails>:""}
                {workflow.map((val: any) => <CardDetails key={val.id} data={val} ChangeIcon={ChangeIcon}></CardDetails>)}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = ({ nodes,workflow }: any, props: any) => {
    return {
        ...props,
        workflow,
        nodes
    };
};

export default Connect(mapStateToProps)(Component);
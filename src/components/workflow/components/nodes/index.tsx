import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SubHeader from './subheader';
import AddNodes from './node';
import { useHistory } from 'react-router-dom';
import EditNode from './editNode';
import Connect from '../../../../config/connect';
import { workSelected,selectNodes, addNodes, updateNodes } from './../../actions/index';
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

const Component = ({selectedNode,selectedWorkFlow,dispatch}:any) => {
    const classes = useStyles();
    const { id } = useParams();
    const [workflowDisabled, setworkflowDisabled] = useState(true);
    
  
    const changeStatus = (data:any) => {
      let status="";
      if(data.status === "Pending")
      status="Complete"
      else if(data.status === "Complete")
      status="Progress"
      else if(data.status === "Progress")
      status="Pending"
     dispatch(updateNodes({...data, status }))
  }

  useEffect(() => {
    dispatch(workSelected(id))
    dispatch(selectNodes(id))
  },[]);

    const handleChange = () => {
        setworkflowDisabled(!workflowDisabled)
    }
    const creatWorkflow = (data:any) => {
        setworkflowDisabled(!workflowDisabled)
        dispatch(addNodes(data))
    };

    return (
        <React.Fragment>
            <SubHeader title={selectedWorkFlow.name} handleChange={handleChange} id={id}></SubHeader>
            <div className={classes.griddetails}>
                {workflowDisabled?<EditNode creatWorkflow={creatWorkflow} id={id} workflowDisabled={workflowDisabled}></EditNode>:""}
                {selectedNode.map((val: any) => <AddNodes key={val.id} data={val} changeStatus={changeStatus}></AddNodes>)}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = ({ selectedNode, selectedWorkFlow }: any, props: any) => {
    return {
        ...props,
        selectedNode,
        selectedWorkFlow
    };
};

export default Connect(mapStateToProps)(Component);
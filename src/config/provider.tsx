import React, { useReducer } from "react";
import { Context } from "./config";
import middleware from './middleware';

// Nossos stores e reducers
import { authStore, loginReducer } from "../components/login/reducers";
import { workflowReducer, WorkFlowStore } from "../components/workflow/reducers";
import { NodeStore, nodesReducer } from "../components/workflow/reducers";


const Store = (props: any) => {

  // Criando um reducer com as configurações de cada reduces e store respectivamente
  const [authState, authDispatch] = useReducer(loginReducer, authStore);
  const [workFlowState, workFlowDispatch] = useReducer(workflowReducer, WorkFlowStore);
  const [nodeState, modeDispatch] = useReducer(nodesReducer, NodeStore);

  const triggerDispatchs = (action: any) => {
    const dispatchs = [authDispatch,workFlowDispatch,modeDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareConstrutor = (action: any) => {
    middleware(action)(triggerDispatchs);
  };

  const combinedReducers: any = {
    store: {
      ...authState,
      ...workFlowState,
      ...nodeState
    },
    dispatch: middlewareConstrutor
  };


  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
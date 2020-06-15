import { workActionTypes } from '../types';

export const WorkFlowStore = { workflow: [{ id: "1", name: "Murali", status: "Pending" }], selectedWorkFlow: {}, masterdata: [{ id: "1", name: "Murali", status: "Pending" }] }
export const NodeStore = { nodes: [{ id: "1", name: "Murali", status: "Progress", workflowid: "1", desc: "asdasdasd" }], selectedNode: [] }
export const workflowReducer = (state: any = WorkFlowStore, action: any) => {
    switch (action.type) {
        case workActionTypes.WORKFLOW_ADD:
            return {
                ...state, "masterdata": [...state.workflow, {
                    id: '_' + Math.random().toString(36).substr(2, 9),
                    name: action.item.name,
                    status: action.item.status
                }]
            }
        case workActionTypes.WORKFLOW_FILTER: {
            let filterData = []
            if (action.search)
                filterData = state.masterdata.filter((val: any) => val.name.toLowerCase().includes(action.search))
            else
                filterData = state.masterdata
            if (action.filter.length > 0) {
                if (action.filter.length < 2) {
                    filterData = filterData.filter((val: any) => val.status === action.filter[0])
                }
            }

            return {
                ...state, "workflow": [...filterData]
            }
        }
        case workActionTypes.WORKFLOW_UPDATE: {
            let data = state.masterdata.map((flow: any) =>
                (flow.id === action.item.id)
                    ? {
                        ...flow,
                        name: action.item.name,
                        status: action.item.status
                    }
                    : flow
            )
            return {
                ...state, "masterdata": [...data]
            }
        }
        case workActionTypes.WORKFLOW_DELETE:
            return state.masterdata.filter((flow: any) =>
                flow.id !== action.id
            )
        case workActionTypes.WORKFLOW_SELECTED: {
            const data = state.workflow.filter((flow: any) =>
                flow.id === action.id
            )
            if(data.length>0)
            return {
                ...state, "selectedWorkFlow": { ...state.selectedWorkFlow, ...data[0],error:false }
            }
            else
            return {
                ...state, "selectedWorkFlow": { ...state.selectedWorkFlow, error:true }
            }
            
        }
        case workActionTypes.WORKFLOW_SELECTED_REMOVE: {

            return {
                ...state, "selectedWorkFlow": {}
            }
        }
        default:
            return state
    }
}


export const nodesReducer = (state: any = NodeStore, action: any) => {
    switch (action.type) {
        case workActionTypes.NODES_ADD: {
            let data = [...state.nodes, {
                id: '_' + Math.random().toString(36).substr(2, 9),
                name: action.item.name,
                status: action.item.status,
                desc: action.item.desc,
                workflowid: action.item.workflowid
            }]
            const nodes = data.filter((flow: any) =>
                flow.workflowid === action.item.workflowid
            )
            return {
                ...state, "selectedNode": [...nodes], "nodes": [...data]
            }
        }
        case workActionTypes.NODES_UPDATE: {
            let data = state.nodes.map((flow: any) =>
                (flow.id === action.item.id)
                    ? {
                        ...flow,
                        name: action.item.name,
                        status: action.item.status,
                        desc: action.item.desc
                    }
                    : flow
            )
            const nodes = data.filter((flow: any) =>
                flow.workflowid === action.item.workflowid
            )
            return {
                ...state, "selectedNode": [...data], "nodes": [...nodes]
            }
        }
        case workActionTypes.NODES_DELETE: {
            const data = [...state.nodes]
            data.pop()
            const nodes = data.filter((flow: any) =>
                flow.workflowid === action.id
            )
            return {
                ...state, "selectedNode": [...nodes], "nodes": [...data]
            }
        }
        case workActionTypes.NODE_SHUFFLE: {
            
            const nodes = state.nodes.filter((flow: any) =>
                flow.workflowid === action.id
            )
            let data = nodes.sort(() => Math.random() - 0.5);
            return {
                ...state, "selectedNode": [...data]
            }
        }
        case workActionTypes.NODES_SELECT: {
            const nodes = state.nodes.filter((flow: any) =>
                flow.workflowid === action.id
            )
            return {
                ...state, "selectedNode": [...state.selectedNode, ...nodes]
            }
        }
        case workActionTypes.WORKFLOW_SELECTED_REMOVE: {

            return {
                ...state, "selectedNode": []
            }
        }
        default:
            return state
    }
}
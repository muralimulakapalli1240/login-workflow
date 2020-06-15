import { workActionTypes } from '../types'

export const addWorkFlow = (item:any)=> ({
    type: workActionTypes.WORKFLOW_ADD,
    item
})
export const updateWorkFlow = (item:any)=> ({
    type: workActionTypes.WORKFLOW_UPDATE,
    item
})
export const deleteWorkFlow = (id:any)=> ({
    type: workActionTypes.WORKFLOW_DELETE,
    id
})
export const workSelected = (id:any)=> ({
    type: workActionTypes.WORKFLOW_SELECTED,
    id
})
export const addNodes = (item:any) => ({
    type: workActionTypes.NODES_ADD,
    item
})
export const updateNodes = (item:any) => ({
    type: workActionTypes.NODES_UPDATE,
    item
})
export const deleteNodes = (id:any) => ({
    type: workActionTypes.NODES_DELETE,
    id
})
export const selectNodes = (id:any) => ({
    type: workActionTypes.NODES_SELECT,
    id
})

export const workRemoveSelected = () => ({
    type: workActionTypes.WORKFLOW_SELECTED_REMOVE
})

export const nodeShuffle = (id:any) => ({
    type: workActionTypes.NODE_SHUFFLE,
    id
})




export const workFilter=(search:any,filter:any)=>({
    type: workActionTypes.WORKFLOW_FILTER,
    search,
    filter
})
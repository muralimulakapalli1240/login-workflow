 
const middleware = (action: any) => (next: any) => {
    next(action);
  };
  
  export default middleware;
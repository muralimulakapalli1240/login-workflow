import React from "react";
import { Context } from "./config";

const mapStateToPropsMock = (obj: any, props: any) => ({
  ...obj,
  ...props
});

const Connect = (mapStateToProps: any) => (Component: any) => {

  return (props: any) => (
    <Context.Consumer>
      {({ dispatch, store }: any) => {
        const storeProps = mapStateToProps
          ? { ...mapStateToProps(store, props) }
          : { ...mapStateToPropsMock(store, props) };
        return <Component {...storeProps} dispatch={dispatch} />;
      }}
    </Context.Consumer>
  );
};

export default Connect;
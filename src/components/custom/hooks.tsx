import React from "react";
import { createGlobalState } from "react-hooks-global-state";


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState(
    
  {
    isEmpty:true,
    counter:0,
  }
);

export { useGlobalState, setGlobalState, getGlobalState };
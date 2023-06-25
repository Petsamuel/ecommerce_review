import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  cart: {
    isEmpty: true,
    counter: 1,
    cartToggle: false,
    status:false
  },
});

export { useGlobalState, setGlobalState, getGlobalState };

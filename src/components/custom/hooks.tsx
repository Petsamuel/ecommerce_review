import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  cart: {
    isEmpty: true,
    counter: 0,
    cartToggle: false,
    status: false,
    add: false,
  },
});

export { useGlobalState, setGlobalState, getGlobalState };

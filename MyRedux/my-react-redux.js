import { useContext } from "react";
import { createContext, useState } from "react";

const StoreContext = createContext();

export function Provider({ children, store }) {
  const [state, setState] = useState(store.getState());
  store.subscribe(() => {
    setState(store.getState());
  });
  return (
    <StoreContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useDispatch = function () {
  const store = useContext(StoreContext);
  return store.dispatch;
};

export const useSelector = function (selector) {
  const store = useContext(StoreContext);
  return selector(store.state);
};

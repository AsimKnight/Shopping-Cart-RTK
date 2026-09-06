import { createStore } from "redux";

//importing my created redux store
import { myCreateStore } from "../MyRedux/myRedux";
import { productsList } from "../productList";

const initialState = {
  post: 0,
  name: "smith",
  age: 36,
};

function reducer(state = initialState, action) {
  if (action.type === "increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "decrement") {
    return { ...state, post: state.post - 1 };
  } else if (action.type === "custom") {
    return { ...state, post: state.post + action.payload };
  } else if (action.type === "reset") {
    return { ...state, post: 0 };
  }

  return state;
}

// const store = createStore(reducer, window?.__REDUX_DEVTOOLS_EXTENSION__?.());
// console.log(store);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "custom", payload: 100 });

// store.dispatch({ type: "reset" });

//=========================log my created store in console=====================================

console.log(myCreateStore);
const myStore = myCreateStore(reducer);

const unsubscribe = myStore.subscribe(() => {
  console.log(myStore.getState());
});

const unsubscribe2 = myStore.subscribe(() => {
  console.log("HI");
});

const unsubscribe3 = myStore.subscribe(() => {
  console.log("Bye");
});

myStore.dispatch({ type: "increment" });
myStore.dispatch({ type: "custom", payload: 100 });
myStore.dispatch({ type: "reset" });
unsubscribe();

myStore.dispatch({ type: "increment" });
myStore.dispatch({ type: "custom", payload: 100 });
myStore.dispatch({ type: "reset" });

myStore.dispatch({ type: "increment" });
myStore.dispatch({ type: "custom", payload: 100 });
myStore.dispatch({ type: "reset" });

// initialState = reducer(initialState, { type: "increment" });
// console.log(initialState);

// initialState = reducer(initialState, { type: "decrement" });
// console.log(initialState);

// initialState = reducer(initialState, { type: "custom", payload: 100 });
// console.log(initialState);

// initialState = reducer(initialState, { type: "reset" });
// console.log(initialState);

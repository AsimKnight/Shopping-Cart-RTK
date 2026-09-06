export const myCreateStore = function (reducer) {
  let state;
  let array = [];

  const myStore = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      array.forEach((el) => el());
    },
    subscribe(listener) {
      array.push(listener);

      return function () {
        const indexOfFunction = array.findIndex((el) => el === listener);
        array.splice(indexOfFunction, 1);
      };
    },
  };
  myStore.dispatch({ type: "@@INIT" });
  return myStore;
};

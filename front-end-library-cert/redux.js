//  create a redux store

const reducer = (state = 5) => {
  return state;
}

let store = Redux.createStore(reducer);

// Get state from the redux store

const store = Redux.createStore(
  (state = 5) => state
);

let currentState = store.getState();

// Define a redux action

const action = {
  type: "LOGIN"
};

// Define an action creator

const action = {
  type: 'LOGIN'
}

function actionCreator() {
  return action;
}
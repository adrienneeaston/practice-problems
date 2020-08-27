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

// Dispatch an action event

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());

// Handle an action in the store

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if(action.type === 'LOGIN') {
    return {login:true};
  }
  return state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Use a switch statement to handle multiple actions

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {authenticated: true};
      break;
    case 'LOGOUT':
      return {authenticated: false};
      break;
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
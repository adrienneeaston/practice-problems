// Getting started with react redux

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }
  render() {
    return <div />
  }
};

// Manage state locally first

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  submitMessage() {
    let messageArray = this.state.messages.concat(this.state.input);
    this.setState({
      messages: messageArray,
      input: ''
    })
  }

  render() {
    const items = this.state.messages.map(element => {
      return <li>{element}</li>
    });
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input}/><br/>
        <button onClick={this.submitMessage}>Submit message</button>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

// Extract state logic to Redux

const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return state.concat(action.message);
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {

  state = {
    username: "defaultUsername",
    text: "input here"
  };

  changeTextHandler = event => {
    this.setState({
      text: event.target.value
    }
    )
  };

  changeUsernameHandler = event => {
    this.setState({
      username: event.target.value
    }
    )
  }

  checkStateHandler = (item) => {
    return console.log(item)
  }

  render() {
    return (
      <div className="App">

        <UserInput
          change={this.changeTextHandler}
          content={this.state.text}>
          please add two paragraph
        </UserInput>

        <UserInput
          change={this.changeUsernameHandler}
          content={this.state.username}>
          please add new username
        </UserInput>

        <UserOutput content={this.state.text}>
        recently added text :
        </UserOutput>

        <UserOutput content={this.state.username}>
        your username :
        </UserOutput>

        <button onClick={()=>this.checkStateHandler(this.state)}>console.log</button>

      </div>
    );
  }
}

export default App;

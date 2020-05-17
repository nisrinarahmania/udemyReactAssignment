import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: "",
    textLenght: null,
    arrText: [],
    id: 'txt001'
  }

  consoleLogHandler = () => {
    console.log(this.state)
  }

  changeTextHandler = (event) => {
    let temp = { ...this.state.text };
    temp = event.target.value;
    this.saveStateHandler(temp);
  }

  saveStateHandler = (text) => {
    const arrayText = text.split(" ");
    this.setState({
      text: text,
      textLenght: text.length,
      arrText: arrayText,
      length: arrayText.length
    });
  }

  deleteTextHandler = (index) => {
    let temp = [...this.state.arrText];
    temp.splice(index, 1);

    let newText = temp.join(' ')
    this.saveStateHandler(newText);
  }

  render() {

    const style = {
      display: 'inline-block', 
      padding: '16px',
      margin: '16px', 
      border: '1px solid black'
  }

    let sentence = (
      <div>
        {this.state.arrText.map((t, index) => {
          return <CharComponent
          deleteText = {this.deleteTextHandler.bind(index)}
          text = {this.state.arrText[index]}
          />
        })}
      </div>
    )

    return (
      <div className="App">

        <h2>enter yout text here</h2>
        <input type="text" onChange={this.changeTextHandler} value={this.state.text} />
        <p>{this.state.textLenght}</p>

        <ValidationComponent textLenght={this.state.textLenght} />

        {sentence}

        <button onClick={this.consoleLogHandler}>check state</button>

      </div>

    );
  }
}

export default App;

import React, { Component} from 'react';
import './App.css';
import './index.css';
import axios from 'axios';


class App extends Component
{
  constructor(){
    super();
    this.state = {
      id: '',
      colors: ["red", "yellow", "blue", "green", "purple", "pink"]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  restartButton(event) {
    this.setState({ id: [] });
  }

  handleClick(){
    axios.get('https://api.github.com/users/maecapozzi')
    .then(response => this.setState({id: response.data.id}))
  }

  changeBg() {
    const { colors } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
  }

  render()
  {
    return (<div className='button_container'>
      <h4><button className='button1' onClick={this.handleClick}>Push Me</button>
    <p>{this.state.id}</p></h4>
    <h4><button className = "button2" onClick={() => this.changeBg()}>Change Color</button></h4>
    <h4><button className ="button3" onClick={ this.restartButton.bind(this) }>Reload</button></h4>
    </div>) 
  }
  
  
}
export default App;
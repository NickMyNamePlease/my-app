import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component
{
  handleClick(){
    // console.log('done!');
    axios.get('https://api.github.com/users/maecapozzi')
    // .then(response => console.log(response));
    .then(response => this.setState({id: response.data.id}))
  }

  handleClick2(){
    // console.log('done!');
    axios.get('https://api.github.com/users/maecapozzi')
    // .then(response => console.log(response));
    .then(response => this.setState({node_id: response.data.node_id}))
  }

  constructor(){
    super();
    this.state = {
      id: ''
    }
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      node_id: ''
    }
    this.handleClick2 = this.handleClick2.bind(this);

  }

  render()
  {
    return (<div className='button_container'>
    <button className='button1' onClick={this.handleClick}>push me</button>
    <p>{this.state.id}</p>
    
    <button className='button2' onClick={this.handleClick2}>push me</button>
    <p>{this.state.node_id}</p>
    </div>)
    
  }
}
export default App;
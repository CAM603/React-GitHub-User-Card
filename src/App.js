import React from 'react';
import axios from 'axios';

import './App.css';
import User from './components/user/User';
import Followers from './components/followers/Followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/cam603`)
    .then(res => {
      this.setState({data: res.data})
    }) 
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <User 
        data={this.state.data}
        />
        <Followers />
      </div>
    );
  }
}

export default App;

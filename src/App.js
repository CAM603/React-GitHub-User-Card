import React from 'react';
import axios from 'axios';

import './App.css';
import User from './components/user/User';
import Followers from './components/followers/Followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: [],
      challenger: {}
    }
  }
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/cam603`)
    .then(res => {
      this.setState({user: res.data, challenger: res.data})
      return axios.get(`https://api.github.com/users/cam603/followers`)
    })
    .then(res => this.setState({followers: res.data}))
    .catch(err => console.log(err))
  }
  change = (name) => {
    axios
    .get(`https://api.github.com/users/${name}`)
    .then(res => {
      this.setState({challenger: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log('challenger', this.state.followers)
    return (
      <div className="App">
        <Followers 
        followers={this.state.followers}
        change={this.change}
        />
        <User 
        user={this.state.user}
        challenger={this.state.challenger}
        />
      </div>
    );
  }
}

export default App;

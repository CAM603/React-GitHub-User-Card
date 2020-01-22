import React from 'react';
import axios from 'axios';

import './App.css';
import User from '../components/user/User';
import Followers from '../components/followers/Followers';
import Navigation from './Navigation';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: [],
      challenger: {},
      fighting: false
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

  changeP1 = (name) => {
    axios
    .get(`https://api.github.com/users/${name}`)
    .then(res => {
      this.setState({user: res.data})
      return axios.get(`https://api.github.com/users/${name}/followers`)
    })
    .then(res => this.setState({followers: res.data}))
    .catch(err => console.log(err))
  }

  toggleFight = () => {
    this.setState({fighting: !this.state.fighting})
  }

  render() {
    return (
      <div className="App">
        <Navigation 
        changeP1={this.changeP1}
        />
        <Followers 
        followers={this.state.followers}
        change={this.change}
        user={this.state.user}
        challenger={this.state.challenger}
        fighting={this.state.fighting}
        />
        <User 
        user={this.state.user}
        challenger={this.state.challenger}
        toggleFight={this.toggleFight}
        />
      </div>
    );
  }
}

export default App;

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
      user: null,
      followers: [],
      challenger: null,
      startGame: false,
      fighting: false,
      loading: false
    }
  }
  
  startGame = (name) => {
    this.setState({loading: true})
    axios
    .get(`https://api.github.com/users/${name}`)
    .then(res => {
      this.setState({user: res.data})
      return axios.get(`https://api.github.com/users/${name}/followers`)
    })
    .then(res => {
      this.setState({followers: res.data, loading: false, startGame: true})
    })
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

  toggleFight = () => {
    if(!this.state.challenger) {
      return
    }
    this.setState({fighting: !this.state.fighting})
  }

  endGame = () => {
    this.setState({startGame: false, fighting: false})
  }

  render() {
    let display;

    if(this.state.startGame) {
      display = 
        <>
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
          fighting={this.state.fighting}
          endGame={this.endGame}
          />
        </>
    } else {
      display = 
        <Navigation 
        startGame={this.startGame}
        />
    }
    return (
      <div className="App">
        {this.state.loading ? <h1 style={{color: "white"}}>Loading</h1> : display}
      </div>
    );
  }
}

export default App;

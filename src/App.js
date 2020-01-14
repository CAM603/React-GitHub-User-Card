import React from 'react';
import axios from 'axios';

import './App.css';
import User from './components/user/User';
import Followers from './components/followers/Followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: {},
      followers: []
    }
  }
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/cam603`)
    .then(res => {
      this.setState({data: res.data})
      return axios.get(`https://api.github.com/users/cam603/followers`)
    })
    .then(res => this.setState({followers: res.data}))
    .catch(err => console.log(err))
  }
  change = (name) => {
    axios
    .get(`https://api.github.com/users/${name}`)
    .then(res => {
      this.setState({data: res.data})
      return axios.get(`https://api.github.com/users/${name}/followers`)
    })
    .then(res => this.setState({followers: res.data}))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.followers)
    return (
      <div className="App">
        <User 
        data={this.state.data}
        />
        <Followers 
        followers={this.state.followers}
        change={this.change}
        />
      </div>
    );
  }
}

export default App;

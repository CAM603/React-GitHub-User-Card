import React from 'react';
import { StyledFight } from '../components/styles/StyledFight';
import UserChart from '../components/user/UserChart';

class Fight extends React.Component {
    constructor(props) {
        super(props)
    }
    userName = this.props.user.login;
    challengerName = this.props.challenger.login
    userRepos = this.props.user.public_repos;
    challengerRepos = this.props.challenger.public_repos;
    render() {
        
        return (
            <div className="fight">
                <StyledFight>
                    <table>
                        <tr>
                            <th>Stat</th>
                            <th>{this.userName}</th>
                            <th>{this.challengerName}</th>
                            <th>Winner</th>
                        </tr>
                        <tr>
                            <td>Repos</td>
                            <td>{this.userRepos}</td>
                            <td>{this.challengerRepos}</td>
                            <td>{this.userRepos > this.challengerRepos ? this.userName : this.challengerName}</td>
                        </tr>
                    </table>
                </StyledFight>
                <div>
                    <h3>Player 1</h3>
                    <UserChart login={this.userName}/>
                    <h3>Player 2</h3>
                    <UserChart login={this.challengerName}/>
                </div>
            </div>
        )
    }
}

export default Fight;
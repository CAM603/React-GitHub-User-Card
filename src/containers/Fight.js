import React from 'react';
import { StyledFight } from '../components/styles/StyledFight';

class Fight extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let userName = this.props.user.login;
        let challengerName = this.props.challenger.login
        let userRepos = this.props.user.public_repos;
        let challengerRepos = this.props.challenger.public_repos;
        
        return (
            <div className="fight">
                <StyledFight>
                    <table>
                        <tr>
                            <th>Stat</th>
                            <th>{userName}</th>
                            <th>{challengerName}</th>
                            <th>Winner</th>
                        </tr>
                        <tr>
                            <td>Repos</td>
                            <td>{userRepos}</td>
                            <td>{challengerRepos}</td>
                            <td>{userRepos > challengerRepos ? userName : challengerName}</td>
                        </tr>
                    </table>
                </StyledFight>
            </div>
        )
    }
}

export default Fight;
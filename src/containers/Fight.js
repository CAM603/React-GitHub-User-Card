import React from 'react';
import { StyledFight } from '../components/styles/StyledFight';
import { StyledButton } from '../components/styles/StyledButton';

class Fight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fight: false
        }
    }
    render() {
        let userName = this.props.user.login;
        let challengerName = this.props.challenger.login
        let userRepos = this.props.user.public_repos;
        let challengerRepos = this.props.challenger.public_repos;

        let battle = null;

        if (this.state.fight) {
            battle = (
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
            )
        }
        
        return (
            <div className="fight">
                {battle}
                <StyledButton 
                onClick={() => this.setState({fight: !this.state.fight})}
                fight={this.state.fight}
                >{this.state.fight ? 'Hide' : 'Fight!'}
                </StyledButton>
            </div>
        )
    }
}

export default Fight;
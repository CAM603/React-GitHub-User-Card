import React from 'react';

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
                <div>
                    <table>
                        <tr>
                            <th>Stat</th>
                            <th>P1</th>
                            <th>P2</th>
                            <th>Winner</th>
                        </tr>
                        <tr>
                            <td>Repos</td>
                            <td>{userRepos}</td>
                            <td>{challengerRepos}</td>
                            <td>{userRepos > challengerRepos ? userName : challengerName}</td>
                        </tr>
                        
                    </table>
                </div>
            )
        }
        
        return (
            <div style={{width: '100%', zIndex: '1', position: 'absolute', top: '68%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {battle}
                <button onClick={() => this.setState({fight: !this.state.fight})}>Fight!</button>
            </div>
        )
    }
}

export default Fight;
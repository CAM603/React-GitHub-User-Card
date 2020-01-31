import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handleChange = e => {
        this.setState({name: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.startGame(this.state.name);
        this.setState({name: ''})
    }
    render() {
        return (
            <div style={{width: '100%', background: 'white'}}>
                <form onSubmit={this.handleSubmit}>
                    <label>Choose Player 1</label>
                    <input
                    type='text'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Change</button>
                </form>
            </div>
        )
    }
}

export default Navigation;
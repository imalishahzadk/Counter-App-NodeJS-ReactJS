import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            error: ''
        };
    }

    Increment = () => {
        this.setState({
            error: ''
        });
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    Decrement = () => {
        if (this.state.count === 0) {
            this.setState({
                error: 'Cannot be zero'
            });
        } else {
            this.setState({
                error: '',
                count: this.state.count - 1
            });
        }
    }

    render() {
        return (
          <div style={{backgroundColor: this.props.bgColor}}>

                <span>{this.state.count}Counter</span>
                <button onClick={this.Increment}>INCREASE</button>
                <button onClick={this.Decrement}>DECREASE</button>
                <span>{this.state.error}</span>
            </div>
        );
    }
}
export default Counter
import { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      incrementButtonStyle: {},
      decrementButtonStyle: {},
      resetButtonStyle: {}
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleIncrementMouseEnter = () => {
    this.setState({ incrementButtonStyle: { color: 'black' } });
  };

  handleIncrementMouseLeave = () => {
    this.setState({ incrementButtonStyle: { color: '' } });
  };

  handleDecrementMouseEnter = () => {
    this.setState({ decrementButtonStyle: { color: 'black' } });
  };

  handleDecrementMouseLeave = () => {
    this.setState({ decrementButtonStyle: { color: '' } });
  };

  handleResetMouseEnter = () => {
    this.setState({ resetButtonStyle: { color: 'black' } });
  };

  handleResetMouseLeave = () => {
    this.setState({ resetButtonStyle: { color: '' } });
  };

  render() {
    const {
      count,
      incrementButtonStyle,
      decrementButtonStyle,
      resetButtonStyle
    } = this.state;

    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button
          onClick={this.handleIncrement}
          onMouseEnter={this.handleIncrementMouseEnter}
          onMouseLeave={this.handleIncrementMouseLeave}
          style={incrementButtonStyle}
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          onMouseEnter={this.handleDecrementMouseEnter}
          onMouseLeave={this.handleDecrementMouseLeave}
          style={decrementButtonStyle}
        >
          -
        </button>
        <button
          onClick={this.handleReset}
          onMouseEnter={this.handleResetMouseEnter}
          onMouseLeave={this.handleResetMouseLeave}
          style={resetButtonStyle}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default CounterApp;

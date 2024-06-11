import { Component } from 'react';

interface Props{
  count: number;
}

interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  intervalID: number;
  constructor(props: Props, intervalID: number) {
    super(props);
    this.intervalID = intervalID
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.incrementCount(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % 11
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;

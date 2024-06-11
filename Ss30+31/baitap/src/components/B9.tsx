import { Component } from 'react';

interface Props{
  time: Date;
}

interface State{
  time: Date;
}

class Clock extends Component<Props, State> {
  timerID: number;
  constructor(props: Props, timerID: number) {
    super(props);
    this.timerID = timerID; 
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>Thời gian hiện tại: {this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;

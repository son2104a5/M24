import { Component } from 'react';

interface Props{
  message: string;
}

interface State{
  message: string;
}

class MyComponent extends Component<Props, State> {
  shouldComponentUpdate(nextProps: Props){
    // Ngăn chặn việc render lại nếu prop không thay đổi
    return nextProps.message !== this.props.message;
  }

  render() {
    const { message } = this.props;

    return (
      <div>
        <h1>Message: {message}</h1>
      </div>
    );
  }
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: "Interface rendering"
    };
  }

  handleClick = () => {
    // Cập nhật giá trị của prop từ component App
    this.setState({
      message: "Interface rendering"
    });
    console.log(this.state.message);
    
  };

  render() {
    return (
      <div>
        <MyComponent message={this.state.message} />
        <button onClick={this.handleClick}>Update Message</button>
      </div>
    );
  }
}

export default App;

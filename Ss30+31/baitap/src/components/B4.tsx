import { Component } from 'react';

interface Props{
  slogan: string;
}

interface State{
  slogan: string;
}

class MyComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slogan: 'Học code để đi làm',
    };
  }

  handleChange = () => {
    this.setState((prevState: Props)=>{
      slogan: 'Học code để làm'
    });
  };

  shouldComponentUpdate() {
    console.log(this.state.slogan);
    return true;
  }

  render() {
    return (
      <div>
        <h1>Slogan: {this.state.slogan}</h1>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}

export default MyComponent;

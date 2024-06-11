import { Component } from 'react';

interface Props {
  data: string;
}

interface State {
  newData: string;
}

class MyComponent extends Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Status: {data}</h1>
      </div>
    );
  }
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newData: "Open the form"
    };
  }

  updateData = () => {
    this.setState({
      newData: "Close the form"
    });
  };

  render() {
    return (
      <div>
        <MyComponent data={this.state.newData} />
        <button onClick={this.updateData}>Update Data</button>
      </div>
    );
  }
}

export default App;

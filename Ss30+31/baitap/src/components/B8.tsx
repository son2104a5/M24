import React, { Component } from 'react';

interface Props{
  title: string;
}

interface State{
  inputValue: string;
}

class InputComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.inputValue !== this.state.inputValue) {
      document.title = this.state.inputValue || "Default Title";
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleInputChange} 
          placeholder="Enter title" 
        />
      </div>
    );
  }
}

export default InputComponent;

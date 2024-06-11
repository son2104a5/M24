import { Component } from 'react'

interface Props {
  userName: string;
}

interface State {
  userName: string;
}

export default class B1 extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      userName: 'Nguyễn Đắc Sơn',
    }
  }
  
  render() {
    return (
      <div>
        Name: {this.state.userName}
      </div>
    )
  }
}

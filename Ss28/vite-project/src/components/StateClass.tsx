import React, { Component } from 'react'

interface ClassComponent {
    name: string
    age: number
    address: string
    count: number
}

export default class StateClass extends Component<any, ClassComponent> {
    increase = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    constructor(props: ClassComponent){
        super(props)
        this.state = { 
            name: 'abc',
            address: 'HN',
            age: 22,
            count: 1
        }
    }
  render() {
    return (
      <div>StateClass
        <p>xin chào {this.state.name}</p>
        <p>giá trị count ban đầu {this.state.count}</p>
        <button onClick={this.increase}>Tăng</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

interface ClassComponent {
    age: number
    numbers: Array<number>
}

export default class Class extends Component<ClassComponent> {
    // destructoring
  render() {
    // const {age} = this.props
    return (
      <div>Class
        <p>năm nay mt {this.props.age} tuổi</p>
        <ul>
            {this.props.numbers.map((item: number, index: number) =>{
                return <li key={index}>{item}</li>
            })}
        </ul>
      </div>
    )
  }
}

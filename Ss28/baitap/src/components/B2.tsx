import { Component } from 'react'

interface ClassComponent {
    id: number
    name: string
    dOB: string
    address: string
}

export default class B2 extends Component<any, ClassComponent> {
    constructor(props: ClassComponent){
        super(props)
        this.state = { 
            id: 1,
            name: 'Nguyễn Đắc Sơn',
            dOB: '21/08/2004',
            address: 'Từ Sơn, Bắc Ninh'
        }
    }
  render() {
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <p>id: {this.state.id}</p>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.dOB}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}

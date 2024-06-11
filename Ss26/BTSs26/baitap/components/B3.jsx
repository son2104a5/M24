import React, { Component } from 'react'

export default class B3 extends Component {
    constructor(){
        super()
        this.state = {
            fullName: 'Nguyễn Văn A',
            gender: 'Nam',
            dateOfBirth: '06/03/2024',
            email: 'nva@gmail.com',
            address: 'Thanh Xuân, Hà Nội'
        }
    }
  render() {
    return (
      <div>
        <h1>Thông tin cá nhân:</h1>
        <ul>
          <li>Họ và tên: {this.state.fullName}</li>
          <li>Giới tính: {this.state.gender}</li>
          <li>Ngày sinh: {this.state.dateOfBirth}</li>
          <li>Email: {this.state.email}</li>
          <li>Địa chỉ: {this.state.address}</li>
        </ul>
      </div>
    )
  }
}

import { Component } from 'react'

export default class Class extends Component {
    // khai báo các phương thức
    handleClick = () =>{
        console.log("sk click khi click vào button!");
    }
    // truyền để lấy tham số
    handleUpdate = (userID:any) =>{
        console.log(userID);
        
    }
  render() {
    return (
      <div>
        Class
        <p><button onClick={this.handleClick}>click</button></p>
        <p><button onClick={()=>this.handleUpdate(11)}>MT</button></p>
        </div>
    )
  }
}

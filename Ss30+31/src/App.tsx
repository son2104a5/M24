import React, { Component } from 'react'

interface Props{
  name: string
  age: number
  count: number
}

interface State{
  name: string
  age: number
  count: number
}

export default class App extends Component<Props,State> {
  constructor(props: Props) {
    super(props)
    this.state = { 
      // chứa những dữ liệu
      name: 'abc',
      age: 20,
      count: 0
    }
    console.log("giai đoạn khởi tạo");
  }

  // phương thức thay đổi state
  // khi muốn thay đổi state đối với class component thì dùng this.setState
  handleClick = () => {
    this.setState({count: this.state.count+1})
  }
  
  componentWillMount(): void {
    console.log('componentWillMount được gọi');
    // chạy trước render cho nên ở component có thể tính toán lại state hoặc props
    // nhưng nên lưu ý thời gian mà chuyển sang render nhanh
  }
  componentDidMount(): void {
    console.log('componentDidMount được gọi');
    // chạy sau khi component render lần đầu tiên
    // các thành phần của component được gắn vào DOM
    // có thể thực hiện các tương tác với DOM
    // nơi lí tưởng để callAPI lấy data render ra component
  }
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    console.log(1111111);
    
    return true
  }
  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
    console.log("phương thức componentWillUpdate được gọi");
    // chạy trước re-render nên thằng cx có thể dùng tính toán lại state hoặc props
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log("phương thức componentDidUpdate được gọi");
    // chạy sau khi component re-render
    // các phần tử của component nó được gắn kết vào DOM cho nên nó có thể dùng tương tác với DOM
  }
  componentWillUnmount(): void {
    console.log("phương thức componentWillUnmount được gọi");
    // chạy cuối cùng khi phần tử xóa khỏi DOM
    // thường dùng để clear time-out... xóa khỏi bộ nhớ
  }
  render() {
    console.log('component bắt đầu render');
    // không được setState ở đây vì component nó re-render liên tục ==> chạy vô hạn!
    
    return (
      <div>
        {/* 
          tạo class component
          lifecycle (vòng đời của 1 component==>chỉ áp dụng với class) trải qua 4 gđ:
          1. gđ khởi tạo (initial)
          - khởi tạo state
          2. gđ mounting (gắn vào thêm vào)
          - Cung cấp các phương thức mặc định (có sẵn rồi)
          - sau khi gđ khởi tạo xong thì tiếp đến chạy 
          vào phương thức componentWillMount()==>render==>componentDidMount()
          3. gđ update (thay đổi)
          - xảy ra khi state hoặc props thay đổi thì chạy vào giai đoạn update
          - cung cấp các phương thức:
            + shouldComponentUpdate() (bắt buộc phải return true/false, nếu không khai báo hàm thì mặc định là true)
            + componentWillUpdate()
            + componentDidUpdate()
          4. gđ unmounting (gỡ bỏ xóa bỏ)
          - xảy ra khi component bị gỡ bỏ khỏi dom
        */}
        {this.state.name}
        <p>giá trị biến count: {this.state.count}</p>
        <button onClick={this.handleClick}>count</button>
      </div>
    )
  }
}

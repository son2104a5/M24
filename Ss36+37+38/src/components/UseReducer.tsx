import React, { useReducer } from 'react'

export default function UseReducer() {
// khai báo giá trị khởi tạo'
const initial:number = 0;
// khởi tạo hàm reducer
const reducer = (state = initial, action:any) =>{
    switch (action.type) {
        case "increase":
            return state + action.payload;
        case "decrease":
            return state - action.payload;
        default:
            return state;
    }
} 

// đối với những action có kiểu dũ liệu phức tạp thì nên tạo 1 function
const action = (type:any,payload:any) =>{
    return{
        type:type,
        payload:payload
    }
}

const [count, dispatch] = useReducer(reducer, initial);
const increase = () =>{
    dispatch({
        payload:1,
        type:"increase"
    });
}
const decrease = () =>{
    dispatch({
        payload: 1,
        type:"decrease"
    });
}
  return (
    <div>UseReducer
        {/* 
            1. sinh ra để quản lí những state phức tạp
              - khi muốn quản lí state thì thường các em dùng useState (quản lí những state đơn giản)
              - về bản chất những gì useState làm đcượ thì reducer cũng làm đc nhưng  nó sẽ đi những state phức tạp hơn
            2. tiền đề sau này học redux(thư viện giúp tạo ra 1 kho chứa dữ liệu)
              

            cách dùng:
            - nó là hook để dùng
            B1: import nó vào
            B2: useReducer();
             nhận vào 2 tham số
             1. là 1 hàm reducer
             2. giá trị khởi tạo

        */}
        <button onClick={decrease}>giảm</button>
        <button onClick={increase}>tăng</button>
        <p>Giá trị của biến count: {count}</p>
    </div>
  )
}

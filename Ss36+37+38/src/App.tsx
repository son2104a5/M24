import { useCallback, useState } from "react";
// import Memo from "./components/Memo";
// import UseCallback from "./components/UseCallback";
// import UseContext from "./components/UseContext";
// import UseEffect from "./components/UseEffect";
// import UseMemo from "./components/UseMemo";
// import UseReducer from "./components/UseReducer";
// import UseRef from "./components/UseRef";
import UseReducerAdvanced from "./components/UseReducerAdvanced";


export default function App() {
  // const [count, setCount] = useState<number>(0)
  // const increase = useCallback(()=>{
  //   const handleIncrease = () => {
      
  //   }  
  //   return handleIncrease
  // },[])
  // khi mỗi lần function app re-render thì lại tạo ra 1 biến handleIncrease và gán giá trị là 1 function
  // function là kiểu dữ liệu tham chiếu reference-type cứ mỗi lần sẽ tạo biến mới là gán địa chỉ mới
  return (
    <div>
      {/* <p>Giá trị của count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Click</button> */}
      {/* 
        Trong component App mỗi khi component re-render || render lần đầu thì các component con sẽ render
       */}
      {/* <UseEffect></UseEffect>
      <UseRef></UseRef>
      <Memo count={count} increase={increase}></Memo>
      <UseContext></UseContext>
      <UseReducer></UseReducer>
      <UseMemo></UseMemo>
      <UseCallback></UseCallback> */}
      <UseReducerAdvanced></UseReducerAdvanced>
    </div>
  )
}

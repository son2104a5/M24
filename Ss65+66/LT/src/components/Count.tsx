import { useDispatch, useSelector } from "react-redux"


export default function Count() {
    // Để lấy dữ liệu ở trong kho: dùng useSelector()
    const stateCount: any = useSelector(state => state)
    // useSelector nhiệm vụ là kiểm tra xem state có thay đổi hay không
    // thì cập nhật lại UI
    // Những state phải thay đổi : [...]
    // muốn bắn action (hành động tương tác) ==> dùng useDispatch 
    const dispatch = useDispatch()
    const increase = () => {
        dispatch({type: 'INCREASE'})
    }
    const decrease = () => {
        dispatch({type: 'DECREASE'})
    }
  return (
    <div>
        <p>Giá trị count: {stateCount}</p>
        <button onClick={decrease}>Giảm</button>
        <button onClick={increase}>Tăng</button>
    </div>
  )
}

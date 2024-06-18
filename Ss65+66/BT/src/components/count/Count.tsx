import { useDispatch, useSelector } from "react-redux"

interface Count {
  count: number;
}

export default function Count() {
    const stateCount: any = useSelector((state: Count) => state.count)
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

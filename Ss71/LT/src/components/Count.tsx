import { useDispatch, useSelector } from "react-redux"
import { increase } from "../store/reducer/countReducer"

export default function Count() {
  const state: any = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div>
        <p>Giá trị count: {state.count}</p>
        <button onClick={()=>dispatch(increase())}>Tăng</button>
    </div>
  )
}

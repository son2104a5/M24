import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer";

interface ChangeColor {
    color: string;
}

export default function ChangeColor() {
    const color = useSelector((state: RootType) => state.changeColor)
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch({ type: 'CHANGE_COLOR' })
    }
  return (
    <div style={{ backgroundColor: `${color ? 'black' : 'white' }`, width: '20%', height: '100px', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', display: 'flex' }}>
        <input type="checkbox" style={{ marginRight: '20px'}} onChange={handleChange} />
        <p style={{ color: `${color ? 'white' : 'black' }`}}>{color ? 'Tối' : 'Sáng'}</p>
    </div>
  )
}

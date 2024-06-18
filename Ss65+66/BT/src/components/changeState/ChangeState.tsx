import { useState } from "react"
import { useDispatch } from "react-redux"


export default function ChangeState() {
    const [stateChange, setStateChange] = useState('Rikkei Academy')
    const dispatch = useDispatch()
    const changeState = () => {
        stateChange === 'Rikkei Academy' ? setStateChange('RikkeiSoft') : stateChange === 'RikkeiSoft' ? setStateChange('Rikkei Academy') : ''
        dispatch({ type: 'SET_STATE', payload: stateChange })
    }
  return (
    <div>
        <p>{stateChange}</p>
        <button onClick={changeState}>Change state</button>
    </div>
  )
}

import React, {useState} from 'react'
import Model from './Model'

export default function Condition() {
    const [active, setActive] = useState<boolean>(false)
    const handleClick = () => {
        setActive(!active)
    }
  return (
    <div>
        Condition (điều kiện để render)<br />
        {active ? <Model></Model>:""} 
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

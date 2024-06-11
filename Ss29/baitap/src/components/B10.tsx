import { useState } from 'react'

export default function B10() {
    const [gender, setGender] = useState<string>("Nam")
    const changeGender = () => {
        let check = Math.floor(Math.random() * 3)
        console.log(check);
        if(check === 0){
            setGender("Nam")
        }else if(check === 1){
            setGender("Nữ")
        }else if(check === 2){
            setGender("Khác")
        }
    }
  return (
    <div>
        <b>Gender: {gender}</b>
        <br />
        <button onClick={changeGender}>Random gender</button>
    </div>
  )
}

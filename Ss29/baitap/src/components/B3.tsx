import React, {useState} from 'react'

export default function B3() {
    const [date, setDate] = useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }
  return (
    <div>
        <b>Thời gian: {date}</b>
        <br />
        <input type="date" name="" id="" value={date} onChange={handleChange}/>
    </div>
  )
}

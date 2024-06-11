import React, {useState} from 'react'

export default function B2() {
    const [data, setData] = useState<string>("")
    let text;
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setData(e.target.value)
        text = data
    }
  return (
    <div>
        <b>Dữ liệu người dùng nhập: {data}</b>
        <br />
        <input type="text" value={data} onChange={handleChange}/>
    </div>
  )
}

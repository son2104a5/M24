import React, {useState} from 'react'

export default function B4() {
    const [data, setData] = useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        setData(e.target.value)
    }
  return (
    <div>
        <b>Tỉnh / Thành phố: {data}</b>
        <br />
        <select onChange={handleChange} name="" id="" value={data}>
            <option value="">--- Chọn tỉnh / Thành phố ---</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Hà Tĩnh">Hà Tĩnh</option>
        </select>
    </div>
  )
}

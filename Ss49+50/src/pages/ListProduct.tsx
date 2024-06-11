import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function ListProduct() {
    const [searchParam, setSearchParam] = useSearchParams()
    const [inputValue, setInputValue] = useState('')
    const paramValue = searchParam.get('key')  // Lấy dữ liệu trên Params
    const handleSearch = () => {
        setSearchParam({key: inputValue})  // Truyền dữ liệu lên Params
    }
  return (
    <div>
        <Link to={'/product-detail'}>Xem chi tiết</Link>
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        <button className='bg-blue-200 p-2 ml-3 rounded' onClick={handleSearch}>Tìm kiếm</button>
    </div>
  )
}

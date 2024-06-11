import React, { useState } from 'react'

interface User {
    name: string
    id: number
    email: string
}

export default function Input() {
    const [user, setUser] = useState<User>({
        name: '',
        id: 0,
        email: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setUser({...user, name: value})
    }

  return (
    <div>
        <label htmlFor="">Username: </label>
        <input type="text" name='name' onChange={handleChange}/>
        <br />
        <label htmlFor="">Email: </label>
        <input type="text" name='email' onChange={handleChange} />
    </div>
  )
}

import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import './style.css'

interface Function {
  cancel: MouseEventHandler<HTMLElement>
  change: ChangeEventHandler<HTMLInputElement>
  submit: MouseEventHandler<HTMLElement>
}

interface Student {
  count: number;
  id: string;
  name: string;
  status: boolean
  dOB: string
  email: string
}

export default function addStd({cancel, change, submit}: Function) {
  return (
    <div className='formStudent'>
      <form action='#' className='formStudent-content'>
        <div style={{
          marginBottom: '30px',
          display: 'flex',
          justifyContent:'space-between',
          alignItems: 'center',
          fontSize: '21px'
        }}>
          <strong>Thêm mới sinh viên</strong>
          <b style={{cursor: 'pointer'}} onClick={cancel}>X</b>
        </div>
        <div style={{
            marginBottom: '10px',
        }}>
          <label>Mã sinh viên</label>
          <br/>
          <input name='id' type="text" className='contentForm' onChange={change}/>
        </div>
        <div style={{
            marginBottom: '10px',
        }}>
          <label>Tên sinh viên</label>
          <br />
          <input name='name' type="text" className='contentForm' onChange={change}/>
        </div>
        <div style={{
            marginBottom: '10px',
        }}>
          <label>Ngày sinh</label>
          <br />
          <input name='dOB' type="date" className='contentForm' onChange={change}/>
        </div>
        <div style={{
            marginBottom: '20px',
        }}>
          <label>Email</label>
          <br />
          <input name='email' type="email" className='contentForm' onChange={change}/>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px'
        }}>
          <button onClick={cancel} style={{backgroundColor: '#fff', padding: '7px', color: '0', border: '1px solid black', borderRadius: '5px', cursor: 'pointer'}}>Hủy</button>
          <button onClick={submit} style={{backgroundColor: 'blue', padding: '7px', color: '#fff', border: '1px solid transparent', borderRadius: '5px', cursor: 'pointer'}}>Thêm mới</button>
        </div>
      </form>
    </div>
  )
}

import { useState } from 'react'
import "./B10.css";

const date = new Date()
const day = date.getDate()
const year = new Date(day).getFullYear()
const month = date.getMonth() + 1
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()

export default function B10() {
    const [Job, setJobs] = useState([
        { id: 1, name: "Nguyễn Văn A", assign: "Thiết kế giao diện Header", status: true, create_at: `${day}/${month}/${year} ${hour}:${minute}:${second}`},
        { id: 2, name: "Nguyễn Văn B", assign: "Thiết kế giao diện Footer", status: false, create_at: `${day}/${month}/${year} ${hour}:${minute}:${second}`}
    ])
  return (
    <div style={{
        background: "white",
        color: "#c6bbe9"
    }}>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên công việc</th>
                    <th>Người thực hiện</th>
                    <th>Trạng thái</th>
                    <th>Thời gian tạo</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {
                    Job.map((item, index) => {
                        let text;
                        if (item.status) {
                            text = <td style={{
                                border: '1px solid #e6f8d8',
                                padding: '1px',
                                color: '#a0c473',
                                background: '#f6ffee',
                                textAlign: 'center',
                                borderRadius: '5px',
                            }}>Hoàn thành</td>
                        }else{
                            text = <td style={{
                                border: '1px solid #ffdddb',
                                borderRadius: '5px',
                                padding: '3px',
                                color: '#e99899',
                                background: '#fff1f0',
                                textAlign: 'center'
                            }}>Chưa hoàn thành</td>
                        }
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.assign}</td>
                                {text}
                                <td>{item.create_at}</td>
                                <td>
                                    <button style={{
                                        border: '1px solid #fff0d5',
                                        borderRadius: '5px',
                                        padding: '3px',
                                        color: '#e3b490',
                                        background: '#fff7e7',
                                        textAlign: 'center'
                                    }}>Sửa</button>
                                    <button style={{
                                        border: '1px solid #ffdddb',
                                        borderRadius: '5px',
                                        padding: '3px',
                                        color: '#e99899',
                                        background: '#fff1f0',
                                        textAlign: 'center'
                                    }}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

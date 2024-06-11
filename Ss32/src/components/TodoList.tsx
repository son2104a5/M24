import React, { useState } from 'react'
import JobItem from './JobItem'
import { v4 as uuidv4 } from 'uuid'

type Job = {
    id: string
    name: string
    status: boolean
}

export default function TodoList() {
    const [inputValue, setInputValue] = useState<string>("") // State lưu giá trị trong ô input
    const [showErr, setShowErr] = useState<boolean>(false)  // State để lưu kiểm tra trạng thái ẩn/hiện lỗi
    const [jobLocal, setJobLocal] = useState<Job[]>(()=>{
        const listJobLocal = localStorage.getItem('jobs')

        const listJob = listJobLocal ? JSON.parse(listJobLocal) : []

        return listJob
    })
    const [stateFake, setStateFake] = useState<number>(0)
    // Lấy giá trị trong ô input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Cập nhật lại giá trị của state
        setInputValue(e.target.value)
        // Validate dữ liệu đầu vào
        if (!e.target.value) {
            setShowErr(true)
        } else {
            setShowErr(false)
        }
    }
    // Hàm lưu dữ liệu lên localStorage
    const saveLocalStorage = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    // Hàm thêm mới công việc
    const handleCreateJob = () => {
        // Kiểm tra điều kiện input đã có dữ liệu chưa
        if (inputValue) {
            const job: Job = {
                id: uuidv4(),
                name: inputValue,
                status: false
            }
            // Đẩy dữ liệu lên localStorage
            setJobLocal([...jobLocal, job])
            jobLocal.push(job)
            // Lưu dữ liệu lên local
            localStorage.setItem("jobs", JSON.stringify(jobLocal))
            // Reset lại giá trị value
            setInputValue("")
        }
        
    }
    // Hàm xử lí thay đổi trạng thái công việc
    const handleChangeStatus = (id: string) => {
        // Tìm kiếm vị trí của công việc cần cập nhật
        const findIndexJob = jobLocal.findIndex((job: Job)=>job.id === id);
        
        if(findIndexJob === -1){
            alert("Không tìm thấy")
        }else{
            // Thay đổi trạng thái công việc
            jobLocal[findIndexJob].status = !jobLocal[findIndexJob].status
            // Cập nhật lại state
            setStateFake(Math.random())
            // Lưu lại dữ liệu lên localStorage
            saveLocalStorage("jobs", jobLocal)
        }
    }
  return (
    <>
        <div className="todo-container">
        <h2 style={{
            textAlign: "center"
        }}>ToDo List</h2>
        <div className="input-container">
          <input type="text" id="taskInput" placeholder="Add new task..." onChange={handleChange} value={inputValue}/>
          <button className="button" onClick={handleCreateJob}>Add Task</button>
        </div>
        {
            showErr && (<span className='error'>Tên công việc không được phép để trống.</span>)
        }
        <ul id="taskList">
            {/* Render danh sách công việc ra ngoài giao diện */}
            {
                jobLocal.map((job) =>{
                    return <JobItem key={job.id} job={job} handleChangeStatus={handleChangeStatus}></JobItem>
                })
            }
        </ul>
        <p>
          Tasks completed: <span id="completedTasks">0</span>
        </p>
      </div>
    </>
  )
}

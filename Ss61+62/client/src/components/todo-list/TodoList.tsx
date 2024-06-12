import axios from "axios"
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import FullList from "./FullList";
import CompleteList from "./CompleteList";
import UncompleteList from "./UncompleteList";
import './style.css'

type Job = {
  job_name: string
  id: number
  status: boolean
  }
  

export default function TodoList() {
  const [comfirm, setConfirm] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [checkComplete, setCheckComplete] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [editInputValue, setEditInputValue] = useState<string>('')
  const [check, setCheck] = useState<boolean>(false)
  const [checkEdit, setCheckEdit] = useState<boolean>(false)
  const [checkSame, setCheckSame] = useState<boolean>(false)
  const [checkSameEdit, setCheckSameEdit] = useState<boolean>(false)
  const [jobId, setJobId] = useState<number>(0)
  const [job, setJob] = useState<string>('')
  const [jobs, setJobs] = useState<Job[]>([])
  const loadData = () => {
      axios.get("http://localhost:3000/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }
  loadData()
  const setStatus = (id: number) => {
    const result:any = jobs.find(j => j.id === id);
    axios.patch(`http://localhost:3000/jobs/${id}`, {
      status:!result.status
    })
    .then(res => loadData())
    .catch(err => console.log(err))
    checkCompleteJob()
  }
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value)
  }
  const openFormDelete = (id: number, name: string) => {
    setConfirm(true)
    setJobId(id)
    setJob(name)
  }
  const openFormEdit = (id: number, name: string) => {
    setEdit(true)
    setJobId(id)
    setJob(name)
    setEditInputValue(name)
  }
  const closeFormEdit = () => {
    setEdit(false)
  }
  const editJob = (id: number) => {
    const find = jobs.find(job => job.job_name === editInputValue)
    if(editInputValue === '') {
      setCheckEdit(true)
    } else if (find) {
      setCheckEdit(false)
      setCheckSameEdit(true)
    } else {
      axios.patch(`http://localhost:3000/jobs/${id}`, {
        job_name: editInputValue
      })
      .then(res => loadData())
      .catch(err => console.error(err))
      setCheckEdit(false)
      setCheckSameEdit(false)
      closeFormEdit()
    }
  }
  const checkCompleteJob = () => {
    let count: number = 0
    jobs.map(job => {
      if (job.status === true) {
        count++
      } 
      console.log(count); 
      if (count === jobs.length-1) {
        setCheckComplete(true)
        loadData()
      }
    })
  }
  const closeFormDelete = () => {
    setConfirm(false)
  }
  const closeFormComplete = () => {
    setCheckComplete(false)
  }
  const deleteJob = (id: number) => {
    axios.delete(`http://localhost:3000/jobs/${id}`)
   .then(res => loadData())
   .catch(err => console.log(err))
   closeFormDelete()
  }
  const addJob = () => {
    const find = jobs.find(job => job.job_name === inputValue)
    if (inputValue === '') {
      setCheck(true)
    } else if (find) {
      setCheckSame(true)
    } else {
      axios.post("http://localhost:3000/jobs", {
        job_name: inputValue,
        status: false
      })
      .then(res => loadData())
      .catch(err => console.log(err))
      setInputValue('')
      setCheck(false)
      setCheckSame(false)
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center shadow-md pt-[20px] pr-[30px] pl-[30px] pb-[30px] rounded">
        <strong className="text-[32px]">Quản lí công việc</strong>
        <div className="flex flex-col">
          <input type="text" onChange={handleChange1} value={inputValue} placeholder="Nhập tên công việc" className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[500px] p-2 rounded"/>
          {check?<p className="text-red-500"> * Tên công việc không được để trống</p>:<></>}
          {checkSame?<p className="text-red-500"> * Tên công việc không được phép trùng</p>:<></>}
          <button className="w-full bg-blue-600 mt-3 p-2 rounded text-white" onClick={addJob}>Thêm công việc</button>
        </div>
        <div className="mb-[20px] flex gap-7 mt-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full justify-center p-4 rounded">
          <NavLink to={'/'} className="p-2 rounded">Tất cả</NavLink><NavLink to={'/complete-list'} className="p-2 rounded">Hoàn thành</NavLink><NavLink to={'/incomplete-list'} className="p-2 rounded">Đang thực hiện</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<FullList jobs={jobs} openFormDelete={openFormDelete} setStatus={setStatus} openFormEdit={openFormEdit}/>}></Route>
          <Route path="/complete-list" element={<CompleteList jobs={jobs} openFormDelete={openFormDelete} setStatus={setStatus} openFormEdit={openFormEdit}/>}></Route>
          <Route path="/incomplete-list" element={<UncompleteList jobs={jobs} openFormDelete={openFormDelete} setStatus={setStatus} openFormEdit={openFormEdit}/>}></Route>
        </Routes>
        <div className="flex gap-11 mt-5">
          <button className="bg-orange-600 w-[230px] rounded text-white">Xóa công việc hoàn thành</button>
          <button className="bg-orange-600 w-[230px] p-2 rounded text-white">Xóa tất cả công việc</button>
        </div>
      </div>
      {comfirm ? <div className="modal">
        <div className="modal-content">
            <span className="close-button" onClick={closeFormDelete}>&times;</span>
            <h2>Xác nhận</h2>
            <div className="modal-body">
                <p>
                    <span className="icon">&#9432;</span>
                    Bạn có chắc chắn muốn xóa công việc <strong>&lt;{job}&gt;</strong> không?
                </p>
            </div>
            <div className="modal-footer">
                <button className="cancel-button" onClick={closeFormDelete}>Hủy</button>
                <button className="delete-button" onClick={()=>deleteJob(jobId)}>Xóa</button>
            </div>
        </div>
      </div> : <></>}
      {checkComplete ? <div className="modal">
        <div className="modal-content">
            <div className="text-green-600 text-2xl">Đã hoàn thành tất cả công việc!</div>
            <div className="modal-footer">
                <button className="cancel-button" onClick={closeFormComplete}>Đóng</button>
            </div>
        </div>
      </div> : <></>}
      {edit ? <div className="modal">
        <div className="modal-content">
            <span className="close-button text-5xl" onClick={closeFormEdit}>&times;</span>
            <strong className="text-3xl">Sửa công việc</strong>
            <input type="text" onChange={handleChange2} value={editInputValue} className="mt-7 w-full p-2 border-slate-400 border-solid border-[1px] rounded"/>
            {checkEdit?<p className="text-red-500"> * Tên công việc không được để trống</p>:<></>}
            {checkSameEdit?<p className="text-red-500"> * Tên công việc không được phép trùng</p>:<></>}  
            <div className="modal-footer">
                <button className="cancel-button" onClick={closeFormEdit}>Hủy</button>
                <button className="p-[10px] bg-blue-500 text-white" onClick={()=>editJob(jobId)}>Cập nhật</button>
            </div>
        </div>
      </div> : <></>}
    </div>
  )
}

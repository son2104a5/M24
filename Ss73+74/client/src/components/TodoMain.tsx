import React, { useRef, useState } from 'react'
import TodoList from './TodoList'
import TodoCompleted from './TodoCompleted'
import TodoIncompleted from './TodoIncompleted'

export default function TodoMain() {
  const focusInput = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [newTask, setNewTask] = useState('');
  // const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const handleEditTask = (taskId: number, taskName: string) => {
    focusInput.current?.focus()
    setIsEditing(true);
    // setCurrentTaskId(taskId);
    setNewTask(taskName);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  return (
    <div>
      <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form2"
                        className="form-control"
                        value={newTask}
                        onChange={handleChange}
                        ref={focusInput}
                      />
                      <label className="form-label">Nhập tên công việc</label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info ms-2"
                    >
                      {isEditing ? 'Cập nhật' : 'Thêm'}
                    </button>
                  </div>

                  {/* <!-- Tabs navs --> */}
                  <ul className="nav nav-tabs mb-4 pb-2">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link">Đã hoàn thành</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link">Chưa hoàn thành</a>
                    </li>
                  </ul>
                  {/* <!-- Tabs navs --> */}

                  {/* <!-- Tabs content --> */}
                  <TodoList handleEditTask={handleEditTask}/>
                  <TodoCompleted />
                  <TodoIncompleted/>

                  {/* <!-- Tabs CheckErr --> */}
                  {/* {checkErr && (
                    <div className="overlay">
                      <div className="modal-custom">
                        <div className="modal-header-custom">
                          <h5>Cảnh báo</h5>
                          <i onClick={handleClick} className="fas fa-xmark"></i>
                        </div>
                        <div className="modal-body-custom">
                          <p>Tên công việc không được phép để trống.</p>
                        </div>
                        <div className="modal-footer-footer">
                          <button onClick={handleClick} className="btn btn-light">Đóng</button>
                        </div>
                      </div>
                    </div>
                  )} */}
                  {/* <!-- Tabs CheckErr --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    </div>
  )
}

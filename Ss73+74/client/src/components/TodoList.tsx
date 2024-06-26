import { useEffect, useState } from 'react'
import { checkComplete, getTodo } from '../store/reducers/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootType } from '../store/store'

interface TodoListProps {
  handleEditTask: (id: number, name: string) => void;
}

export default function TodoList({ handleEditTask }: TodoListProps) {
  const [check, setCheck] = useState<boolean>(false)
  const [taskId, setTaskId] = useState<number>(0)
  const state = useSelector((state: RootType) => state.todo)
  const dispatch = useDispatch()
  // render todo
  useEffect(()=>{
    dispatch(getTodo())
  },[])
  // hàm thay đổi trạng thái todo
  const handleTaskCompletionToggle = (taskId: number) => {
    const check = state.todos.find((todo) => {   
      if(todo.id === taskId) {
        return todo
      }
    })
    dispatch(checkComplete(taskId, !check?.completed))
  };
  // hàm xóa todo
  const handleTaskDelete = (taskId: number) => {
    setCheck(true)
    setTaskId(taskId)
  };
  
  const handleCloseDelete = () => {
    setCheck(false)
  }
  const deleteTask = (taskId: number) => {
    setCheck(false)
  }
  return (
    <div>
      <div className="tab-content" id="ex1-content">
        <div className="tab-pane fade show active">
          <ul className="list-group mb-0">
            {state.todos.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                style={{ backgroundColor: '#f4f6f7' }}
              >
                <div>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleTaskCompletionToggle(item.id)}
                  />
                  {item.completed ? <s>{item.name}</s> : <span>{item.name}</span>}
                </div>
                <div className="d-flex gap-3">
                  <i
                    onClick={()=>handleEditTask(item.id, item.name)}
                    className="fas fa-pen-to-square text-warning"
                  ></i>
                  <i
                  onClick={()=>handleTaskDelete(item.id)}
                    className="far fa-trash-can text-danger"
                  ></i>
                </div>
              </li>
            ))}
          </ul>
          { check ? <div className="overlay">
                    <div className="modal-custom">
                      <div className="modal-header-custom">
                        <h5>Xác nhận</h5>
                        <i onClick={handleCloseDelete} className="fas fa-xmark"></i>
                      </div>
                      <div className="modal-body-custom">
                        <p>Bạn chắc chắn muốn xóa công việc này?</p>
                      </div>
                      <div className="modal-footer-footer">
                        <button onClick={handleCloseDelete} className="btn btn-light">Hủy</button>
                        <button className="btn btn-danger" onClick={() => taskId!== undefined && deleteTask(taskId)}>Xóa</button>
                      </div>
                    </div>
                  </div> : ''}
        </div>
      </div>
    </div>
  )
}

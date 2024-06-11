import React, { useState } from 'react'

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface TodoListProps {
  state: Todo[];
  dispatch: React.Dispatch<any>;
  handleEditTask: (id: number, name: string) => void;
}

export default function TodoList({ state, dispatch, handleEditTask }: TodoListProps) {
  const [check, setCheck] = useState<boolean>(false)
  const [taskId, setTaskId] = useState<number>(0)
  const handleTaskCompletionToggle = (taskId: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleTaskDelete = (taskId: number) => {
    setCheck(true)
    setTaskId(taskId)
  };
  
  const handleCloseDelete = () => {
    setCheck(false)
  }
  
  const deleteTask = (taskId: number) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
    setCheck(false)
  }
  return (
    <div className="tab-content" id="ex1-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          {state.map((item) => (
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
                  className="fas fa-pen-to-square text-warning" 
                  onClick={() => handleEditTask(item.id, item.name)}
                ></i>
                <i 
                  className="far fa-trash-can text-danger" 
                  onClick={() => handleTaskDelete(item.id)}
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
  )
}

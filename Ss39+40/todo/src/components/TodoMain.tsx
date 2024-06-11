import React, { useEffect, useReducer, useRef, useState } from "react";
import TodoList from "./TodoList";
import TodoCompleted from "./TodoCompleted";
import TodoIncompleted from "./TodoIncompleted";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

type ActionType =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: number }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'EDIT_TASK'; payload: { id: number; name: string } }
  | { type: 'SET_TASKS'; payload: Todo[] };

const initialState: Todo[] = [
  { id: 1, name: 'Quét nhà', completed: true },
  { id: 2, name: 'Giặt quần áo', completed: false },
];

const reducer = (state: Todo[], action: ActionType): Todo[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), name: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, name: action.payload.name } : task
      );
    case 'SET_TASKS':
      return action.payload;
    default:
      return state;
  }
};

export default function TodoMain() {
  const [select, setSelect] = useState<string>("AllTodos");
  const [checkErr, setCheckErr] = useState<boolean>(false)
  const focusInput = useRef<HTMLInputElement>(null)
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      dispatch({ type: 'SET_TASKS', payload: JSON.parse(storedTasks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state));
  }, [state]);

  
  const handleClick = () => {
    setCheckErr(false)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  
  const handleAddTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNewTask('');
    }else{
      setCheckErr(true)
    }
  };
  
  const handleEditTask = (taskId: number, taskName: string) => {
    focusInput.current?.focus()
    setIsEditing(true);
    setCurrentTaskId(taskId);
    setNewTask(taskName);
  };
  
  const handleUpdateTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentTaskId !== null && newTask.trim() !== '') {
      dispatch({ type: 'EDIT_TASK', payload: { id: currentTaskId, name: newTask } });
      setNewTask('');
      setIsEditing(false);
      setCurrentTaskId(null);
    }
  };

  const allTodo = () => {
    setSelect("AllTodos")
  }

  const completeTodo = () => {
    setSelect("CompleteTodos")
  }

  const incompleteTodo = () => {
    setSelect("IncompleteTodos")
  }
  
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <form className="d-flex justify-content-center align-items-center mb-4">
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
                      onClick={isEditing ? handleUpdateTask : handleAddTask} 
                      type="submit" 
                      className="btn btn-info ms-2"
                    >
                      {isEditing ? 'Cập nhật' : 'Thêm'}
                    </button>
                  </form>

                  {/* <!-- Tabs navs --> */}
                  <ul className="nav nav-tabs mb-4 pb-2">
                    <li className="nav-item" role="presentation" onClick={allTodo}>
                      <a className="nav-link active">Tất cả</a>
                    </li>
                    <li onClick={completeTodo} className="nav-item" role="presentation">
                      <a className="nav-link">Đã hoàn thành</a>
                    </li>
                    <li className="nav-item" role="presentation" onClick={incompleteTodo}>
                      <a className="nav-link">Chưa hoàn thành</a>
                    </li>
                  </ul>
                  {/* <!-- Tabs navs --> */}

                  {/* <!-- Tabs content --> */}
                  { select == "AllTodos" ? <TodoList state={state} dispatch={dispatch} handleEditTask={handleEditTask} /> : ''}
                  {/* <!-- Tabs content --> */}

                  {/* <!-- Tabs Complete --> */}
                  { select == "CompleteTodos" ? <TodoCompleted state={state} handleEditTask={handleEditTask} dispatch={dispatch}></TodoCompleted> : ''}
                  {/* <!-- Tabs Complete --> */}

                  {/* <!-- Tabs Incomplete --> */}
                  { select == "IncompleteTodos" ? <TodoIncompleted state={state} handleEditTask={handleEditTask} dispatch={dispatch}></TodoIncompleted> : ''}
                  {/* <!-- Tabs Incomplete --> */}

                  {/* <!-- Tabs CheckErr --> */}
                  { checkErr ? <div className="overlay">
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
                            </div> : ''}
                  {/* <!-- Tabs CheckErr --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

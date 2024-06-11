import React, { useReducer, useEffect } from 'react';
import "../App.css"
export default function UseReducerAdvanced() {
    interface Todo {
        id: number;
        name: string;
        status: boolean;
    }

    const initial = {
        todos: JSON.parse(localStorage.getItem('todos') || '[]'),
        isLoading: false,
        todo: {
            id: 0,
            name: "",
            status: false,
        },
        editingTodo: null,
    };

    const action = (type: any, payload: any): any => {
        return {
            type: type,
            payload: payload
        };
    };

    const reducer = (state: any = initial, action: any) => {
        switch (action.type) {
            case "CHANGE-INPUT":
                return {
                    ...state,
                    todo: { ...state.todo, name: action.payload, id: state.editingTodo ? state.editingTodo.id : Math.floor(Math.random() * 10000000 + new Date().getMilliseconds()) }
                };
            case "ADD-TODO":
                if (state.editingTodo) {
                    return {
                        ...state,
                        todos: state.todos.map((todo: Todo) => todo.id === state.editingTodo.id ? { ...todo, name: state.todo.name } : todo),
                        todo: { id: 0, name: "", status: false },
                        editingTodo: null
                    };
                }
                return { ...state, todos: [...state.todos, action.payload], todo: { id: 0, name: "", status: false } };
            case "DELETE-TODO":
                return { ...state, todos: state.todos.filter((todo: Todo) => todo.id !== action.payload) };
            case "EDIT-TODO":
                return { ...state, todo: action.payload, editingTodo: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initial);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state.todos));
    }, [state.todos]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        dispatch(action("CHANGE-INPUT", inputValue));
    };

    const addTodo = () => {
        dispatch(action("ADD-TODO", state.todo));
    };

    const deleteTodo = (id: number) => {
        dispatch(action("DELETE-TODO", id));
    };

    const editTodo = (todo: Todo) => {
        dispatch(action("EDIT-TODO", todo));
    };

    return (
        <div>UseReducer nâng cao <br />
            <div className='main-todo'>
                <div>
                    <input onChange={handleChange} type="text" placeholder='Nhập công việc' value={state.todo.name} className='todo-input'/>
                    <button className='todo-add' onClick={addTodo}>{state.editingTodo ? 'Sửa cv' : 'Thêm cv'}</button>
                </div>
                <div className='todo-container'>
                    <p className='todo-title'>Danh sách công việc</p>
                    <ul>
                        {
                            state.todos.map((item: Todo, index: number) => {
                                return <li className='todo-list' key={item.id}>
                                    <input type="checkbox" name="" id="" />
                                    {item.name}
                                    <div>
                                        <button className='todo-fix' onClick={() => editTodo(item)}>Sửa</button>
                                        <button className='todo-delete' onClick={() => deleteTodo(item.id)}>Xóa</button>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

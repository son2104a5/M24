import React from 'react';
import TodoList from './TodoList';

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}


export default function TodoIncompleted() {
  // const incompletedTodos = state.filter(todo => !todo.completed);
  return (
    // <TodoList state={incompletedTodos} dispatch={dispatch} handleEditTask={handleEditTask} />
    <div></div>
  );
}

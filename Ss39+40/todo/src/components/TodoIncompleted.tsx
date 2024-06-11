import TodoList from "./TodoList";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface TodoInCompletedProps {
  state: Todo[];
  dispatch: React.Dispatch<any>;
  handleEditTask: (id: number, name: string) => void;
}

export default function TodoIncompleted({state, dispatch, handleEditTask}: TodoInCompletedProps) {
  let text = state.map((item)=>{
    if (!item.completed){
      return <TodoList state={state} dispatch={dispatch} handleEditTask={handleEditTask}/>
    }
  })
  return (
    <div>
        { text }
    </div>
  )
}

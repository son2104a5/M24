import TodoList from "./TodoList";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface TodoCompletedProps {
  state: Todo[];
  dispatch: React.Dispatch<any>;
  handleEditTask: (id: number, name: string) => void;
}

export default function TodoCompleted({state, dispatch, handleEditTask}: TodoCompletedProps) {
  let text = state.map((item)=>{
    if (!item.completed){
      return <TodoList state={state} dispatch={dispatch} handleEditTask={handleEditTask}/>
    }
  })
  return (
    <div>
        { text === undefined ? "" : text }
    </div>
  )
}

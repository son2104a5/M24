import { useEffect, useState } from "react";
import TodoList from "./components/todo-list/TodoList";
import { ClipLoader } from 'react-spinners';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
        {loading ? <div style={styles.loadingContainer}>
                    <ClipLoader size={50} color={"#123abc"} loading={true} />
                   </div> : <TodoList></TodoList>}
    </div>
  )
}

const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
};

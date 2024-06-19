// import { initialState } from "./store/reducers/bookReducer"  

import BookList from "./components/BookList";


export default function App() {
  // localStorage.setItem('Books', JSON.stringify(initialState))
  
  return (
    <div>
      <BookList></BookList>
    </div>
  )
}

import { Route, Routes } from 'react-router-dom'
import About from './about/About'
import Contact from './contact/Contact'
import Home from './home/Home'

export default function B1() {
  return (
    <div>
        <Routes>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

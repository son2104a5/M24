import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Elements from './elements/Elements'
import Services from './service/Services'

export default function B3() {
  return (
    <div>
        <Routes>
            <Route path='/tour' element={<Home/>}></Route>
            <Route path='/tour/about' element={<About/>}></Route>
            <Route path='/tour/contact' element={<Contact/>}></Route>
            <Route path='/tour/elements' element={<Elements/>}></Route>
            <Route path='/tour/services' element={<Services/>}></Route>
        </Routes>
    </div>
  )
}

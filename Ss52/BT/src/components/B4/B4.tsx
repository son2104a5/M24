import { Route, Routes } from 'react-router-dom'
import NotFound from './404/NotFound'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Open from './open/Open'
import Price from './price/Price'
import Services from './service/Services'
import Team from './team/Team'
import Testimonial from './testimonial/Testimonial'

export default function B4() {
  return (
    <div>
        <Routes>
            <Route path='*' element={<NotFound/>}></Route>
            <Route path='/haircut' element={<Home/>}></Route>
            <Route path='/haircut/about' element={<About/>}></Route>
            <Route path='/haircut/contact' element={<Contact/>}></Route>
            <Route path='/haircut/open' element={<Open/>}></Route>
            <Route path='/haircut/price' element={<Price/>}></Route>
            <Route path='/haircut/services' element={<Services/>}></Route>
            <Route path='/haircut/team' element={<Team/>}></Route>
            <Route path='/haircut/testimonial' element={<Testimonial/>}></Route>
        </Routes>
    </div>
  )
}

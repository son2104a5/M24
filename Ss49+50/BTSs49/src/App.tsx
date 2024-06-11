import { NavLink, Route, Routes } from 'react-router-dom'
import B1 from './components/B1'
import B2 from './components/B2'
import B3 from './components/B3'
import B4 from './components/B4'
import B5 from './components/B9/NotFound/B5'
import B6 from './components/B6/B6'
import Home from './components/B6/home/Home'
import Contact from './components/B6/contact/Contact'
import Product from './components/B7/product/Product'
import Detail from './components/B7/detail/Detail'
import B7 from './components/B7/B7'
import B8 from './components/B8/B8'
import Admin from './components/B8/admin/Admin'
import Account from './components/B8/account/Account'
import Link from './components/B9/CustomLink/LinkHome'
import HomePage from './components/B9/HomePage/HomePage'
import ListUser from './components/B10/ListUser/ListUser'
import UserDetail from './components/B10/UserDetail/UserDetail'

interface User {
  id: number
  name: string
  address: string
  email: string
}

export default function App() {
  const listUsers: User[] = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội'},
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'HCM'},
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Hà Nam'},
  ]
  return (
    <div>
      <div className='flex gap-10 justify-center text-xl'>
        <NavLink to={''}>B1</NavLink>
        <NavLink to={'/contact'}>B2</NavLink>
        <NavLink to={'/login'}>B3</NavLink>
        <NavLink to={'/register'}>B4</NavLink>
        <NavLink to={'*'}>B5</NavLink>
        <NavLink to={'/B6'}>B6</NavLink>
        <NavLink to={'/B7'}>B7</NavLink>
        <NavLink to={'/B8'}>B8</NavLink>
        <NavLink to={'/link'}>B9</NavLink>
        <NavLink to={'/list'}>B10</NavLink>
      </div>
      <Routes>
        <Route path='' element={<B1></B1>}></Route>
        <Route path='/contact' element={<B2></B2>}></Route>
        <Route path='/login' element={<B3></B3>}></Route>
        <Route path='/register' element={<B4></B4>}></Route>
        <Route path='*' element={<B5></B5>}></Route>
        <Route path='/B6' element={<B6></B6>}>
          <Route path='/B6/home' element={<Home></Home>}></Route>
          <Route path='/B6/contact' element={<Contact></Contact>}></Route>
        </Route>
        <Route path='/B7' element={<B7></B7>}>
          <Route path='/B7/home' element={<Home></Home>}></Route>
          <Route path='/B7/product' element={<Product></Product>}></Route>
          <Route path='/B7/detail' element={<Detail></Detail>}></Route>
        </Route>
        <Route path='/B8' element={<B8></B8>}>
          <Route path='/B8/admin' element={<Admin></Admin>}></Route>
          <Route path='/B8/product' element={<Product></Product>}></Route>
          <Route path='/B8/account' element={<Account></Account>}></Route>
        </Route>
        <Route path='/link' element={<Link></Link>}></Route>
        <Route path='/home-page' element={<HomePage></HomePage>}></Route>
        <Route path='/list' element={<ListUser listUsers={listUsers}></ListUser>}></Route>
        <Route path='/user-detail/:userId' element={<UserDetail listUsers={listUsers} ></UserDetail>}></Route>
      </Routes>
    </div>
  )
}

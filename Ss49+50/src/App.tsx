import React from 'react'
import Login from './components/Ss49/login/Login'
import Register from './components/Ss49/register/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Ss49/Home/Home'
import NotFound from './components/Ss49/NotFound'
import About from './components/Ss49/about/About'
import News from './components/Ss49/news/News'
import Contact from './components/Ss49/contact/Contact'
import ListProduct from './pages/ListProduct'
import ProductDetail from './pages/ProductDetail'
import PrivateRouter from './pages/PrivateRouter'
import ManagerProduct from './pages/ManagerProduct'
import EmployeeManager from './pages/EmployeeManager'
import DashBoard from './pages/DashBoard'

export default function App() {
  return (
    <div>
      {/* 
        REACT ROUTER DOM
        là 1 thư viện
        tạo 1 bộ định tuyến cho trang web của mình tức là nó sẽ cho phép react element
        được hiển thị với các đường dẫn URL
        - Cách dùng:
          + cài đặt: nmp i react-router-dom
          dùng component browserRouter để cung cấp bộ định tuyến cho toàn bộ app.d
      */}
      {/* Ss49 */}
      {/* <Routes>
        <Route path='' element={<Home></Home>}>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/news' element={<News></News>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes> */}
      {/* Ss50 */}
      <Routes>
        <Route path='' element={<ListProduct></ListProduct>}></Route>
        <Route path='/product-detail' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin' element={<PrivateRouter></PrivateRouter>}>
          <Route path='manager-product' element={<ManagerProduct />}></Route>
          <Route index element={<DashBoard />}></Route>
          <Route path='employee-manager' element={<EmployeeManager />}></Route>
        </Route>
      </Routes>
      
    </div>
  )
}

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { modeCotext } from './context/Contextshare';
import { useContext } from 'react'
import Product from './pages/Product'
import Favorite from './pages/Favorite'
import Mybids from './pages/Mybids'
import Profile from './pages/Profile'
import Myauction from './pages/Myauction'
import Auctions from './pages/Auctions'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHome from './pages/AdminHome'
import PageNotFound from './pages/PageNotFound'
function App() {
  const {mode} = useContext(modeCotext)
  
  return (
    <div className={`${mode=='dark' && 'dark'}`}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={true}/>}/>
        <Route path='/view-bid/:id' element={<Product bid={true}/>}/>
        <Route path='/view-auction/:id' element={<Product/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/mybids' element={<Mybids/>}/>
        <Route path='/auctions' element={<Auctions/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/myauction' element={<Myauction/>}/>
        <Route path='/admin-home' element={<AdminHome/>}/>
        <Route path='*' element ={<PageNotFound/>}/>
      </Routes>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
      <Footer/>
    </div>
  )
}

export default App

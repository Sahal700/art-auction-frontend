import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { modeCotext } from './context/Contextshare';
import { useContext } from 'react'
import Product from './pages/Product'
import Favorite from './pages/Favorite'
import Mybids from './pages/Mybids'
function App() {
  const {mode} = useContext(modeCotext)
  
  return (
    <div className={`${mode=='dark' && 'dark'}`}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={true}/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/mybids' element={<Mybids/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

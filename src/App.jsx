import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Auth from './pages/Auth'
import Home from './pages/Home'

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={true}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

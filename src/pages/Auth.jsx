import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { loginResponseContext, modeCotext } from '../context/Contextshare';
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../services/allApi';


// #ffb73b
function Auth({register}) {
  const [userDetails,setUserDetails]=useState(
    {
      username:"",
      email:"",
      password:""
    }
  )
  const {mode} = useContext(modeCotext)
  const {setLoginResponse} = useContext(loginResponseContext)
  const navigate = useNavigate()

  // console.log(userDetails);

  const handleClose = ()=>{
    navigate('/')
  }

  const handleRegister = async()=>{
    const {username,email,password} = userDetails
    if (!username|| !email || !password) {
      toast.info("Please fill the form completely")
    }else{
      const result = await registerApi(userDetails)
      // console.log(result);
      if (result.status==200) {
        toast.success("registration successfull")
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        navigate('/login')
      }else if(result.status==406) {
        toast.warning(result.response.data)
      }else{
        toast.error('somthing went wrong')
      }
    }
  }
  const handleLogin = async()=>{
    const {email,password} = userDetails
    if(!email||!password){
      toast.info('please fill the form')
    }else{
      const result = await loginApi({email,password})
      // console.log(result);
      if(result.status == 200){
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        toast.success("Login successfull")
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        setTimeout(() => {
          if (result.data.existingUser.role=='admin') {
            navigate('/admin-home')
          }else{
            navigate('/')
          }
          
        }, 2000);
        setLoginResponse(true)
      }else if(result.status == 406 || result.status == 404){
        toast.warning(result.response.data)
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
      }else{
        toast.error("something went wrong")
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
      }
    }
  }


  // meterial ui
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const inputColor ={
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#ffb73b', // Custom focus border color
      },
    },
    '& .MuiInputLabel-root': {
      '&.Mui-focused': {
        color: '#ffb73b', // Custom label color when focused
      },
    },
  }
  return (
      <div className='h-[100vh] flex items-center justify-center md:px-32 md:pb-20 pt-40  bg-neutral-50 dark:bg-neutral-800'>
        <div className='bg-neutral-100 dark:bg-neutral-900 md:grid grid-cols-[repeat(1,1fr_1fr)] h-full rounded-sm w-full md:mx-32 shadow-lg gap-12'>
          <div className='bg-[url(https://img.freepik.com/free-vector/gold-gradient-abstract-design-background-wave_343694-3926.jpg?t=st=1731464633~exp=1731468233~hmac=9fe13cb3553b7df65aa5537381f510a8170e3c973e03542cf96293116d8b1ad9&w=1060)] bg-cover md:bg-left '>
            <div className='bg-transparent dark:bg-[#00000021] w-full h-full md:flex flex-col justify-center px-5 py-10 md:p-6 relative hidden'>
              <button onClick={handleClose} className='absolute top-6 text-xl cursor-pointer'><FontAwesomeIcon icon={faX} /></button>
              <h1 className='text-3xl font-semibold mb-4'>Welcome to <span className='text-dprimary dark:text-[#ff7300]'>ArtBids</span></h1>
              <p className=''>Where Creativity Finds Its True Value. Log in now to explore, bid, and own unique masterpieces from artists around the world. Your journey into the world of art begins here.</p>
            </div>
          </div>
          <div className='p-6 md:ps-0 md:py-16 md:pe-12 relativez dark:text-white'>
          <button onClick={handleClose} className='absolute md:hidden md:text-xl cursor-pointer'><FontAwesomeIcon icon={faX} /></button>
            <h2 className='text-center mt-10 md:mt-0 mb-5 md:mb-0 text-2xl font-medium'>{register? 'Sign Up' :'Login'}</h2>
            <div className='h-full flex flex-col justify-center'>
            <ThemeProvider theme={darkTheme}>
              {register && 
              <div className='w-full mb-4'>
                <TextField onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} value={userDetails.username} label="Username" variant="outlined" className='w-full' sx={inputColor} />
              </div>
              }
              <div className='w-full'>
                <TextField onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} value={userDetails.email} label="Email" variant="outlined" className='w-full' sx={inputColor} />
              </div>
              <div className='mt-4 w-full'>
                <TextField onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} value={userDetails.password} label="Password" variant="outlined" className='w-full' sx={inputColor} />
              </div>
              {register?
              <div>
                <button onClick={handleRegister} className='w-full h-[56px] bg-primary hover:bg-phover mt-4 rounded font-medium'>Sign Up</button>
                <p className='mt-4'>Alredy? Click here to <Link to={'/login'} className='text-primary hover:text-phover hover:underline'>login</Link></p>
              </div>
              :
              <div>
                <button onClick={handleLogin} className='w-full h-[56px] bg-primary hover:bg-phover mt-4 rounded font-medium'>Login</button>
                <p className='mt-4'>New User? Click here to <Link to={'/register'} className='text-primary hover:text-phover hover:underline'>register</Link></p>
              </div>}
              </ThemeProvider>
            </div>
          </div>
          <div className='bg-[url(https://img.freepik.com/free-vector/gold-gradient-abstract-design-background-wave_343694-3926.jpg?t=st=1731464633~exp=1731468233~hmac=9fe13cb3553b7df65aa5537381f510a8170e3c973e03542cf96293116d8b1ad9&w=1060)] bg-cover md:bg-left h-[50%] md:hidden'>
            
            <div className='bg-transparent dark:bg-[#00000021] w-full h-full flex flex-col justify-center p-6 px-5 py-10 md:px-0 md:py-0 '>
              <h1 className='text-3xl font-semibold mb-4'>Welcome to <span className='text-dprimary dark:text-[#ff7300] '>ArtBids</span></h1>
              <p className=''>Where Creativity Finds Its True Value. Log in now to explore, bid, and own unique masterpieces from artists around the world. Your journey into the world of art begins here.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Auth
import React, { useContext, useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { editResponseContext, modeCotext } from '../context/Contextshare';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../services/serverUrl';
import { editAuctionApi } from '../services/allApi';

function EditAuction({auction}) {
  const [open, setOpen] = useState(false);
  const [auctionDetails,setAuctionDetails] = useState({
    title : auction.title,
    description : auction.description,
    startingPrice : auction.startingPrice,
    endTime : `${new Date(auction.endTime).toISOString().slice(0, 10)}`,
    width : auction.width,
    height : auction.height,
    image : ""
  })
  const [preview,setPreview] = useState("")
  const [token,setToken] = useState("")
  const [key,setKey] = useState(1)
  const {mode}=useContext(modeCotext)
  const {setEditResponse}=useContext(editResponseContext)

  // console.log(auctionDetails);
  
  const handleFile=(e)=>{
    setAuctionDetails({...auctionDetails,image:e.target.files[0]})
    // console.log(e.target.files[0]);
    
  }
  
  const handleCancel = () =>{
    setAuctionDetails({
      title : auction.title,
      description : auction.description,
      startingPrice : auction.startingPrice,
      endTime : `${new Date(auction.endTime).toISOString().slice(0, 10)}`,
      width : auction.width,
      height : auction.height,
      image : ""
    })
    setPreview("")
    if(key==1){
      setKey(0)
    }else{
      setKey(1)
    }
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // handleCancel()
  }


  const handleUpdate = async()=>{
    const {title,description,startingPrice,endTime,width,height,image}=auctionDetails
    if(!title || !description || !startingPrice || !endTime || !width || !height){
      toast.info("Pleser fill the form completely")
    }else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("description",description)
      reqBody.append("startingPrice",startingPrice)
      reqBody.append("endTime",endTime)
      reqBody.append("width",width)
      reqBody.append("height",height)
      preview?reqBody.append("image",image):reqBody.append("image",auction.image)

      if (preview) {
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
        const result = await editAuctionApi(auction._id,reqBody,reqHeader)
        // console.log(result);
        if (result.status==200) {
          setTimeout(() => {
            handleClose()
          }, 2000);
          toast.success("Auction updated successfully")
          setEditResponse(result)
        }else{
          handleCancel()
          toast.error("somthing went wrong")
        }
      }else{
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        const result = await editAuctionApi(auction._id,reqBody,reqHeader)
        // console.log(result);
        if (result.status==200) {
          setTimeout(() => {
            handleClose()
          }, 2000);
          toast.success("Auction updated successfully")
          setEditResponse(result)
        }else{
          handleCancel()
          toast.error("somthing went wrong")
        }
      }

    }
  }
  
  // style for modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
  };
  useEffect(()=>{
    if(auctionDetails.image){
      setPreview(URL.createObjectURL(auctionDetails.image))
    }
  },[auctionDetails.image])
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  return (
    <>
      <FaEdit className='text-violet-500' onClick={handleOpen}/>
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
        <div style={style} className={`md:w-[700px] w-[300px] ${mode=='dark' && 'dark'}`}>
          {/* title */}
          <div className='flex justify-between px-2 py-2 rounded-t bg-neutral-200 dark:text-white dark:bg-neutral-900 dark:text-light'>
            <h1 className='text-xl font-semibold'>Add New Auction</h1>
            <button className='text-2xl font-bold text-neutral-800 dark:text-neutral-300 dark:hover:text-white hover:text-black' onClick={handleClose}><IoClose /></button>
          </div>
          {/* body */}
          <div className='bg-neutral-100 dark:bg-neutral-800 p-5 flex flex-col space-y-4'>
            <div>
              <input type="text" value={auctionDetails.title} onChange={(e)=>{setAuctionDetails({...auctionDetails,title:e.target.value})}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
            </div>
            <div>
              <textarea rows="3" value={auctionDetails.description} onChange={(e)=>{setAuctionDetails({...auctionDetails,description:e.target.value})}} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>
            </div>
            <div className='md:grid grid-cols-2 gap-4'>
              <div className='flex flex-col space-y-4'>
                <input type="text" value={auctionDetails.width} onChange={(e)=>{setAuctionDetails({...auctionDetails,width:e.target.value})}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="width" required />
                <input type="text" value={auctionDetails.height} onChange={(e)=>{setAuctionDetails({...auctionDetails,height:e.target.value})}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="height" required />
                <input type="text" value={auctionDetails.startingPrice} onChange={(e)=>{setAuctionDetails({...auctionDetails,startingPrice:e.target.value})}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Starting Bid" required />
                <input type="text" value={auctionDetails.endTime} onChange={(e)=>{console.log(e.target.value);
                 setAuctionDetails({...auctionDetails,endTime:e.target.value})}} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type="text")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="End date" required />
              </div>
              {/* upload image section */}
              <div className='mt-4 md:mt-0'>
              <input key={key} type="file" id='primage' className='hidden' onChange={(e)=>{handleFile(e)}} />
                <label htmlFor="primage">
                  <img src={preview?preview:`${serverUrl}/upload/${auction.image}`} alt="" />
                </label>
              </div>
            </div>
          </div>
          {/* button end */}
          <div className='bg-neutral-200  dark:bg-neutral-900 flex px-3 py-2 rounded-b'>
            <button onClick={handleUpdate} className='ms-auto bg-primary px-3 py-2 rounded'>Update</button>
            <button onClick={handleCancel} className='ms-2 bg-gray-500 dark:bg-gray-300 px-3 py-2 rounded'>Cancel</button>
          </div>
          {/* <ToastContainer theme='colored' position='top-center' autoClose={2000}/> */}
        </div>
      </Modal>

    </>
  )
}

export default EditAuction
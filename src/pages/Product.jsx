import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addAuctionToBidsApi, updateBIdApi, viewAuctionApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from 'react-toastify';
import Header from '../components/Header'

function Product({bid}) {
  const [auction,setAuction] = useState({})
  const [bidAmount,setBidAmount] = useState('')
  const [isValid,setIsValid] = useState("valid")
  const {id} = useParams()
  const [updateRes,setUpdateRes] = useState({})

  // console.log(isValid);
  
  const getAuction = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await viewAuctionApi(id,reqHeader)
      // console.log(result);
      setAuction(result.data)
    }
  }
  /* update bid function */

  const updateBid = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await updateBIdApi(id,{amount:bidAmount},reqHeader)
      // console.log(result);
      if (result.status==200) {
        const result1 = await addAuctionToBidsApi(id,reqHeader)
        // console.log(result1);
        toast.success("Bid added successfully")
      }else if(result.status==201){
        toast.success("Bid updated successfully")
      }else if(result.status == 406 || result.status == 408 ){
        toast.info("Bid Is Low")
      }else if(result.status == 407){
        toast.info("auction is completed")
      }else{
        toast.error("something went wrong")
      }
      setUpdateRes(result)
    }
  }

  const validate = (e)=>{
    setBidAmount(e.target.value)
    if (!e.target.value.match('^[0-9]*$')) {
      setIsValid("invalid")
    } else{
      if (e.target.value>=auction.startingPrice && e.target.value>auction.currentBid) {
        setIsValid("high")
      }else{
        setIsValid("low")
      }
    }
  }
  useEffect(()=>{
    getAuction()
  },[updateRes])
  return (
    <>
      <Header/>
      <div className="pt-[100px] md:grid grid-cols-2 md:px-60 dark:bg-neutral-800 dark:text-white pb-5">
        {
        bid?
        <Link className='col-span-2 mb-3 cursor-pointer flex items-center' to={"/auctions"}><IoMdArrowRoundBack  className='text-xl'/>Auctions</Link>:
        <Link className='col-span-2 mb-3 cursor-pointer flex items-center' to={"/myauction"}><IoMdArrowRoundBack  className='text-xl'/> My Auction</Link>
        }
        <div className="md:pe-5">
          <img
            src={`${serverUrl}/upload/${auction?.image}`}
            alt="Product"
            className="w-full rounded-lg shadow-md"
          />
          <div className="flex items-center mt-4 ms-3 md:ms-0">
            <h4 className="font-medium me-1">Posted by :</h4>
            <span className="hover:text-primary cursor-pointer">{auction?.userId?.username}</span>
            {/* profile photo not updated */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s"
              alt="Artist"
              className="w-[40px] h-[40px] rounded-full hover:border-primary hover:border-2 cursor-pointer ms-5"
            />
          </div>
        </div>
        <div className="md:ps-4 ps-3 pe-3">
          <h1 className="text-2xl font-semibold mt-3 md:mt-0">{auction?.title}</h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {auction?.description}
          </p>
  
  
          <h4 className="font-medium text-lg mt-5">Dimensions:</h4>
          <p>Height: {auction?.height} Cm</p>
          <p>Width: {auction?.width}Cm</p>
          <p className="mt-5 font-medium">
            Ends On: <span className="font-normal">{auction?.endTime ? new Intl.DateTimeFormat("en-Gb").format(new Date(auction.endTime)) : "N/A"}</span>
          </p>
          <p className="mt-5 font-medium">
            Starting Price: <span className="text-green-500 font-normal">₹ {auction?.startingPrice}</span>
          </p>
          <p className="mt-5 font-medium">
            Current Bid: <span className="text-red-500 font-normal">₹ {auction?.currentBid}</span>
          </p>
  
          {bid && <div>
            <label htmlFor="bid-input" className="block mt-5">Your Bid:</label>
            <div className="flex items-center mt-2">
              <input
                onChange={(e)=>{validate(e)}}
                type="text"
                placeholder="Enter your bid amount"
                className="p-2 bg-transparent border-2 border-black dark:border-white focus:outline-primary rounded mr-3"
              />
              
              <button disabled={isValid=='high'?false:true} onClick={updateBid} className="py-[9px] px-6 rounded bg-primary text-white hover:bg-orange-600 transition">
                Place Bid
              </button>
            </div>
            <div>
              {isValid=='invalid'&& <span className='text-red-500'>Invalid Input</span>}
              {isValid=='low' && <span className='text-red-500'>Bid is Low</span>}
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}

export default Product;

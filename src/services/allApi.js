import { serverUrl } from "./serverUrl";
import { commonApi } from "./commonApi";

//register
export const registerApi = async (reqBody)=>{
  return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

// login
export const loginApi = async (reqBody)=>{
  return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

// add auction
export const addAuctionApi = async (reqbody,reqHeader) =>{
  return await commonApi('POST',`${serverUrl}/add-auction`,reqbody,reqHeader)
}

// user-auctions
export const userAuctionApi = async (reqHeader) =>{
  return await commonApi('GET',`${serverUrl}/user-auctions`,'',reqHeader)
}

// edit user auction
export const editAuctionApi = async (id,reqBody,reqHeader) =>{
  return await commonApi('PUT',`${serverUrl}/edit-auction/${id}`,reqBody,reqHeader)
}

// delete auction
export const removeAuctionApi = async (id,reqHeader)=>{
  return await commonApi('DELETE',`${serverUrl}/remove-auction/${id}`,{},reqHeader)
}

// view auction
export const viewAuctionApi = async (id,reqHeader)=>{
  return await commonApi('GET',`${serverUrl}/view-auction/${id}`,{},reqHeader)
}

// get-all-auction
export const getAllAuctionApi = async (reqHeader)=>{
  return await commonApi('GET',`${serverUrl}/get-all-auction`,{},reqHeader)
}

// get user details
export const getUserApi = async (reqHeader)=>{
  return await commonApi('GET',`${serverUrl}/get-user`,{},reqHeader)
}

// get fav
export const getFavouriteApi = async (reqHeader)=>{
  return await commonApi('GET',`${serverUrl}/get-favourite`,{},reqHeader)
}

// update user favourite
export const addFavouriteApi = async (id,reqHeader)=>{
  return await commonApi('POST',`${serverUrl}/add-favourite/${id}`,{},reqHeader)
}

// update delete favourite
export const removeFavouriteApi = async (id,reqHeader)=>{
  return await commonApi('PUT',`${serverUrl}/remove-favourite/${id}`,{},reqHeader)
}

// update bid 
export const updateBIdApi = async (id,reqBody,reqHeader)=>{
  return await commonApi('PUT',`${serverUrl}/update-bid/${id}`,reqBody,reqHeader)
}

// add auction to bid collection
export const addAuctionToBidsApi = async (id,reqHeader)=>{
  return await commonApi('POST',`${serverUrl}/add-bids-to-collection/${id}`,{},reqHeader)
}

// get all bids api
export const getAllBidsApi = async (reqHeader)=>{
  return await commonApi('GET',`${serverUrl}/get-all-bids`,{},reqHeader)
}

// update profile
export const updateProfileApi = async (reqBody,reqHeader)=>{
  return await commonApi('PUT',`${serverUrl}/update-profile`,reqBody,reqHeader)
}
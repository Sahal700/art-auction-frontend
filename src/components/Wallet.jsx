import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import { createOrderApi } from "../services/allApi";

function Wallet({ setwallet }) {
  const [balance, setBalance] = useState(100);
  const [amount, setAmount] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [token,setToken]=useState("")

  const handleAdd = async(e)=>{
    if (token) {
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      // console.log(amount);
      
      const order = await createOrderApi({amount},reqHeader)
      // console.log(order);
      
      var options = {
        "key": "rzp_test_dx0PvFmrkP7hVv", // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "ArtBids",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
      };
      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response){
              alert(response.error.code);
              alert(response.error.description);
              alert(response.error.source);
              alert(response.error.step);
              alert(response.error.reason);
              alert(response.error.metadata.order_id);
              alert(response.error.metadata.payment_id);
      });
      rzp1.open();
      e.preventDefault();
    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])

  return (
    <div className="p-6 bg-neutral-100 rounded-xl shadow-lg dark:bg-neutral-700 dark:text-white relative">
      <button
        onClick={() => {
          setwallet(false);
        }}
        className="absolute text-2xl cursor-pointer"
      >
        <IoMdArrowRoundBack />
      </button>
      <h2 className="text-2xl font-bold text-center mb-6">Wallet</h2>
      <div className="text-center">
        <p className="text-lg font-medium">Current Balance:</p>
        <p className="text-3xl font-bold text-green-500">₹{balance}</p>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Amount
          </label>
          <input
            type="number"
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          onClick={handleAdd}
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Add
        </button>
        <button
          // onClick={}
          className="w-full px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          Withdraw
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4">Transaction History</h3>
        <ul className="space-y-2">
          {transactionHistory.length === 0 ? (
            <p className="text-gray-500">No transactions yet.</p>
          ) : (
            transactionHistory.map((txn, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg ${
                  txn.type === "Add"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {txn.type}: ₹{txn.amount}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Wallet;

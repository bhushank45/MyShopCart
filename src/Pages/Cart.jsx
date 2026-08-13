import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const navigate=useNavigate();
  return (
    <div>
    <h2>Cart Page</h2>
    <button className='btn btn-success' onClick={()=>{navigate('/payment')}}>Proceed to Payment</button>
    </div>
  )
}

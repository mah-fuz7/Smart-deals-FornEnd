import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Context/Authcontext';
import Swal from 'sweetalert2';

const Mybids = () => {
    const {user} =useContext(Authcontext)
    // console.log(user.email)
    const email= user.email;
    const [bids,setBids]=useState([])
    useEffect(()=>{

        fetch(`http://localhost:3000/users/bids?email=${email}`)
        .then(res => res.json())
        .then(data => setBids(data))
    },[email])

    // handle delete btn
    const handleBtn =(id) =>{
        console.log(id,'btn click')
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/bids/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
     const remainingBids=bids.filter(bid => bid._id !== id)
     setBids(remainingBids)
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
    })
    

  }
});
    }
    return (
        <div>
            <h1 className='text-center mt-4 font-bold text-2xl'>My Bids:  <span className='text-purple-600'>{bids.length}</span></h1>

{/* table */}

<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Bid Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
   {
    bids.map((bid,index) =>  <  tbody>

      {/* row 1 */}

      <tr>
        <th>{index + 1}</th>
        <td>{bid.buyer_name}</td>
        <td>{bid.bid_price}</td> 
        <td className='text-yellow-300 font-bold p-0.5  rounded-3xl  '>{bid.status}</td>
        <td><button onClick={()=>handleBtn(bid._id)} className='btn btn-outline'>Delete</button></td>
      </tr>
  
     
    </tbody>)
   }
  </table>
</div>
          
        </div>
    );
};

export default Mybids;
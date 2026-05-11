import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import Swal from 'sweetalert2';

const Productdetails = () => {

    // #useLoaderData
    const {_id:product_id,}=useLoaderData();
    // console.log(product_id);

// # load bids data by product id
const [bids,setBids]=useState([])
console.log(bids)
useEffect( ()=>{
  fetch(`http://localhost:3000/products/bids/${product_id}`)
  .then(res => res.json())
  .then(data => setBids(data))
},[product_id])

    // #userData 
    const{user}=useContext(Authcontext)
    // console.log(user)

    // #useRef
    const inputRef=useRef(null);

    // handleBitBtn Func
    const handleBitBtn = () =>{
        inputRef.current.showModal()
        // console.log('btn click')
    }
    const handleForm =(e) =>{
        e.preventDefault()
        const name=e.target.name.value;
        const email= e.target.email.value;
        const bid= Number(e.target.bid.value);
        console.log(typeof bid)

        // #BackEnd 

        // #newBid
        const newBid ={
          product:product_id,
          buyer_img: "",
          buyer_name:name,
          buyer_email:email,
          bid_price:bid,
          status:"pending"
          
        }
        // console.log(newBid)

        // #add bid data in database
// const UpdateBid=[...bids,newBid]
// const sortBid=UpdateBid.sort((a,b) => b.bid_price - a.bid_price),
// setBids(sortBid)

setBids(prev => [...prev, newBid].sort((a,b) => b.bid_price - a.bid_price));
        fetch('http://localhost:3000/bids',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(newBid)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
          
                    inputRef.current.close()
                    // alert
                    Swal.fire({
  position: "top-middle",
  icon: "success",
  title: "Your Bid has been Placed",
  showConfirmButton: false,
  timer: 1500
});
          }
        }
      )
        e.target.reset();
    }
    
    return (
        <div>

            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}

<dialog ref={inputRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
<form onSubmit={handleForm}>
    <fieldset className="fieldset">

  <legend className="fieldset-legend"> Name</legend>
  <input type="text"  name='name' className="input" defaultValue={user?.displayName || ""}  />

  <legend className="fieldset-legend"> Email</legend>
  <input type="text" name='email' className="input" defaultValue={user?.email || ""}   />

  <legend className="fieldset-legend"> Place Your Price</legend>
  <input type="text"  name='bid' className="input" placeholder="Place Your Price" />

<button className='btn btn-primary'>Submit</button>

</fieldset>
</form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button  className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

     <button onClick={handleBitBtn} className='btn btn-primary'>Place your Bid</button>
<p className='font-bold text-3xl mt-5 '>Bids for this Products {bids.length}</p>
{/* bids for this products */}

      {/* table */}

<div className="overflow-x-auto">
  <table className="table">
  <thead>
    <tr>
      <th>Sl.No</th>
      <th>Buyer Info</th>
      <th>Bid price</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {bids.map((bid, index) => (
      <tr key={bid._id}>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{bid.buyer_name}</div>
              <div className="text-sm opacity-50">{bid.buyer_email}</div>
            </div>
          </div>
        </td>
        <td>{bid.bid_price}</td>
        <th >
          <button className="btn btn-ghost btn-xs text-green-500 border-green-600 mr-2 ">Accept</button>
          <button className="btn btn-ghost btn-xs text-red-500 border-red-600">Reject</button>
        </th>
       
      </tr>
    ))}
  </tbody>
</table>
</div>





        </div>
    );
};

export default Productdetails;
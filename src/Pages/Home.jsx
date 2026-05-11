import React from 'react';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import { Link } from 'react-router';
 const LatestProductsPromise = fetch('http://localhost:3000/latestproducts')
    .then(res => res.json())
    // .then(data => console.log(data))
const Home = () => {
   
    // .then(data =>console.log(data))
    
    return (
        <div>
<Banner></Banner>
<h1 className="text-3xl font-bold text-center m-10">Recent <span className="text-purple-600">Products</span>
</h1>
<Card LatestProductsPromise={LatestProductsPromise}></Card>
<div className="flex justify-center mb-5">
<Link to="/allproducts" className="btn btn-primary   p-4 mt-4">View All Products</Link>
</div>
        </div>
    );
};

export default Home;
import React, { use } from 'react';
import { Link } from 'react-router';

const Card = ({LatestProductsPromise}) => {
    const latestProducts=use(LatestProductsPromise);
    // console.log(latestProducts);
    return (
        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-5">
            {
                latestProducts?.map(product => <div key={product._id} className="card w-96 bg-gray-300 items-center  shadow-xl">
                    
                        <div className="rounded-xl max-w-xs p-5 gap-6  ">
      
      {/* Image */}
      {/* <figure className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
        {/* Replace with <img src="..." /> later */}
      {/* </figure> } */}

      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h2 className="font-semibold text-gray-800 text-sm leading-snug">
          {product.title} [ {product.condition} ]
        </h2>

        <p className="text-purple-600 font-semibold text-sm">
          ${product.price_max} - {product.price_min}
        </p>
<Link to={`/productdetails/${product._id}`}>

        <button className="btn btn-outline btn-sm w-full border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white">
          View Details
        </button>
</Link>
      </div>

    </div>


                     </div>)
            }
        </div>
    );
};

export default Card;
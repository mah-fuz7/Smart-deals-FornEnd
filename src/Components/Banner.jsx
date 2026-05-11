import { Search } from "lucide-react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#F7ECFF] via-[#F3F6FF] to-[#ECF9FF]">
      <div className="container mx-auto px-4 py-24 text-center">

        {/* Decorative waves */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30">
          <div className="w-96 h-96 rounded-full border-[40px] border-purple-300 blur-2xl"></div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30">
          <div className="w-96 h-96 rounded-full border-[40px] border-blue-300 blur-2xl"></div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
          Deal Your <span className="text-purple-600">Products</span> <br />
          In A <span className="text-purple-600">Smart</span> Way !
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          SmartDeals helps you sell, resell, and shop from trusted local sellers —
          all in one place!
        </p>

        {/* Search bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-xl shadow-lg rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search For Products, Categories..."
              className="flex-1 px-6 py-4 outline-none"
            />
            <button className="px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
<Search />            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
            <Link to="/allproducts">
          <button className="btn btn-primary px-6">
            Watch All Products
          </button>
</Link>
<Link to="/addproducts">
          <button className="btn btn-outline border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white px-6">
            Post an Product
          </button>
          </Link>
        </div>

       

      </div>
    </section>
  );
};

export default Banner;

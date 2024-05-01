import { useContext } from "react";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";


const CraftItem = () => {
    const { crafts } = useContext(AuthContext)
    return (
        <>
            <h1 className="text-4xl text-center text-black font-bold">Craft Items</h1>
            <div className='grid grid-cols-1 my-[5%] md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {
                    crafts?.slice(0, 6).map(item =>
                        <div key={item._id} className="card border    shadow-xl">
                            <figure className="flex-1 p-5 hover:scale-105 transition-all duration-1000 ease-in-out hover:rotate-3  "><img className="rounded-2xl hover:-rotate-3 h-52 w-full transition-all duration-700 ease-in-out " src={item.photoUrl} alt={item.itemName
                            } /></figure>
                            <div className="flex-1 card-body">
                                <h2 className="card-title text-3xl font-bold">{item.itemName
                                }</h2>
                                <div className="flex py-3 items-center">
                                    <p className="font-bold text-2xl">Price: {item.price}$</p>
                                    <p className="text-[#e59149] font-bold text-2xl">rating : {item.rating}</p>
                                </div>
                                <div className="flex pb-3 items-center">

                                    <p className="font-bold">Customization : {item.customization}</p>
                                    <p className="font-semibold text-xl" >{item.stockStatus}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${item._id}`} >
                                        <button
                                            className="text-slate-800 hover:text-slate-700 text-lg bg-white hover:bg-orange-200 border border-slate-200 rounded-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">

                                            <span className="hidden md:inline-block">View Details</span>
                                        </button>
                                    </Link>


                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </>
    );
};

export default CraftItem;
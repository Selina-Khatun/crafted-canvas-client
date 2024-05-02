
import { useLoaderData } from "react-router-dom";

const Details = () => {

    // const { _id } = useParams();
    const allCrafts = useLoaderData();
    // console.log('id', _id);
    console.log('allCrafts', allCrafts);

    const { photoUrl, itemName, subcategoryName, price, customization, rating, stockStatus, email, username, textarea, processingTime } = allCrafts;

    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={photoUrl} alt={itemName} />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name : {itemName}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-xl mb-4">
                                Category  : {subcategoryName}
                            </p>
                            <div className="rating rating-sm mb-3 items-center">
                                <h1 className="mr-4">Rating({rating})</h1>


                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>




                            <div className="flex  justify-between mb-4">
                                <div>
                                    <div className="mr-4 text-3xl">
                                        <span className="font-bold  text-gray-700 dark:text-gray-300"> Price: </span>
                                        <span className="text-gray-600 dark:text-gray-300"> {price}  $ </span>
                                    </div>
                                    <div className=" mt-4">
                                        <span className="font-bold  text-gray-700 dark:text-gray-300">Availability: </span>
                                        <span className="text-gray-600 dark:text-gray-300">{stockStatus} </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Customization: </span>
                                        <span className="text-gray-600 dark:text-gray-300">{customization}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">processingTime: </span>
                                        <span className="text-gray-600 dark:text-gray-300">{processingTime} </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">

                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                    </div>
                                </div>
                                <div
                                    className=" rounded-3xl lg:absolute  font-bold flex  right-0 flex-col bg-orange-200 py-1 px-4 text-gray-800 shadow-xl ">

                                    <p className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Authorized Email:    {email}
                                    </p>

                                    <p className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Authorized name:   {username}
                                    </p>

                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                </div>
                            </div>


                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {textarea}
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
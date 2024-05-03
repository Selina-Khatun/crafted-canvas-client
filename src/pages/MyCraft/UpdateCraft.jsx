import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
const crafts=useLoaderData()
const {_id, photoUrl, itemName, subcategoryName, price, customization, rating, stockStatus, textarea, processingTime }=crafts;
// console.log('id', _id);
// console.log('cards', crafts);

    const handleUpdateCraft = e => {
        // console.log('updated button is clicked')
        e.preventDefault();

        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const price = form.price.value;
        const textarea = form.textarea.value;


        const updatedCraft = { photoUrl, itemName, subcategoryName, price, customization, rating, stockStatus, textarea, processingTime }
        console.log(updatedCraft)
        fetch(`https://crafted-canvas-server.vercel.app/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been updated",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);

            });

    }
    return (

        <section className="  ">
             <Helmet>
                <title>craftedCanvas ||UpdateCraft</title>
            </Helmet>
            <div className="max-w-4xl p-6   mb-5 mx-auto bg-slate-700 rounded-md shadow-md dark:bg-gray-800">

                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Update your item</h1>
                <form onSubmit={handleUpdateCraft}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {/*  image */}

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="itemName">Photo URL</label>
                            <input type="url" id="photoUrl" name="photoUrl" defaultValue={photoUrl}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>

                        {/*  item_name */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="itemName"> Item name</label>
                            <input id="itemName" type="text" name="itemName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={itemName} required />
                        </div>
                        {/* subcategory_Name */}


                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor=" subcategoryName"> subcategory_Name</label>
                            <select id="subcategoryName" type="text" name="subcategoryName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={subcategoryName} required>
                                <option> Embroidery</option>
                                <option> Knitting & Crocheting</option>
                                <option> Quilting</option>
                                <option> Beadwork
                                </option>
                                <option>  Tie-Dyeing
                                </option>
                                <option>Macrame</option>

                            </select>
                        </div>

                    

                        {/*  price */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="price">price</label>
                            <input id="price" type="number" defaultValue={price}  name="price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* customization */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="customization">customization</label>
                            <select name="customization" defaultValue={customization} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
                                <option>yes</option>
                                <option> no</option>

                            </select>
                        </div>
                        {/* rating */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="rating">rating</label>
                            <input id="rating" type="number" defaultValue={rating} name="rating" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* processingTime */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="processingTime"> Processing time</label>
                            <input id="processingTime" defaultValue={processingTime} name="processingTime" type="time" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* stockStatus */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor=" stockStatus"> stockStatus</label>
                            <select name="stockStatus" defaultValue={stockStatus}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
                                <option>In stock</option>
                                <option>  Made to Order</option>

                            </select>
                        </div>
                       

                        {/* short description */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">short description</label>
                            <textarea id="textarea" defaultValue={textarea}  type="textarea" name="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#e59149] rounded-md hover:bg-pink-900 focus:outline-none focus:bg-green-900">Update</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateCraft;
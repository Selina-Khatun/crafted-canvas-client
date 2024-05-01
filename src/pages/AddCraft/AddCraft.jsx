import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const AddCraft = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const handleAddCraft = e => {
        // console.log('button is clicked')
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
        const email = form.email.value;
        const username = form.username.value;
        const textarea = form.textarea.value;
        const newCraft = { photoUrl, itemName, subcategoryName, price, customization, rating, stockStatus, email, username, textarea, processingTime }
        console.log(newCraft)
        fetch('http://localhost:5000/crafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);

            });

    }

    return (



        <section className="  ">
            <div className="max-w-4xl p-6   mb-5 mx-auto bg-[#dfa674] rounded-md shadow-md ">

                <h1 className="text-2xl font-bold text-white capitalize dark:text-white">Add a new item</h1>
                <form onSubmit={handleAddCraft}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {/*  image */}

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="itemName">Photo URL</label>
                            <input type="url" id="photoUrl" name="photoUrl" placeholder='Enter Photo url' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>

                        {/*  item_name */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="itemName"> Item name</label>
                            <input id="itemName" type="text" name="itemName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* subcategory_Name */}


                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor=" subcategoryName"> subcategory_Name</label>
                            <select id="subcategoryName" type="text" name="subcategoryName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
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
                            <input id="price" type="number" name="price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* customization */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="customization">customization</label>
                            <select name="customization" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
                                <option>yes</option>
                                <option> no</option>

                            </select>
                        </div>
                        {/* rating */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="rating">rating</label>
                            <input id="rating" type="number" name="rating" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* processingTime */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="processingTime"> Processing time</label>
                            <input id="processingTime" name="processingTime" type="time" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* stockStatus */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor=" stockStatus"> stockStatus</label>
                            <select name="stockStatus" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
                                <option>In stock</option>
                                <option>  Made to Order</option>

                            </select>
                        </div>
                        {/*user email */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="emailAddress">user Email Address</label>
                            <input id="emailAddress" type="email" name="email" defaultValue={user.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        {/* username */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="username">Username</label>
                            <input id="username" type="text" defaultValue={user.displayName
                            } name="username" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>

                        {/* short description */}
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">short description</label>
                            <textarea id="textarea" type="textarea" name="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-800 rounded-md hover:bg-pink-900 focus:outline-none focus:bg-green-900">Add</button>
                    </div>
                </form>
            </div>
        </section>



    );
};

export default AddCraft;
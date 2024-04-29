import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {

    const myCrafts = useLoaderData();
    // console.log(myCrafts);
    const [crafts, setCrafts] = useState(myCrafts)
    const [filterValue, setFilterValue] = useState('');
    const handleDelete = _id => {
        console.log(_id);
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

                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: 'DELETE'
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })

                            const remaining = crafts.filter(craft => craft._id !== _id)
                            setCrafts(remaining);
                        }


                    })

            }
        });
    }

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
        // If a filter is selected, filter the crafts based on the selected value
        if (e.target.value) {
            const filteredCrafts = myCrafts.filter(craft => craft.customization === JSON.parse(e.target.value));
            setCrafts(filteredCrafts);
        } else {
            // If no filter is selected, reset the crafts to the original list
            setCrafts(myCrafts);
        }
    };
    return (
        <section className="w-[70%] mx-auto">

            <div className="flex border-2 w-[30%] mx-auto justify-end ">
                <select value={filterValue} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="true">yes</option>
                    <option value="false">no</option>
                </select>
            </div>

            <div className="grid grid-cols-1   gap-5  py-7">

                {
                    crafts.map(item => <div key={item._id} className="card border h-72 card-side bg-base-100  shadow-xl">
                        <figure className="flex-1 p-5 "><img className="rounded-2xl " src={item.photoUrl} alt={item.itemName
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
                                <Link to={`/update/${item._id}`}>
                                    <button
                                        className="text-slate-800 hover:text-slate-700 text-lg bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </span>
                                        <span className="hidden md:inline-block">Update</span>
                                    </button>
                                </Link>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-square btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>

                            </div>
                        </div>
                    </div>)
                }


            </div>
        </section>
    );
};

export default MyCraft;
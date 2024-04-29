import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {

    const myCrafts = useLoaderData();
    console.log(myCrafts);
    const [crafts, setCrafts] = useState(myCrafts)
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

                            const remaining = crafts.filter(craft => craft._id !==_id)
                            setCrafts(remaining);
                        }


                    })

            }
        });
    }

    return (
        <section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-36">

                {
                    crafts.map(item => <div key={item._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={item.photoUrl} alt={item.itemName
                        } /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.itemName
                            }</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
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
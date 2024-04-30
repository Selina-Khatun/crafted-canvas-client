import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const AllArt = () => {

    const { crafts } = useContext(AuthContext)
    //    console.log(crafts)

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>photo</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th> price</th>
                            <th>stockStatus</th>
                            <th> Action</th>

                        </tr>
                    </thead>

                    {
                        crafts?.map(item => (
                            <tbody key={item._id}>

                                <tr className="bg-base-200">
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src={item.photoUrl} />
                                            </div>
                                        </div></td>
                                    <th >{item.itemName}</th>
                                    <td>{item.processingTime}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stockStatus}</td>
                                    <td><Link to={`/details/${item._id}`}>
                                        <button className="btn hover:bg-green-300 rounded-3xl bg-green-600 px-[9%] text-white">View Details</button>
                                    </Link></td>
                                </tr>

                            </tbody>
                        ))
                    }

                </table>

            </div>
        </div>
    );
};

export default AllArt;
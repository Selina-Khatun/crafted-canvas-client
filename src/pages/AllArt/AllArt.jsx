import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import './AllArt.css'
const AllArt = () => {

    // const { crafts } = useContext(AuthContext);
    const crafts = useLoaderData();
    const { theme } = useTheme();
    const [updatedCrafts, setUpdatedCrafts] = useState(crafts);
    //    console.log(crafts)
    useEffect(() => {
        setUpdatedCrafts(crafts);
    }, [crafts]);
    return (
        <div>

            <div className={`overflow-x-auto lg:w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <table className={`table max-w-xs px-1  lg:max-w-full mx-auto ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                    {/* head */}
                    <thead>
                        <tr className="md:text-2xl px-1 text-orange-500">
                            <th>photo</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th> price</th>
                            <th>stockStatus</th>
                            <th> Action</th>

                        </tr>
                    </thead>

                    {
                        updatedCrafts?.map(item => (
                            <tbody key={item._id} className="px-0" >

                                <tr className=" text-xs  md:text-base ">
                                    <td>
                                        <div className="avatar">
                                            <div className="md:w-24 rounded">
                                                <img src={item.photoUrl} />
                                            </div>
                                        </div></td>
                                    <th >{item.itemName}</th>
                                    <td>{item.processingTime}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stockStatus}</td>
                                    <td><Link to={`/details/${item._id}`}>
                                        <button className=" md:btn hover:bg-orange-500 rounded-3xl md:bg-orange-400 md:px-[9%] ">View Details</button>
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
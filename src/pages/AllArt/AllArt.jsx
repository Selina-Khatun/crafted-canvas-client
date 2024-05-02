import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const AllArt = () => {

    const { crafts } = useContext(AuthContext)
    const { theme } = useTheme();
    const [updatedCrafts, setUpdatedCrafts] = useState(crafts);
    //    console.log(crafts)
    useEffect(() => {
        setUpdatedCrafts(crafts);
    }, [crafts]);
    return (
        <div>

            <div className={`overflow-x-auto ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <table className={`table  ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                    {/* head */}
                    <thead>
                        <tr className="text-2xl text-orange-500">
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
                            <tbody key={item._id} >

                                <tr className="">
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
                                        <button className="btn hover:bg-orange-500 rounded-3xl bg-orange-400 px-[9%] text-white">View Details</button>
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
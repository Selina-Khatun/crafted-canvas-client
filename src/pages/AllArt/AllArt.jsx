import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {
    const crafts = useLoaderData()
    console.log(crafts)
    const { _id, photoUrl, itemName, subcategoryName, price, customization, rating, stockStatus, textarea, processingTime } = crafts;
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
                        crafts.map(craft => (
                            <tbody key={craft.id}>

                                <tr className="bg-base-200">
                                    <td><img src={photoUrl} alt="" /></td>
                                    <th >{itemName}</th>
                                    <td>{processingTime}</td>
                                    <td>{price}</td>
                                    <td>{stockStatus}</td>
                                    <td><Link to={`/details/${_id}`}>
                                        <button className="btn hover:bg-green-300 rounded-3xl bg-green-600 px-[9%] text-white">View Details</button>
                                    </Link></td>
                                </tr>

                            </tbody>
                        ))
                    }





                    {/* {
                        selectedCards.map((selectedCard, index) => (
                            <tbody key={index}>
                                {/* row 1 */}
                    {/* <tr className="bg-base-200">
                                    <th >{index + 1}</th>
                                    <td>{selectedCard.recipe_name}</td>
                                    <td>{selectedCard.preparing_time}</td>
                                    <td>{selectedCard.calories}</td>
                                    <td><button onClick={() => handlePrepared(selectedCard.id,selectedCard.calories,selectedCard.preparing_time,selectedCard)} className="btn hover:bg-green-300 rounded-3xl bg-green-600 px-[9%] text-white">Preparing</button></td>
                                </tr>

                            </tbody> */}
                    {/* ))
                    } */}



                </table>

            </div>
        </div>
    );
};

export default AllArt;
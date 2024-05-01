
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../../../FirebaseProvider/FirebaseProvider';
import {  FaArrowCircleRight, FaRegArrowAltCircleRight } from 'react-icons/fa';
const Categories = () => {
    const { crafts } = useContext(AuthContext)
    return (
        <section className=' mb-10'>
            <h1 className='text-center text-4xl mb-[5%] font-bold'>Art & Craft Categories</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper py-10"
            >

                {crafts?.map(item => (
                    <SwiperSlide key={item._id} > 
                        <div className="card  h-52 w-full my-10 mx-5 bg-base-100 hover:scale-105 transition duration-1000 ease-out shadow-xl image-full">
                            <figure><img className='  ' src={item.photoUrl} alt={item.itemName} /></figure>
                            <div className="card-body justify-center items-center">
                                <h2 className="card-title">Category  : {item.subcategoryName}</h2>

                                {/* <div className="card-actions justify-center items-center">
                                    <button className="btn btn-circle bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">
                                    
                                    <FaArrowCircleRight></FaArrowCircleRight></button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Categories;
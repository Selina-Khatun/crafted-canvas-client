
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Categories = () => {
    return (
        <section>
            <h1 className='text-center text-4xl mb-[5%] font-bold'>Art & Craft Categories</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img className='h-40' src="https://i.ibb.co/5c0yyHr/top-view-hands-knitting.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> Knitting & Crocheting</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img className='h-40' src="https://i.ibb.co/tPHXFNJ/tie-dye-3591130-1280.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> Tie-Dyeing</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card shadow-xl  image-full">
                       
                         <figure className='h-52'><img  src="https://i.ibb.co/6DzdcKF/swati-h-das-m-Hke-T419-LGM-unsplash.jpg" alt="Shoes" /></figure>
                     
                        <div className="card-body  ">
                            <h2 className="card-title"> Embroidery</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img className='h-40' src="https://i.ibb.co/brprNwB/nathan-bang-1n-MIYa-GAnn0-unsplash.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> Quilting
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img className='h-40' src="https://i.ibb.co/Y7pS3D8/240-F-274192168-i-Edj0tgjh-Egh-EXqov5-RPKmufq-J6f-FPPn.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> Macrame
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img className='h-40' src="https://i.ibb.co/99N7zjS/high-angle-person-doing-bead-work.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Beadwork</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Categories;
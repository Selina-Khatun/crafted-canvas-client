import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Banner = () => {

    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper  text-cyan-100 mb-[5%] rounded-b-xl   ">
            <SwiperSlide><div className="hero min-h-screen  " style={{ backgroundImage: 'url(https://i.ibb.co/5c0yyHr/top-view-hands-knitting.jpg) ' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold"> Knitting & Crocheting</h1>
                        <p className="mb-5">Knitting and crocheting are popular needlework crafts that involve creating fabric from yarn or thread using specialized needles or hooks.</p>
                        <button className="btn btn-outline bg-[#dfa674] text-cyan-100  hover:bg-[#d67e32] border-none">Get Started</button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6DzdcKF/swati-h-das-m-Hke-T419-LGM-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold"> Embroidery</h1>
                            <p className="mb-5">Embroidery is a versatile and intricate needlework technique that involves decorating fabric with thread, yarn, or other materials to create patterns, designs, or images.</p>
                            <button className="btn btn-outline bg-[#dfa674] hover:bg-[#d67e32] border-none">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Y7pS3D8/240-F-274192168-i-Edj0tgjh-Egh-EXqov5-RPKmufq-J6f-FPPn.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold"> Macrame</h1>
                            <p className="mb-5">Tie-dyeing is a fabric dyeing technique that involves twisting, folding, or bunching fabric and then tying it tightly with string or rubber bands before applying dye.</p>
                            <button className="btn btn-outline bg-[#dfa674] hover:bg-[#d67e32] border-none">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/tPHXFNJ/tie-dye-3591130-1280.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold"> Tie-Dyeing</h1>
                        <p className="mb-5">Macrame is a craft technique that involves creating intricate patterns and designs by tying knots in cords or strings. Originating centuries ago, macrame has evolved into a popular form</p>
                        <button className="btn btn-outline bg-[#dfa674] hover:bg-[#d67e32] border-none">Get Started</button>
                    </div>
                </div>
            </div></SwiperSlide>



        </Swiper>
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';

const Waiting = () => {
    return (
       
            <div className="container my-24 mx-auto md:px-6">
           
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                            <div className="flex lg:py-12">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/033.jpg" className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="image" />
                            </div>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex h-full items-center rounded-lg bg-yellow-700 p-6 text-center text-white lg:pl-12 lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="mb-6 text-3xl font-bold">
                                        What are you waiting for?
                                    </h2>
                                    <p className="mb-6 pb-2 lg:pb-0">
                                    Welcome – you’re in the perfect place for all your art and craft inspiration. We want to help you express your personality, have more fun and learn through creativity. With stacks of new ideas, hints and tips, blogs, tutorials, news and free events, we’re everything art and craft!
                                    </p>
                                    <Link to={'/register'}>
                                    <button type="button" className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-60 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200" data-te-ripple-init data-te-ripple-color="light">
                                        Sign up now
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
            </div>
          
     
    );
};

export default Waiting;
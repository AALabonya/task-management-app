import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1 className="text-center mt-10 font-bold text-1xl">About Us</h1>
            <h1 className="text-center mt-1 font-bold text-2xl">What we do</h1>
            <div className="flex justify-center">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                            <h1 className="font-bold text-xl">We are providing a better facility.</h1>
                            <p>At our core, we are dedicated to providing you with an unmatched experience. Our commitment revolves around delivering services that go beyond expectations, ensuring your satisfaction every step of the way</p>
                            <div className="flex space-x-1 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-1">
                                    <p className="leadi">Quality Assurance: Our services are crafted with precision and backed by rigorous quality checks, ensuring excellence in every aspect.!</p>
                                </div>
                            </div>
                            <div className="flex space-x-1 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                    
                                <div className="space-y-1">
                                    <p className="leadi">Quality Assurance: Our services are crafted with precision and backed by rigorous quality checks, ensuring excellence in every aspect.!</p>
                                </div>
                           
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-1">
                                    <p className="leadi">Quality Assurance: Our services are crafted with precision and backed by rigorous quality checks, ensuring excellence in every aspect.!</p>
                                </div>
                            </div>
                            <Link to="/about"><button className="text-center bg-red-500 text-white px-5 py-3 rounded-xl">Read More</button></Link>
                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                <img src="https://i.postimg.cc/NFgyq9fR/deadline-time-management-business-concept-vector-107791-42.jpg" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                            </div>
                            
                        </div>
                        
                    </div>
                   
                </section>
                
            </div>
        </div>
    );
};

export default About;

{/* <div className="hero">
<div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
        <img src="https://i.ibb.co/YBKjj73/mahmoud-fawzy-FBez-BX26dy-Y-unsplash.jpg" className="w-3/4 rounded-lg shadow-2xl" />
        <img src="https://i.ibb.co/dpk4b5v/jeswin-thomas-z-Pfa-Gze-N9-E-unsplash.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <h3 className='text-2xl font-bold'>Granny best offers</h3>
        <h1 className="text-4xl font-bold">Grilled Seafood Paella</h1>
        <p className="py-6">Monkfish, onion, paella rice, garlic & smoked paprika, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping. creamy chesapeake crab dip with artichoke, baked and topped with a hot cheddar cheese.</p>
        <button className="btn btn-neutral">Get More Info</button>
    </div>
</div>
</div> */}
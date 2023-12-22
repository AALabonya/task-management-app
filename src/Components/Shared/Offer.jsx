import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Offer = () => {
    return (
        <div className='overflow-x-hidden' data-aos="zoom-in">
            <h1 className="text-center mt-10 font-bold text-4xl">Explore all Todoist has to offer</h1>
            <div className="flex justify-center mt-10 mb-10">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 rounded-md mb-10">
                    <div   data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="border border-black overflow-x-hidden text-center rounded-lg">
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/imagist/image/fetch/q_auto/f_auto/c_scale,w_256/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Finspiration.png" alt="" className="w-44 h-44 p-4" />
                        </div>
                        <div className="flex justify-center mb-2">
                            <h1>Inspiration hub</h1>
                        </div>
                    </div>
                    <div
                        data-aos-duration="2000" className="border border-black overflow-x-hidden text-center rounded-lg ">
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/imagist/image/fetch/q_auto/f_auto/c_scale,w_256/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Fextensions.png" alt="" className="w-44 h-44 p-4" />
                        </div>
                        <div className="flex justify-center mb-2">
                            <h1>Extension gallery</h1>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="border border-black overflow-x-hidden text-center rounded-lg">
                        <div className="flex justify-center mb-2">
                            <img src="https://res.cloudinary.com/imagist/image/fetch/q_auto/f_auto/c_scale,w_256/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Fprod-quiz.png" alt="" className="w-44 h-44 p-4" />
                        </div>
                        <div className="flex justify-center mb-2">
                            <h1>Productive Quiz</h1>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="border border-black overflow-x-hidden text-center rounded-lg">
                        <div className="flex justify-center mb-2">
                            <img src="https://res.cloudinary.com/imagist/image/fetch/q_auto/f_auto/c_scale,w_128/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Ftemplates.png" alt="" className="w-44 h-44 p-4" />
                        </div>
                        <div className="flex justify-center mb-2">
                            <h1>Template gallery</h1>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="border border-black overflow-x-hidden text-center rounded-lg">
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/imagist/image/fetch/q_auto/f_auto/c_scale,w_128/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Ffeatures.png" alt="" className="w-44 h-44 p-4" />
                        </div>
                        <div className="flex justify-center mb-2">
                            <h1>Features</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
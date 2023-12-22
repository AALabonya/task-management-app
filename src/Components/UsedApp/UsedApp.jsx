import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const UsedApp = () => {
    return (
       <div>
         <h1 className="text-center mt-10 font-bold text-3xl">Who Benefits from Our Task <br/>Management App?</h1>
            <h1 className="text-center mt-4 font-bold text-base">Explore how our app caters to the needs of various professionals.</h1>
         <div className='flex justify-center mt-10 mb-10 container flex-col-reverse mx-auto lg:flex-row'>
         <div className='lg:w-1/2'>
                <Swiper
                    breakpoints={{
                        570: { slidesPerView: 2 , spaceBetween: 70 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1152: { slidesPerView: 3, spaceBetween: 50 }
                    }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://i.postimg.cc/T2NpSSFF/ambition-gets-you-far-i-can-testify-that-portrait-confident-mature-businessman-standing-office-with.webp" alt="" className='h-80 rounded-lg' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/xdjXB2jr/cheerful-curly-business-girl-wearing-glasses-176420-206.jpg" alt="" className='h-80 rounded-lg' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/bwmyD2PM/bohemian-man-with-his-arms-crossed-1368-3542.webp" alt="" className='h-80 rounded-lg' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/QdCLzYL4/beautiful-business-woman-with-hijab-portrait-white-background-33799-7103.webp" alt="" className='h-80 rounded-lg' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/c1FXzxsW/woman-lab-coat-is-holding-tablet-with-words-medical-records-it-176841-36188.webp" alt="" className='h-80 rounded-lg' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/3xXGP1gG/woman-wearing-denim-jacket-stands-front-picture-woman-176841-44380.webp" alt="" className='h-80 rounded-lg' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/KvZ41bL1/doc6.jpg" alt="" className='h-80 rounded-lg' /></SwiperSlide>
                    <SwiperSlide><img src="https://ibb.co/K0Qwv1h" alt="" className='h-80 rounded-lg' /></SwiperSlide>

                </Swiper>
            </div>
            <div className='lg:w-1/2 lg:p-20'>
                <div className='flex justify-center'>
                <p className=''>A task management app is akin to a digital assistant, tirelessly dedicated to organizing, structuring, and streamlining your day-to-day responsibilities. It's a virtual hub where chaos transforms into structured plans and goals. At its core, this app is a dynamic space where tasks, big or small, find their place and purpose.
               <br/>Ultimately, this app isn’t just a tool; it’s a companion on your journey toward increased productivity and efficiency. It’s the digital guardian of your tasks, ensuring they don’t slip through the cracks and empowering you to conquer your day with confidence and clarity.</p>
                </div>
                
            </div>

            
        </div>
       </div>
    );
};

export default UsedApp;


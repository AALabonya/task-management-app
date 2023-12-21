import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
const UsedApp = () => {
    return (
        <div className='flex justify-center mt-10 mb-10'>
            <div className='w-1/2 p-20'>
                <h5 className='text-lg mb-2 font-medium'>In it for the long haul</h5>
                <h1 className='text-3xl font-semibold mb-2'>A task manager you can trust for life</h1>
                <p className='text-lg font-semibold'>We’ve been building Todoist for 16 years and 326 days.<br/> Rest assured that we’ll never sell out to <br/>the highest bidder.</p>
            </div>
           
            <div className='w-1/2'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.postimg.cc/T2NpSSFF/ambition-gets-you-far-i-can-testify-that-portrait-confident-mature-businessman-standing-office-with.webp" alt="" className='h-80 rounded-lg' /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/xdjXB2jr/cheerful-curly-business-girl-wearing-glasses-176420-206.jpg" alt="" className='h-80 rounded-lg'/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/bwmyD2PM/bohemian-man-with-his-arms-crossed-1368-3542.webp" alt="" className='h-80 rounded-lg'/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/QdCLzYL4/beautiful-business-woman-with-hijab-portrait-white-background-33799-7103.webp" alt="" className='h-80 rounded-lg'/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/c1FXzxsW/woman-lab-coat-is-holding-tablet-with-words-medical-records-it-176841-36188.webp" alt="" className='h-80 rounded-lg'/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/3xXGP1gG/woman-wearing-denim-jacket-stands-front-picture-woman-176841-44380.webp" alt="" className='h-80 rounded-lg' /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/KvZ41bL1/doc6.jpg" alt="" className='h-80 rounded-lg'  /></SwiperSlide>
        <SwiperSlide><img src="https://ibb.co/K0Qwv1h" alt="" className='h-80 rounded-lg'  /></SwiperSlide>
        
      </Swiper>
            </div>
        </div>
    );
};

export default UsedApp;
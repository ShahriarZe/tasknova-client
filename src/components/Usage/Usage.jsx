import student from '../../assets/student.png'
import developer from '../../assets/developer.png'
import recruiter from '../../assets/recruiter.png'
import job from '../../assets/jobHolder.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Usage = () => {
    return (
        <div className='mt-10 md:mt-20 lg:mt-32 '>
            <h2 className='text-center mb-6 text-5xl font-bold'>Who We Serve</h2>
            <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide
                    style={{ width: '400px', height: '300px', position: 'relative' }}
                >
                    <img src={student} alt='Student' className='w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 flex text-white'>
                        <div className='bg-black bg-opacity-70 p-6'>
                            <span className='text-2xl font-bold underline'>Student</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{ width: '400px', height: '300px', position: 'relative' }}
                >
                    <img src={developer} alt='Student' className='w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 flex text-white'>
                        <div className='bg-black bg-opacity-70 p-4'>
                            <span className='text-2xl font-bold underline'>Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{ width: '400px', height: '300px', position: 'relative' }}
                >
                    <img src={recruiter} alt='Student' className='w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 flex text-white'>
                        <div className='bg-black bg-opacity-70 p-4'>
                            <span className='text-2xl font-bold underline'>Recruiter</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{ width: '400px', height: '300px', position: 'relative' }}
                >
                    <img src={job} alt='Student' className='w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 flex text-white'>
                        <div className='bg-black bg-opacity-70 p-4'>
                            <span className='text-2xl font-bold underline'>Job Holder</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
};

export default Usage;
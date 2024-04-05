

import React from 'react'
import Nave from "../nave/Nave"
import { motion } from "framer-motion"
import Service from '../service/Service'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade } from "swiper/modules"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../../assets/image2r.png"






const fadeAnimation = {
  initial: {
    opacity: 0,
    y: 100

    // y:100
  },
  animate: {

    opacity: 1,
    // y:0,
    y: 0,
    transition: {

      duration: 0.5
    }
  }
}

function Home() {
  return (
    <div>

      <Nave />

      <div className='w-full min-h-screen bg-[#16161d] flex flex-wrap      '>

        <div className=' w-[100%] sm:w-[50%] h-[500px] pt-[100px] pl-[20px] sm:pl-[70px]  '>

          <motion.p

            variants={fadeAnimation}
            initial="initial"
            animate='animate'
            whileInView='animate'
            viewport={{
              once: true
            }}


            className='text-white text-[30px] sm:text-[40px] font-Poppins '>


            Welcome to our Developer Community, where collaboration fuels innovation,
            learning is endless, and freelancing opportunities abound!

          </motion.p>




        </div>

        <div className='w-[100%] sm:w-[50%] h-[500px] flex justify-center pt-[100px] sm:pt-[70px]   ' >

          
          <div   >

            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true
              }}



              src={image1} className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]  ' />

          </div>




        </div>
        
        
        </div>

      <Service />



    </div>
  )
}

export default Home

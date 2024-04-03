

import React from 'react'
import Nave from "../nave/Nave"
import { motion } from "framer-motion"


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

      delay: 0.3
    }
  }
}

function Home() {
  return (
    <div>

      <Nave />

      <div className='w-full h-screen bg-[#16161d] flex flex-wrap   '>

        <div className=' w-full h-[700px]  sm:w-[50%] sm:h-[100%] pt-[100px] pl-[20px] sm:pl-[70px]  '>

          <motion.p

            variants={fadeAnimation}
            initial="initial"
            animate='animate'
            whileInView='animate'
            viewport={{
              once: true
            }}


            className='text-white text-[35px] sm:text-[40px] font-Poppins '>


            Welcome to our Developer Community, where collaboration fuels innovation,
            learning is endless, and freelancing opportunities abound!

          </motion.p>




        </div>

        <div className=' w-full h-[800px] sm:w-[50%] sm:h-[100%] '>


        </div>


      </div>

    </div>
  )
}

export default Home

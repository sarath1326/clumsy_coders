
import React from 'react'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import appimage from "../../assets/appimgr.png"

function Service() {

    const [state, setstate] = useState([1,2,3,4])
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const controls = useAnimation();

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5, 
    });

    useEffect(() => {
        if (inView) {
            setTriggerAnimation(true);
        }
    }, [inView]);



    useEffect(() => {
        if (triggerAnimation) {
            controls.start({

                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,

                },
            });
        }
    }, [triggerAnimation, controls]);


    return (
        <div>

            <div className='w-full min-h-screen bg-[#16161d]' >

                <h4 className='text-white font-Poppins text-center text-[25px] sm:text-[30px] ' > Our <span className='text-[#00C0FF]' > Services </span> </h4>
                <div ref={ref} className='w-full min-h-[600px]  flex justify-center items-center gap-5 flex-wrap mt-10 sm:mt-0 ' >

                    {
                        state.map((obj, index) => (

                            <motion.div 
                                initial={{ opacity: 0, y: 100 }}
                                animate={controls}
                                className='w-[250px] h-[270px]  rounded-lg mt-0 border-2 border-[#00C0FF] ' >

                                    <img src={appimage} alt="" className='w-[230px] h-[230px]  ' />

                                    <p className='text-white text-center' > Mobile App Developing </p>


                            </motion.div>



                        ))
                    }

                </div>









            </div>



        </div>
    )
}

export default Service

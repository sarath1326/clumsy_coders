

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';


function About() {

    const navigate = useNavigate()

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

            <div className='w-full h-[700px] bg-[#16161d] flex justify-center pt-[150px] ' >

                <motion.div ref={ref}

                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}


                    className='w-[600px] h-[200px] pl-[20px] sm:pl-[0]  ' >

                    <p className='text-yellow-400 font-Poppins text-[20px] sm:text-[25px]' > <span className='text-[#00C0FF]' > Clumsy </span>  <span className='text-[#FF204E]' > Coders</span> <span> </span>

                        is a developers community. we have a

                        storng techies in our background.create user-friendly and roubst softwares.

                    </p>

                    <button onClick={() => { navigate("/joincommunity") }} className=' w-[200px] h-[40px] font-semibold mr-5 mt-[100px] bg-[#00C0FF] text-black  rounded-lg ' > Join Our Community </button>

                    <button onClick={() => { navigate("/contact") }} className=' w-[200px] h-[40px] font-semibold bg-[#00C0FF] text-black mt-[20px] rounded-lg ' > Contact Us </button>


                </motion.div>




            </div>

        </div>
    )
}

export default About

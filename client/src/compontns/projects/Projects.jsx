

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import comming from "../../assets/comming.jpeg"
import rocat from "../../assets/rocatr.png"
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import proimg from "../../assets/proimg.png"

function Projects() {



    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();



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

    useEffect(() => {
        if (triggerAnimation) {
            controls2.start({

                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.8,

                },
            });
        }
    }, [triggerAnimation, controls2]);







    return (
        <div>

            <div className='w-full min-h-[500px] bg-[#16161d] pt-20' >

                <div className='w-full flex justify-around items-center ' >

                    <motion.div

                        initial={{ opacity: 0, x: 100 }}
                        animate={controls2}




                        className='w-[100px] sm:w-[500px] h-[3px] bg-[#00C0FF] rounded-lg'> </motion.div>

                    <h4 className='text-yellow-300 font-Poppins text-center text-[20px] sm:text-[30px] ' > Projects </h4>

                    <motion.div

                        initial={{ opacity: 0, x: -100 }}
                        animate={controls2}

                        // whileInView={{ opacity: 1,x: 0 }}
                        // viewport={{ once: true }}

                        className='w-[100px] sm:w-[500px] h-[3px] bg-[#00C0FF] rounded-lg'> </motion.div>




                </div>




                <div ref={ref} className='w-full min-h-[600px]  flex justify-center items-center gap-20 flex-wrap mt-10 sm:mt-0 ' >






                    <motion.div
                        style={{ backgroundImage: `url(${proimg})` }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={controls}
                        className="w-[250px] h-[270px] bg-cover bg-center   rounded-lg mt-0 border-2  border-[#00C0FF] hover:border-yellow-300" >
                        {/* style={{backgroundImage:`url(${proimg})`}} */}

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={controls}
                        className='w-[250px] h-[270px]   rounded-lg mt-0 border-2  border-[#00C0FF] hover:border-yellow-300 ' >

                        <img src={comming} alt="" className='w-[100%] h-[100%] rounded-lg  ' />

                        {/* <p className='text-white text-center font-Poppins' > {obj.name} </p> */}


                    </motion.div>





                </div>









            </div>


        </div>
    )
}

export default Projects




import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import teamimg from "../../assets/teamr.png"
import team1 from "../../assets/team2.png"
import { useState, useEffect } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

function Team() {

    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const controls = useAnimation();
    const controls2 = useAnimation();


    const navigate=useNavigate()



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

        <div className='w-full h-[900px] sm:h-[600px]   bg-[#16161d] pt-14 ' >

            <div  className='w-full h-[30px] flex justify-around items-center  ' >

                <motion.div

                    initial={{ opacity: 0, x: 100 }}
                    animate={controls2}




                    className='w-[100px] sm:w-[500px] h-[3px] bg-[#00C0FF] rounded-lg'> </motion.div>

                <h4 className='text-yellow-300 font-Poppins text-center text-[20px] sm:text-[30px] ' > Our Team </h4>

                <motion.div

                    initial={{ opacity: 0, x: -100 }}
                    animate={controls2}

                    // whileInView={{ opacity: 1,x: 0 }}
                    // viewport={{ once: true }}

                    className='w-[100px] sm:w-[500px] h-[3px] bg-[#00C0FF] rounded-lg'> </motion.div>




            </div>



            <div ref={ref} className='w-full h-[500px]  flex flex-wrap  ' >

                <motion.div

                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}

                    className='w-[100%]  sm:w-[50%]  pt-7 sm:pt-12 pl-8 sm:pl-20  ' >

                    <img src={teamimg} alt="" className='w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]' />



                </motion.div>


                <div className='w-[100%] sm:w-[50%]    sm:pt-[100px] flex  justify-center '>

                    {/* <div className='w-[600px] h-[300px] overflow-auto scrollbar-thumb-blue-500 scrollbar-track-red-200 ' >

                        {
                            team.map((obj) => (

                                <div className='w-[500px] h-[70px] bg-blue-600 rounded-lg mb-5 pl-5 flex' >

                                    <div className='w-[70px] h-[70px] bg-yellow-400 rounded-full' >

                                    </div>

                                    <div className='w-[300px] h-[50px]  mt-2 pl-10' >

                                        <p className='text-white font-Poppins text-[18px]' > {obj.name} </p>

                                        <div className='flex items-center' >

                                            <span className='font-Poppins mr-20' > {obj.posi} </span>

                                            <a href={`${obj.link}`} > <FaLinkedin className='text-white mr-2 cursor-pointer' />  </a>


                                            <a > <FaGithub className='text-white cursor-pointer ' />   </a>

                                        </div>


                                    </div>


                                </div>

                            ))
                        }



                    </div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={controls}
                        
                        className='w-[100%]  ' >

                        <p className='text-white font-Poppins text-[20px] ml-7 sm:ml-0' > 

                        Teamwork is the heart of success, harmonizing individual efforts into 
                        a symphony of achievement. Together, we craft 
                        a masterpiece of innovation and resilience, weaving 
                        a story of triumph with every collaborative note.
                        
                         </p>

                        <p className='text-center text-[60px] font-Poppins sm:mt-10   ' >
                            <span className='font-Poppins text-white' > 10 </span>
                            <span className='font-Poppins text-red-600 text-[30px]' > +</span>

                            <span className='text-white font-Poppins text-[20px]' > Techies </span>

                        </p>

                        <div className='w-[100%] flex justify-center gap-3 flex-wrap' >

                            <button onClick={()=>{navigate("/joincommunity")}} className=' w-[200px] h-[40px] font-semibold bg-yellow-400 text-black mt-8 rounded-lg ' > Join Our Community </button>

                            <button onClick={()=>{navigate("/contact")}} className=' w-[200px] h-[40px] font-semibold bg-yellow-400 text-black mt-8 rounded-lg ' > Contact Us </button>

                        </div>


                </motion.div>







            </div>



        </div>







        </div >

    )
}

export default Team

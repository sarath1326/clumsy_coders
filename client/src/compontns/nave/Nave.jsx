

import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { motion } from "framer-motion"


function Nave() {

    const [nav, setnav] = useState(false)
    const [navopt,setnavopt]=useState([
        {text:"Home"},
        {text:"About"},
        {text:"Projects"},
        {text:"Contact"}
    ])



    // #00C0FF

    return (
        <div>

            <div className='w-full h-[100px] bg-[#16161d] flex text-[#00C0FF]  ' >

                <div className='w-[50%] h-[100%] flex items-center pl-5 sm:pl-10 ' >

                    <p className='font-Rakkas' >

                        <span className='text-[#00C0FF] text-[25px] ' > Clumsy  </span>


                        <span className='text-[#FF204E] text-[25px] '  > Coders </span>

                    </p>

                </div>

                <div className='w-[50%] h-[100%] flex items-center    '>

                    {/* hambarger button div */}
                    <div className=' sm:hidden  w-[100%] h-[100%]  flex justify-end items-center pr-10 ' >

                        {
                            nav ? <RxCross2 className='text-[#00C0FF] text-[25px]' onClick={() => { setnav(!nav) }} />
                                :

                                <GiHamburgerMenu className='text-[#00C0FF] text-[25px]' onClick={() => { setnav(!nav) }} />

                        }




                    </div>

                    {/* nave option div lapview */}
                    <div className='hidden sm:block' >

                        <div className='flex gap-20 ml-[200px] font-Poppins text-[15px]'>

                            {
                                navopt.map((obj,index)=>(

                                    <motion.span 
                                    initial={{opacity:0,x:-100}}
                                    animate={{opacity:1,x:0}}
                                    transition={{duration:0.3  }}
                                    
                                    className='cursor-pointer hover:text-red-600' > 
                                    
                                    {obj.text} 
                                    
                                    </motion.span>
                                      
                                ))
                            }

                            

                            

                            


                        </div>


                    </div>






                </div>



            </div>

            {
                nav &&



                <div className='w-full h-[500px] fixed top-0 '>

                    <div className='w-full h-[100%] bg-yellow-300  rounded-b-[40px]' >

                        <div className='w-full h-[100px] flex justify-end items-center pr-10' >

                            <RxCross2 className='text-[#00C0FF] text-[30px]' onClick={() => { setnav(!nav) }} />


                        </div>

                        <div className='w-full h-[300px]  grid content-center justify-center gap-10  text-[20px] font-Arimo font-bold ' >



                            <p> Home </p>

                            <p> About </p>

                            <p> Projects </p>

                            <p> Contact </p>


                        </div>



                    </div>

                </div>









            }




        </div>
    )
}

export default Nave

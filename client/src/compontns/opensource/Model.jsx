

import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
import { FaGithub } from "react-icons/fa";


function Model({ data, func }) {

    const navigate = useNavigate()



    return (
        <div>

            <div className=' fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center'  >



                <div className=' w-[300px] h-[350px] sm:w-[550px] sm:h-[300px] bg-white border-2 border-black rounded-xl' >



                    <p onClick={() => { func(false) }} className='text-end mr-3 font-bold cursor-pointer' > X </p>

                    <p className='text-center font-Poppins text-[20px]' > {data.name} </p>

                    <div className='w-full flex justify-center mt-8' >

                       <a href={data.repo}> <FaGithub className='text-[25px] cursor-pointer' />   </a> 

                    </div>

                    <p className='m-5 font-Poppins' > 
                        
                        {data.dis}
                        
                        

                    </p>













                </div>



            </div>

        </div>
    )
}

export default Model

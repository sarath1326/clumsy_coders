

import React from 'react'
import Nave from '../nave/Nave'
import openimg from "../../assets/openr.png"
import { useNavigate } from 'react-router-dom'

function OpenS() {

    const navigate = useNavigate()



    return (
        <div>

            <div className='w-full  min-h-[600px] bg-[#16161d] flex flex-wrap '>



                <div className=' w-[100%] sm:w-[50%] h-[700px] sm:h-[500px] sm:pt-[100px]  pl-[50px] pt-[70px]  ' >

                    <h1 className=' text-[25px] sm:text-[30px] text-white font-Poppins ' > Open Source  </h1>

                    <p className='font-Poppins text-yellow-400 mt-[50px] text-[20px]' >

                    Open source projects are more than just software—they represent a global community 
                    driving innovation and collaboration. From transparency to customization, 
                    open source empowers us to create, learn, and build 
                    together. Let's celebrate the spirit of openness and 
                    join the movement for a more inclusive and innovative digital future!

                         </p>

                    <button onClick={() => { navigate("/viewproject") }} className=' w-[200px] h-[40px] font-semibold bg-[#00C0FF] text-black mt-14 rounded-lg mr-5 ' > Projects </button>

                    <button onClick={() => { navigate("/openHost") }} className=' w-[200px] h-[40px] font-semibold bg-[#00C0FF] text-black mt-8 rounded-lg ' > Host </button>


                </div>



                <div className=' w-[100%] sm:w-[50%] h-[500px] flex justify-center sm:items-center' >


                    <img src={openimg} className='w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] ' />



                </div>





            </div>

        </div>
    )
}

export default OpenS

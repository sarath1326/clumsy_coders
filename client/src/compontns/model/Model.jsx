

import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom"


function Model() {

    const navigate=useNavigate()



    return (
        <div>

            <div className=' fixed inset-0 bg-white bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center'  >

                {/* <div className='w-full h-[650px] flex justify-center items-center ' >

                    <div className='w-[300px] sm:w-[400px] h-[300px] sm:h-[250px] bg-red-500  absolute rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_5px_8px] ' >

                        <div className='w-full h-[10px] bg-white flex justify-end pr-5 pt-5 ' >



                        </div>


                        <div className='w-full h-[80px] bg-white flex justify-center pt-5  ' >



                        </div>

                        <p className='text-center text-wrap mt-8 text-white font-semibold text-[18px]' > Create an Account and Part of Donor Sync </p>

                        <div className='w-full flex justify-center mt-5'>

                            <button className='w-[100px] h-[35px] bg-white rounded-2xl hover:shadow-[rgba(0,_0,_0,_0.24)_0px_5px_8px]' > Register </button>

                        </div>

                        <p className='text-center text-[13px] mt-3 cursor-pointer'  > Skip </p>




                    </div>




                </div> */}

                <div className='w-[550px] h-[300px] bg-white border-2 border-black rounded-xl' >

                    <div className=' w-full flex items-center mt-[100px] justify-center gap-3' >


                        <h1 className=' font-Poppins text-[20px] text-green-600 ' >
                            your detailes successfuly submited  </h1>

                        <IoCheckmarkCircleSharp className='text-[30px] text-green-600' />

                    </div>


                    <h1 className='text-center font-Poppins text-[15px] mt-10' > we will check your profile and contact  </h1>

                    <div className='w-full flex justify-center items-center mt-[50px]' >

                        <button onClick={()=>{navigate("/")}} className='w-[150px] h-[35px] bg-yellow-500 rounded-lg font-medium' > Go Back </button>

                    </div>

                </div>



            </div>

        </div>
    )
}

export default Model

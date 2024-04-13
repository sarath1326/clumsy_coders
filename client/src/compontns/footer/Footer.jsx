


import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate=useNavigate()

  return (
    <div>

      <div className='w-full h-[500px] sm:h-[300px] bg-blue-200 pt-8 ' >

        <div className='w-full pl-7  ' >

          <p className='font-Rakkas' >

            <span className='text-black text-[25px] ' > Clumsy  </span>


            <span className='text-[#FF204E] text-[25px] '  > Coders </span>

          </p>

        </div>
        <p className='font-Poppins text-[13px] ml-7' > solve your digital problems  </p>

       

        <div className='w-full   flex flex-wrap' >

          <div className='w-[100%] sm:w-[50%] h-[100px] flex items-center  gap-5 pl-7' >

          {/* <p onClick={()=>{navigate("/joincommunity")}}  className='font-Poppins  cursor-pointer' > Join our Community </p>  */}
          <p onClick={()=>{navigate("/projects")}} className='font-Poppins font-medium  cursor-pointer' > Projects </p> 
          <p onClick={()=>{navigate("/services")}} className='font-Poppins font-medium cursor-pointer' > Services </p>

          </div>
          
          <div className='w-[100%] sm:w-[50%] h-[140px] ' >
          
          <p className=' text-center sm:text-end font-Poppins sm:mr-[100px]' > Contact Us </p>

          <div className='w-full flex justify-end pr-[50px] pt-5' >

            <div>

          <div className='flex items-center gap-3 mb-3' > 
          <IoMail className='text-[20px]' /> 
          <span className='font-Poppins text-[15px]' >clumsycoder4u@gmail.com </span> </div>  
           
           <FaPhone className='text-[20px] mb-3' />
            
          <a href="https://github.com/clumsy-coders-org"> <FaGithub className='text-[20px]' />    </a>  

            </div>

           

          
          
          </div>

               



          </div>

        </div>

        <p className='text-center font-Poppins text-[13px] mt-5' > &#169; clumsy coders 2024 </p>








      </div>





    </div>
  )
}

export default Footer

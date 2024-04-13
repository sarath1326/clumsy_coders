

import React from 'react'
import Nave from '../nave/Nave'
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { useFormik } from "formik"
import { validationSchema } from "./validation"
import axios from "../../constant/axios"
import {message} from "antd"
import Model from '../model/Model';
import { useState } from 'react';

function Contact() {

    const [pop,setpop]=useState(false)


    const initalValues = {

        name: "",
        email: "",
        mobile: "",
        message: ""
    }


    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({

        initialValues: initalValues,
        validationSchema: validationSchema,

        onSubmit:(values)=>{

            axios.post("/contact",{values}).then((respo)=>{

                  if(respo.data.flag){

                    setpop(true)

                     
                  }else{

                      message.error("server error")
                  }
            }).catch(err=>{

                 message.error("network error")
            })

        }

    })






    return (
        <div>

            <div>

                {
                     pop && <Model msg={"we will contact you"} />
                }

                {/* <Nave /> */}

                <div className='w-full min-h-[600px]  bg-[#16161d] flex flex-wrap'>

                    <div className='w-[100%] sm:w-[50%] h-[550px]  pt-[50px]   ' >



                        <div className='w-[400px] h-[400px] sm:w-[600px] pl-[50px] sm:pl-[100px] '  >

                            <h1 className='font-Poppins text-[25px] text-yellow-400 ' > Contact Us  </h1>

                            <form action="" onSubmit={handleSubmit} >

                                <label htmlFor="" className='text-[#00C0FF]' > Name </label><br />

                                <input type="" value={values.name} name='name' onChange={handleChange} onBlur={handleBlur}
                                    placeholder='your name' className='w-[300px] h-[40px] rounded-lg' /><br />

                                {
                                    errors.name && touched.name ?

                                        <><span className='text-red-600' > {errors.name} </span><br /></>

                                        : <br />

                                }


                                <label htmlFor="" className='text-[#00C0FF]'> Email </label><br />

                                <input type="email" value={values.email} name='email' onChange={handleChange} onBlur={handleBlur}
                                    placeholder='your email id' className='w-[300px] h-[40px] rounded-lg' /><br />

                                {
                                    errors.email && touched.email ?

                                        <><span className='text-red-600' > {errors.email} </span><br /></>

                                        : <br />

                                }




                                <label htmlFor="" className='text-[#00C0FF]' > Mobile </label><br />

                                <input type="text" value={values.mobile} name='mobile' onChange={handleChange} onBlur={handleBlur}
                                    placeholder='your mobile number' className='w-[300px] h-[40px] rounded-md' /><br />

                                {
                                    errors.mobile && touched.mobile ?

                                        <><span className='text-red-600' > {errors.mobile} </span><br /></>

                                        : <br />

                                }




                                <label htmlFor="" className='text-[#00C0FF]' > Message </label><br />

                                <textarea type="text" value={values.message}  name='message' onChange={handleChange} onBlur={handleBlur}

                                    placeholder='enter feel to free...' className='w-[300px] h-[100px] rounded-md text-start text-wrap' /><br />

                                {
                                    errors.message && touched.message?

                                        <><span className='text-red-600' > {errors.message} </span><br /></>

                                        : <br />

                                }

                                <button className='w-[100px] h-[30px] bg-yellow-400 font-medium rounded-md' > Submit </button>











                            </form>


                        </div>






                    </div>

                    <div className='w-[100%] sm:w-[50%] h-[550px] pt-[100px] sm:pt-[150px]  ' >

                        <p className='text-yellow-400 text-[20px] sm:text-[30px] ml-7 sm:ml-0' > slove your digital problems with us.  </p>
                        <p className='text-yellow-400 text-[20px] sm:text-[30px] ml-7 sm:ml-0' > we have a experiensed developers community ! ! </p>

                        <div className='w-full flex gap-5 items-center mt-[50px]' >

                            <div className='w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] bg-yellow-400 rounded-full flex justify-center items-center' >

                                <IoMail className='text-[20px] sm:text-[30px]' />

                            </div> <p className='text-[#00C0FF]' > Clumsycoders4u@gmail.com </p>

                            <div className='w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] bg-yellow-400 rounded-full flex justify-center items-center' >

                                <IoLogoWhatsapp className='text-[20px] sm:text-[30px]' />

                            </div>

                            <p className='text-[#00C0FF]' > 7592831937 </p>



                        </div>




                    </div>


                </div>

            </div>

        </div>
    )
}

export default Contact



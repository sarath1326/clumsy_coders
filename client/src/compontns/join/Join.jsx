

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useFormik } from "formik"
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { validationSchema } from "./validation"
import axios from "../../constant/axios"
import Model from '../model/Model';
import { message } from "antd"
import Nave from "../nave/Nave"
import { ThreeDots } from 'react-loader-spinner'


function Join() {

    axios.defaults.withCredentials = true;
    const [pop, setpop] = useState(false)
    const [spinner, setspinner] = useState(false)

    const initalValues = {

        name: "",
        email: "",
        mobile: "",
        linkedin: "",
        git: ""
    }


    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({

        initialValues: initalValues,
        validationSchema: validationSchema,

        onSubmit: (values) => {

            setspinner(true)

            axios.post("/join", { values }).then((respo) => {

                if (respo.data.flag) {

                    setpop(true)
                    setspinner(false)

                } else {

                    message.error("server error !")
                    setspinner(false)
                }


            }).catch(err => {

                message.error("network error !")
                setspinner(false)
            })


        }

    })





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
                    duration: 1,

                },
            });
        }
    }, [triggerAnimation, controls]);







    return (
        <div>

            {/* <Nave /> */}

            <div className='w-full h-screen bg-[#16161d] flex justify-center items-center'>

                {

                    pop && <Model msg={"we will check your profile and contact"} />

                }

                <div

                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    className='w-[400px] h-[550px] bg-white rounded-lg' >


                    <p className='text-center font-Poppins text-[25px] mt-5 ' > Welcome  </p>

                    <div className='w-full flex pl-14 ' >

                        <form onSubmit={handleSubmit}    >

                            <label htmlFor=""> full name </label><br />

                            <input value={values.name} name='name' onChange={handleChange} onBlur={handleBlur}
                                className='border-2 border-[#00C0FF] w-[250px] h-[35px] rounded-md text-center' type="text" placeholder='enter full name' /><br />
                            {
                                errors.name && touched.name ?

                                    <> <span className='text-red-600 text-[13px] font-Poppins' > {errors.name} </span><br /> </>

                                    : <br />
                            }



                            <label htmlFor=""> email id </label><br />

                            <input value={values.email} name='email' onChange={handleChange} onBlur={handleBlur}
                                className='border-2 border-[#00C0FF] w-[250px] h-[35px] rounded-md text-center' type="text" placeholder='enter email id' /><br />

                            {
                                errors.email && touched.email ?

                                    <> <span className='text-red-600 text-[13px] font-Poppins' > {errors.email} </span><br /> </>

                                    : <br />
                            }


                            <label htmlFor=""> mobile number </label><br />

                            <input value={values.mobile} name='mobile' onChange={handleChange} onBlur={handleBlur}
                                className='border-2 border-[#00C0FF] w-[250px] h-[35px] rounded-md text-center' type="text" placeholder='enter mobile number' /><br />

                            {
                                errors.mobile && touched.mobile ?

                                    <> <span className='text-red-600 text-[13px] font-Poppins' > {errors.mobile} </span><br /> </>

                                    : <br />
                            }

                            <label htmlFor=""> Github </label><br />

                            <input value={values.git} name='git' onChange={handleChange} onBlur={handleBlur}
                                className='border-2 border-[#00C0FF] w-[250px] h-[35px] rounded-md text-center' type="text" placeholder='add your github url' /><br />

                            {
                                errors.git && touched.git ?

                                    <> <span className='text-red-600 text-[13px] font-Poppins' > {errors.git} </span><br /> </>

                                    : <br />
                            }


                            <label htmlFor=""> Linkedin </label><br />

                            <input value={values.linkedin} name='linkedin' onChange={handleChange} onBlur={handleBlur}
                                className='border-2 border-[#00C0FF] w-[250px] h-[35px] rounded-md text-center' type="text" placeholder='add your linkedin url' /><br />

                            {
                                errors.linkedin && touched.linkedin ?

                                    <> <span className='text-red-600 text-[13px] font-Poppins' > {errors.linkedin} </span><br /> </>

                                    : <br />
                            }

                            <div className=' w-[100%] flex justify-center items-center' >

                                <button type='submit' className='w-[130px] h-[40px] bg-[#00C0FF] rounded-md font-medium text-center  mt-7 ' >

                                    {

                                        spinner ?

                                            <div className='ml-[50px]' >

                                                <ThreeDots
                                                    visible={true}
                                                    height="30"
                                                    width="30"
                                                    color="#003C43"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                />

                                            </div>



                                            :

                                            " Submit "


                                    }

                                </button>


                            </div>




                        </form>



                    </div>




                </div>














            </div>



        </div>
    )
}

export default Join

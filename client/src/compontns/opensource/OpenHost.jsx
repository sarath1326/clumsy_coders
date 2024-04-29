

import React from 'react'
import { useFormik } from "formik"
import { validationSchema } from "./validationSchema"
import axios from "../../constant/axios"
import { message } from 'antd'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'



function OpenHost() {

    const [spinner, setspinner] = useState(false)
    const [tools, settools]= useState([])
    const navigate=useNavigate()

    const addTools=(value)=>{

          settools([...tools,values.stack])

         values.stack=""

          

       
    }

    axios.defaults.withCredentials = true;




    const initalValues = {

        name: "",
        dis: "",
        repo: "",
        stack: ""

    }


    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({

        initialValues: initalValues,
        validationSchema: validationSchema,

        onSubmit: (values) => {

            setspinner(true)

            const data={

                 data:values,
                 tools:tools

            }


            axios.post("/opensource/addnewproject", data).then((respo) => {

                if (respo.data.flag) {

                    setspinner(false)
                    navigate("/openSource")
                    
                
                } else {

                    message.error("server error")
                    setspinner(false)
                }


            }).catch(err => {

                message.error("Network Error")
                setspinner(false)

            })


        }

    })








    return (
        <div>

            <div className='w-full h-[650px] bg-[#16161d]' >

                <p className='text-yellow-400 text-center font-Poppins pt-[50px] text-[20px]' > Host your Open Source project explore deferient skills ! !  </p>

                <div className='w-full flex justify-center pt-[50px] ' >


                    <form action="" onSubmit={handleSubmit} >


                        <label htmlFor="" className='text-[#00C0FF]  ' > Project Name </label><br />

                        <input className='w-[300px] h-[35px] rounded-sm' type="text" placeholder=' project name'

                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            name='name'
                        /><br />

                        {errors.name && touched.name ?

                            <> <span className='text-red-600' > {errors.name} </span><br /> </>

                            :

                            <br />

                        }





                        <label htmlFor="" className='text-[#00C0FF]  ' > Discription </label><br />

                        <textarea className='w-[300px] h-[60px] rounded-sm' placeholder='Discription' type="text"

                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dis}
                            name='dis'



                        /><br />

                        {errors.dis && touched.dis ?

                            <> <span className='text-red-600' > {errors.dis} </span><br /> </>

                            :

                            <br />

                        }



                        <label htmlFor="" className='text-[#00C0FF]  ' > Repo Link </label><br />

                        <input className='w-[300px] h-[35px] rounded-sm' placeholder='Repo Link ' type="text"

                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.repo}
                            name='repo'



                        />

                        <br />

                        {errors.repo && touched.repo ?

                            <> <span className='text-red-600' > {errors.repo} </span><br /> </>

                            :

                            <br />

                        }



                        <label htmlFor="" className='text-[#00C0FF]  ' > Tools </label>  <br />

                        <div className='flex' >  <input className='w-[300px] h-[35px] rounded-sm ' placeholder='Tools ' type="text"

                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.stack}
                            name='stack'


                        />

                             < CiSquarePlus onClick={()=>{addTools("heloo")}} className='text-yellow-400 text-[25px] mt-1 ml-2' />
                              

                            


                        </div>


                        <br />

                        {/* {errors.stack && touched.stack ?

                            <> <span className='text-red-600' > {errors.stack} </span> <br />  </>

                            :

                            <br />

                        } */}

                        {

                            tools?.map((obj)=>(

                                <span className=' border-solid border-2 text-white p-[3px] border-yellow-400 mr-3 rounded-md font-Poppins'  > {obj} </span>


                            ))
                        }


                      



                        <br />




                        <button type='submit' className='w-[100px] h-[30px] bg-yellow-400 font-medium rounded-md mt-[30px] ml-[90px]' >

                            {

                                spinner ?

                                    <div className='ml-[40px]' >

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

                                    "Host"



                            }



                        </button>


                    </form>





                </div>

            </div>

        </div>
    )
}

export default OpenHost

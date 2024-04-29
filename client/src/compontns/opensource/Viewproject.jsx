


import React from 'react'
import Model from './Model'
import axios from "../../constant/axios"
import { useState, useEffect } from 'react'
import { message } from 'antd'
import { ThreeDots } from 'react-loader-spinner'


function Viewproject() {

    const [res, setres] = useState([])
    const [more, setmore] = useState(false)
    const [loding, setloding] = useState(true)
    const [data, setdata] = useState()


    useEffect(() => {

        axios("/opensource/allprojects").then((respo) => {

            let result = respo.data

            if (result.flag) {

                setres(result.data)
                setloding(false)
            } else {

                message.error("server error")
                console.log(result.msg)
                setloding(false)
            }
        }).catch(err => {

            message.error("network error")
            setloding(false)
        })


    }, [])



    const moreView = (index) => {


        console.log(res[index])
        setdata(res[index])
        setmore(true)

    }







    return (
        <div>

            {

                more &&

                <Model data={data} func={setmore} />

            }



            <div className='w-full min-h-[600px] bg-[#16161d]'>

                <div className='w-full flex justify-center pt-5 ' >

                    <h1 className='text-yellow-400 font-Poppins text-[35px]' > Projects </h1>

                </div>

                <div className='w-full flex justify-center pt-[100px]  ' >

                    {
                        loding ?

                            <div className='mt-[100px]' >

                                <ThreeDots
                                    visible={true}
                                    height="50"
                                    width="50"
                                    color="#00C0FF"
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />

                            </div>

                            :

                            <div>

                                {

                                    res.map((obj, index) => (

                                        <div className=' w-[300px] sm:w-[500px] h-[120px] border-solid border-2 border-[#00C0FF]  mb-5 rounded-lg pt-5 pl-5'>

                                            <p onClick={() => { moreView(index) }} className='text-white text-center mb-8 font-Poppins text-[17px] cursor-pointer hover:text-blue-600' > {obj.name} </p>

                                            {
                                                obj.tools.map((obj) => (


                                                    <span className='border-solid border-2 border-yellow-400 text-white rounded-md text-[12px] p-[2px] mr-3 font-Poppins  ' > {obj} </span>



                                                ))
                                            }








                                        </div>



                                    ))
                                }










                            </div>


                    }







                </div>









            </div>











        </div>
    )
}

export default Viewproject

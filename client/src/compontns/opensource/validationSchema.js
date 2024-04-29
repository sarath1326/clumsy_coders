

import * as yup from "yup";




export const validationSchema = yup.object({


    name: yup.string().required(" *this filed is required"),
    dis: yup.string().required(" *this filed is required"),
    repo:yup.string().required("*this filed is required "),
    


    
})
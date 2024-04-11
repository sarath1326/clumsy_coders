
import * as yup from "yup";




export const validationSchema = yup.object({


    name: yup.string().min(3, "* enter more 3 chr").required("* this fild is required"),
    email: yup.string().email(" *enter valide email id ").required(" *this filed is required"),
    mobile:yup.number().required("*this filed is required "),
    linkedin:yup.string().required("*this filed is required"),
    git:yup.string().required("*required")


    
})


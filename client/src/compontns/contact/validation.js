




import * as yup from "yup";




export const validationSchema = yup.object({


    name: yup.string().min(3, "* enter more 3 chr").required("* this fild is required"),
    email: yup.string().email(" *enter valide email id ").required(" *this filed is required"),
    mobile:yup.string().required("*this filed is required ").min(10,"*enter valid mobile number").max(10,"*enter valid mobile number"),
    message:yup.string().required("*this filed is required")


    
})
import * as Yup from "yup"


const formValidation=Yup.object({
    fname:Yup.string().min(2).max(25).required("Please Write First Name"),
    lname:Yup.string().min(2).max(25).required("Please Write Last Name"),
    email:Yup.string().email('Invalid Email').required("Please give us your email"),
});


export default formValidation;
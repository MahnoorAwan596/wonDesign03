import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username:Yup.string()
        .min(2)
        .max(25)
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
        .required("Please enter your name"),
    email:Yup.string()
        .email()
        .required("Please enter your email"),
    password:Yup.string()
        .min(6)
        .required("Please enter your password"),
    phone:Yup.string()
        // .min(11)
        // .max(11)
        // .typeError("That doesn't look like a phone number")
        // .positive("A phone number can't start with a minus")
        .matches(/^923\d{9}$|^03\d{9}$/, "Enter phone number in proper format")
        // .integer("A phone number can't include a decimal point")
        .required("Please enter a phone number"),
    usertype:Yup.string()
        .required("Please select your user-type"),
});
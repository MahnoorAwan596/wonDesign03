import cover from "../img/LoginNewwCopy.jpg";
// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';
// formik for form handling.
// yup for form validation.
import {useFormik} from "formik"; 
import { signUpSchema } from "../schemas";
// import Input from 'react-phone-number-input/input'

const initialValues = {
    username: "",
    email: "",
    password: "",
    phone: "",
    usertype: "",    
};

const SignUp = () => {

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik ({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit : (values, action) => {
            // console.log(
            //     " - file: Signup.js - line 24 - Signup - values ",
            //     values
            // );
            PostData(values);
            action.resetForm();
        },
    });
    console.log(
        " - file: Signup.js - line 30 - Signup - errors ",
        errors
    );

    const navigate = useNavigate();

    // const [userRegistration, setUserRegistration] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     usertype: ""
    // });

    // let name, value;

    // const handleInput = (e) => {

    //     name = e.target.name;
    //     value = e.target.value;

    //     setUserRegistration({ ...userRegistration, [name]: value });
    //     // console.log(e);
    // }

    const moveTOlogin = () => {
        navigate('/login');
    }

    const PostData = async (e) => {
        // e.preventDefault();

        const { username, email, password, phone, usertype } = e;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, email, password, phone, usertype
            })
        });

        const data = res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration successfull");
            console.log("Registration successful");

            navigate('/login');
        }
    }

    return (
        <div className='signup-page'>
            <div className='sign-up'>
                <div className='sign-up-image'>
                    <img className='peak' src={cover} alt='' />
                </div>
                <div className='sign-up-text'>
                    <h1>
                        Sign up
                    </h1>
                    <hr className='small-line'></hr>

                    <form method="POST" id="register-form" onSubmit={handleSubmit}>
                        <div className='first-row'>
                            <input
                                type="text" 
                                id="username" 
                                autoComplete="off" 
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // value={userRegistration.username} 
                                // onChange={handleInput}
                                placeholder=" Username" 
                                className="s-username"
                            />
                            { errors.username && touched.username ? 
                                <p>{ errors.username }</p>
                                :
                                null
                            }       
                        </div>
                        <div className="first-row">
                            <input
                                type="email" 
                                id="email" 
                                autoComplete="off" 
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // value={userRegistration.email} 
                                // onChange={handleInput}
                                placeholder=' Email' 
                                className="s-email"
                            />
                            { errors.email && touched.email ? 
                                <p>{ errors.email }</p>
                                :
                                null
                            } 
                        </div>
                        <div className="first-row">
                            <input
                                type="password" 
                                id="password" 
                                autoComplete="off" 
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // value={userRegistration.password} 
                                // onChange={handleInput}
                                placeholder=' Password' 
                                className='s-password'
                            />
                            { errors.password && touched.password ? 
                                <p>{ errors.password }</p>
                                :
                                null
                            } 
                        </div>
                        <div className='first-row'>
                            <input
                                type="text" 
                                id="phone" 
                                country="Pakistan"
                                autoComplete="off" 
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // value={userRegistration.username} 
                                // onChange={handleInput}
                                placeholder=" Phone" 
                                className="s-username"
                            />
                            { errors.phone && touched.phone ? 
                                <p>{ errors.phone }</p>
                                :
                                null
                            }       
                        </div>
                        {/* <p className='password-note'>Use 8 or more characters with a mix of letters, numbers and symbols</p> */}
                        <select id="usertype" 
                            autoComplete="off" 
                            name="usertype"
                            className="user-type" 
                            value={values.usertype}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={handleInput}
                        >
                            <option 
                                value="client"
                            >
                                Client
                            </option>
                            <option 
                                value="designer"
                            >
                                Designer
                            </option>
                        </select>
                        { errors.usertype && touched.usertype ? 
                            <p className="form-error">{ errors.usertype }</p>
                            :
                            null
                        } 
                        <div className='button-and-text'>
                            <div>
                                <button 
                                    onClick={handleSubmit}
                                    // onClick={PostData} 
                                    type="submit" 
                                    className="s-button">Sign up</button>
                            </div>
                            <div className='text'>
                                <p>Already have an account? <span><button className="s-login" onClick={moveTOlogin}>Log In</button></span></p>
                            </div>
                        </div>
                    </form>
                    <div className='last'>
                        <p className='last-text'>By signing up, you agree to our Terms of Services and have read and acknowledge the Privacy Policy</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp;
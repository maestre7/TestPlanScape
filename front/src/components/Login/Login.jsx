
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import md5 from 'md5';

import googleLogo from "../../assest/img/logoGoogle.svg";


/* MSG Error */
const errorMessages = {
  required: "This field is required",
  min: (n) => `Must have a minimum of ${n} characters`,
  pass: "The password must have at least one uppercase, one lowercase and one number.",
};

/* Field Verification */
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const schema = yup.object({
    user: yup
        .string()
        .required(errorMessages.required)
        .min(4, errorMessages.min(4)),
    password: yup
        .string()
        .required(errorMessages.required)
        .min(8, errorMessages.min(8))
        .matches(
        passwordRegex,
        errorMessages.pass
        ),
});


function Login() {
    // set of functions for handling the form and its checks
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();
    /* const onSubmit = async (data) => {
        /* await axios.post("http://localhost:3003/login/",
                {"userlogin": data.user,
                "userpass": md5(data.password)})
            .then((res) => {
                if (res.status === 200) {
                    navigate('/post');
                } else {
                    navigate('/register');
                } 
        }) */
    /* }; */

    return (
        <div className="Login">
            <img src={googleLogo} alt="stars"/>
            <form className="form" onSubmit={handleSubmit((d) => console.log(d))}>
                <input
                    {...register("user")}
                    className="input"
                    type="user"
                    placeholder="User"
                    name="user"
                />
                {errors.user?.message && 
                    <div className="user--message-errors">
                        {errors.user?.message} 
                    </div>
                }

                <input
                    {...register("password")}
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                {errors.password?.message && 
                    <div className="password--message-errors"> 
                        {errors.password?.message} 
                    </div>
                }

                <button type="submit" className="primary-button">
                    Login
                </button>
            </form>

            <button /* type="submit" */ className="primary-button">
                Register
            </button>

        </div>
    );
}

export default Login;
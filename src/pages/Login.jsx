import React, { useState } from 'react';
import * as Styled from "./style";
import yellowbg from "../assets/yellowbg.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!loginData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
            validationErrors.email = 'Email is not valid';
        }
        if (!loginData.password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (loginData.password.length < 6) {
            validationErrors.password = 'Password should have at least 6 characters';
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.email === loginData.email && storedUser.password === loginData.password) {
                login(); // Update auth state
                navigate("/");
            } else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    form: 'Invalid email or password.'
                }));
            }
        }
    };

    return (
        <Styled.Background $background={yellowbg}>
            <Styled.LoginForm onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type='email' name='email' placeholder='Email' value={loginData.email} onChange={handleChange} />
                {errors.email && <div>{errors.email}</div>}
                <input type='password' name='password' placeholder='Password' value={loginData.password} onChange={handleChange} />
                {errors.password && <div>{errors.password}</div>}
                {errors.form && <div>{errors.form}</div>}
                <Styled.Btnpos>
                    <Styled.Btn type="submit">Login</Styled.Btn>
                </Styled.Btnpos>
                <p>Don't have an account? <span onClick={() => navigate("/register")}>Register Here</span></p>
            </Styled.LoginForm>
        </Styled.Background>
    );
};

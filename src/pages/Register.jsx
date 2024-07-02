import React, { useState } from "react";
import * as Styled from "./style";
import yellowbg from "../assets/yellowbg.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!formData.firstName.trim()) validationErrors.firstName = "Required field";
    if (!formData.lastName.trim()) validationErrors.lastName = "Required field";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should have at least 6 characters";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/login");
    }
  };

  return (
    <Styled.Background $background={yellowbg}>
      <Styled.LoginForm onSubmit={handleSubmit}>
        <h2>Register Now</h2>
        <Styled.LogInput
          placeholder="First Name"
          name="firstName"
          type="text"
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
        <Styled.LogInput
          placeholder="Last Name"
          name="lastName"
          type="text"
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
        <Styled.LogInput
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
        <Styled.LogInput
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
        <Styled.LogInput
          placeholder="Profile Picture"
          name="image"
          type="file"
          onChange={handleChange}
        />
        <Styled.Btnpos>
          <Styled.Btn type="submit">Register</Styled.Btn>
        </Styled.Btnpos>
      </Styled.LoginForm>
    </Styled.Background>
  );
};

export default Register;

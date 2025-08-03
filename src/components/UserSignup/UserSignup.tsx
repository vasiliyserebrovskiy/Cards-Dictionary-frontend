"use client";
import { SignUpCredentials } from "@/types/types";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import style from "@/styles/components/UserSignIn.module.css";

export default function UserSignup() {
  const userSignupSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    login: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@, $, !, %, *, ?, &)"
      )
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      login: "",
      password: "",
    },
    validationSchema: userSignupSchema,
    validateOnChange: false,
    onSubmit: (values: SignUpCredentials) => {
      console.log(values);
      //TODO: here we run function for sending request to our backend for signup!
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} action="" className={style.mainDiv}>
      <FormInput
        title="First name"
        name="firstName"
        type="text"
        placeholder="Anna"
        id="1"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        errorMsg={formik.errors.firstName}
      />
      <FormInput
        title="Last name"
        name="lastName"
        type="text"
        placeholder="Jonson"
        id="2"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        errorMsg={formik.errors.lastName}
      />
      <FormInput
        title="Login (Email)"
        name="login"
        type="text"
        placeholder="example@example.com"
        id="3"
        onChange={formik.handleChange}
        value={formik.values.login}
        errorMsg={formik.errors.login}
      />
      <FormInput
        title="Password"
        name="password"
        type="password"
        placeholder=""
        id="4"
        onChange={formik.handleChange}
        value={formik.values.password}
        errorMsg={formik.errors.password}
      />

      <FormButton title="Sign in" type="submit" />
    </form>
  );
}

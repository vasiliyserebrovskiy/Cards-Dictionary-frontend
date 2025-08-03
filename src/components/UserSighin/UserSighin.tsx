"use client";
import { SignInCredentials } from "@/types/types";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import style from "@/styles/components/UserSignIn.module.css";

export default function UserSighin() {
  const userSigninSchema = Yup.object({
    email: Yup.string()
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
      email: "",
      password: "",
    },
    validationSchema: userSigninSchema,
    validateOnChange: false,
    onSubmit: (values: SignInCredentials) => {
      console.log(values);
      //TODO: here we run function for sending request to our backend for login!
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} action="" className={style.mainDiv}>
      <FormInput
        title="Email"
        name="email"
        type="text"
        placeholder="example@example.com"
        id="1"
        onChange={formik.handleChange}
        value={formik.values.email}
        errorMsg={formik.errors.email}
      />
      <FormInput
        title="Password"
        name="password"
        type="password"
        placeholder=""
        id="2"
        onChange={formik.handleChange}
        value={formik.values.password}
        errorMsg={formik.errors.password}
      />

      <FormButton title="Sign in" type="submit" />
    </form>
  );
}

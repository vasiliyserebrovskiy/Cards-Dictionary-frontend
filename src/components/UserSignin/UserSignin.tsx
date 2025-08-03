"use client";
import { SignInCredentials } from "@/types/types";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import style from "@/styles/components/UserSignIn.module.css";
import Link from "next/link";

export default function UserSignin() {
  const userSigninSchema = Yup.object({
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
      login: "",
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
        title="Login (Email)"
        name="login"
        type="text"
        placeholder="example@example.com"
        id="1"
        onChange={formik.handleChange}
        value={formik.values.login}
        errorMsg={formik.errors.login}
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
      <Link href="/signup" className={style.signupLink}>
        Not registered? Please, sign up.
      </Link>
    </form>
  );
}

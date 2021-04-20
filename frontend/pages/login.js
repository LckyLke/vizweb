import React, { useState } from "react";
import { firebaseClient } from "../firebaseClient";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useToast } from "@chakra-ui/react";

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = async (values) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);
      router.push("http://localhost:3000/dashboard");
    } catch (err) {
      const message = err.message;
      toast({
        title: "An error occured",
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
      <div
        className={`mx-auto w-full max-w-2xl rounded-xl bg-white p-8 pt-4 shadow-2xl border-2 ${
          errors?.email || errors?.password ? "border-RED" : "border-LIGHTBLUE"
        }`}
      >
        <h1
          className={`text-3xl inline-block border-b-2 w-full p-1 mb-2 font-bold ${
            errors?.email || errors?.pasword ? "border-RED" : "border-LIGHTBLUE"
          }`}
        >
          Login to continue!
        </h1>
        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <label for="email" className="font-bold text-xl pl-1">
              Email
            </label>
            <input
              name="email"
              type="text"
              {...register("email", {
                required: "Required!",
                minLength: {
                  value: 8,
                  message: "This needs to be a valid email address",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "This needs to be a valid email address",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors?.email ? "ring-2 ring-RED" : null
              }`}
              placeholder="maxmustermann@email.com"
            />
            <span className="text-RED text-md py-2 font-bold">
              {errors?.email?.message}
            </span>
          </div>
          <div>
            <label for="password" className="font-bold text-xl pl-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              {...register("password", {
                required: "Required!",
                minLength: {
                  value: 8,
                  message:
                    "The password has to consist of a least 8 characters",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors?.password ? "ring-2 ring-RED" : null
              }`}
              placeholder="Enter a secure password..."
            />
            <span className="text-RED text-md py-2 font-bold">
              {errors?.password?.message}
            </span>
          </div>
          <div>
            <motion.button
              onClick={handleSubmit(onSubmitForm)}
              type="button"
              className="inline-flex justify-center py-3 px-6 shadow-md text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileHover={{
                backgroundColor: "rgba(59, 130, 246, .5)",
                color: "#fff",
              }}
            >
              Login
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}

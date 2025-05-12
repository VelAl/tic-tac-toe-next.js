"use client";

import type React from "react";

import { useState } from "react";
import { z } from "zod";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthInputs } from "../ui/fields";
import { SubmitButton } from "../ui/button";
import { ErrorMessage } from "../ui/error";
import BottomLink from "../ui/link";

// Form validation schema
const signUpSchema = z.object({
  login: z.string().min(2, "Login should be atleast 2 characters"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Validate form data
      const result = signUpSchema.safeParse({
        login,
        password,
      });

      if (!result.success) {
        const formattedErrors: Record<string, string> = {};
        result.error.issues.forEach((issue) => {
          formattedErrors[issue.path[0] as string] = issue.message;
        });
        setErrors(formattedErrors);
        return;
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      setErrors({ form: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormLayout
      title="Sign In"
      description="Please, sign in to get started"
      onSubmit={handleSubmit}
      fields={
        <AuthInputs
          login={login}
          onChangeLogin={setLogin}
          onChangePassword={setPassword}
          password={password}
        />
      }
      actions={<SubmitButton isLoading={isLoading}>Sign Up</SubmitButton>}
      error={
        !!Object.keys(errors).length && (
          <ErrorMessage
            error={Object.entries(errors)
              .map(([k, v]) => `${k}:${v}`)
              .join(".")}
          />
        )
      }
      link={
        <BottomLink
          linkText="Sign Up"
          text="Dont have an account?"
          url="/sign-up"
        />
      }
    />
  );
};

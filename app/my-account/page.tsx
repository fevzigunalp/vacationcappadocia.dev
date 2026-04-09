"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { LogIn } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";

interface LoginData {
  email: string;
  password: string;
}

export default function MyAccountPage() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log("Login attempt:", data);
    setError("Login functionality coming soon.");
  };

  return (
    <>
      <PageBanner
        title="My Account"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "My Account" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-[3px] shadow-md p-8">
            <h2 className="text-2xl text-accent mb-6 text-center">
              Login
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                    },
                  })}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-[3px] font-semibold hover:bg-primary-dark transition-colors"
              >
                <LogIn size={18} />
                Sign In
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

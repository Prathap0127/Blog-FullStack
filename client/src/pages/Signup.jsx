import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left -side */}
        <div className="flex-1">
          <Link to="/" className=" font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 rounded-lg text-white">
              Developer's Blog
            </span>
          </Link>
          <p className="text-sm mt-5">
            Here you can sign up to the Developer BLogs
          </p>
        </div>
        {/* Right - side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your User Name" />
              <TextInput type="text" id="username" placeholder="User Name" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                id="email"
                placeholder="username@domain.com"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" id="password" placeholder="Password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-4">
            <span>Have an Account? </span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

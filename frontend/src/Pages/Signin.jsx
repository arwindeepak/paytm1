import React, { useState } from 'react'
import { SubHeading } from '../Components/SubHeading';
import { InputBox } from '../Components/InputBox';
import { Button } from '../Components/Button';
import { BottomWarning } from '../Components/BottomWarning';
import Heading from '../Components/Heading';
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e) => {
            setemail(e.target.value);
          }} placeholder="harkirat@gmail.com" label={"Email"} />
          <InputBox onChange={(e) => {
            setpassword(e.target.value);
          }} placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button onClick={() => {
              axios.post("http://localhost:3000/api/v1/user/signin", {
                username: email,
                password: password
              });
              navigate("/dashboard")
            }} label={"Sign in"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
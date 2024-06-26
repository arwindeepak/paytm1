import { useState } from "react";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import Heading from "../Components/Heading"
import { InputBox } from "../Components/InputBox";
import { SubHeading } from "../Components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
                  <InputBox onChange={(e) => {
                      setfirstName(e.target.value)
          }} placeholder="John" label={"First Name"} />
                  <InputBox onChange={(e) => {
                      setlastName(e.target.value)
          }} placeholder="Doe" label={"Last Name"} />
                  <InputBox onChange={(e) => {
                      setEmail(e.target.value)
          }} placeholder="harkirat@gmail.com" label={"Email"} />
                  <InputBox onChange={(e) => {
                      setPassword(e.target.value)
          }} placeholder="123456" label={"Password"} />
          <div className="pt-4">
                      <Button onClick={() => {
                          async function getData() {
                            const response = await axios.post(
                              `${
                                import.meta.env.VITE_URL
                              }/api/v1/user/signup`,
                              {
                                username: email,
                                firstName: firstName,
                                password: Password,
                                lastName: lastName,
                              }
                            ); 
                                localStorage.setItem(
                                  "token",
                                  response.data.token
                                );
                                navigate("/signin");
                          }
                          getData();
               
                        
            }} label={"Sign up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
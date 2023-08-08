"use client";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import Lable from "./Label";

type Props = {
  type?: String;
  onSubmit?: void;
};

const Form = (props: Props) => {
  const [showPass, setShowPass] = useState<Boolean>(false);
  return (
    <>
      {props.type === "login" ? (
        <form onSubmit={props.onSubmit}>
          <Input placeholder="Enter email" type="text" />
          <Input
            placeholder="Enter password"
            type={showPass ? "text" : "password"}
          />
          <Input
            type="checkbox"
            onChange={() => {
              setShowPass(!showPass);
            }}
            id="password"
          />
          <Lable for="password">Show Password</Lable>
          <Button>Login</Button>
        </form>
      ) : (
        <form onSubmit={props.onSubmit}>
          <Input placeholder="Enter email" type="text" />
          <Input
            placeholder="Enter password"
            type={showPass ? "text" : "password"}
          />
          <Input
            placeholder="Enter confirm password"
            type={showPass ? "text" : "password"}
          />
          <Input
            type="checkbox"
            onChange={() => {
              setShowPass(!showPass);
            }}
            id="password"
          />
          <Lable for="password">Show Password</Lable>
          <Button>Register</Button>
        </form>
      )}
    </>
  );
};

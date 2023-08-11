"use client";
import React, { FormEventHandler, MouseEventHandler } from "react";
import {Input} from "./Input";
import {Button} from "./Button";

type Props = {
  type?: String;
  onSubmit?: void;
};

const Form = (props: Props) => {
  const nameChangeHandler = (e: any) =>{
    console.log(e.target.value);
  }
  const emailChangeHandler = (e: any) => {
    console.log(e.target.value);
  }
  const messageChangeHandler = (e: any) => {
    console.log(e.target.value);
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
  }
  return (
    <>
      <form>
        <Input type="text" placeholder="Name" onChange={nameChangeHandler} className={""}  />
        <Input type="text" placeholder="Email" onChange={emailChangeHandler} className={""} />
        <Input type="text" placeholder="Message" onChange={messageChangeHandler} className={""} />
        <Button onClick={submitHandler} className={""} >Submit</Button>
      </form>
    </>
  );
};

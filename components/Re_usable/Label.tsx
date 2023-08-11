import React from "react";

type Props = {
  children: string;
  className?: string;
  for?: string;
};

const Label = (props: Props) => {
  return (
    <label className={props.className} htmlFor={props.for}>
      {props.children}
    </label>
  );
};

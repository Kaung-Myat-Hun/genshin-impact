import React from "react";

type Props = {
  children: String;
  className?: String;
  for?: String;
};

const Label = (props: Props) => {
  return (
    <label className={props.className} for={props.for}>
      {props.children}
    </label>
  );
};

type Props = {
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: (e:any)=> void;
};

export const Input = (props: Props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange}
      />
    </>
  );
};

type Props = {
  placeholder?: String;
  type?: String;
  minlength?: String;
  className?: String;
  onChange?: void;
  id?: String;
};

const Input = (props: Props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        minlength={props.minlength}
        className={props.className}
        onChange={props.onChange}
        id={props.id}
      />
    </>
  );
};

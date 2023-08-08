type Props = {
  children: String;
  className?: String;
  type?: String;
  onClick?: void;
};

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

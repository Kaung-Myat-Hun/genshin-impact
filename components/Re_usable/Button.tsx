type Props = {
  children: string |undefined;
  className?: string | "";
  type?: string | undefined;
  onClick?: (e:any) => void | undefined;
};

export const Button = (props: Props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

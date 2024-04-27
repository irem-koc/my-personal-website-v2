type Props = {
  text: string;
  style: string[];
};

const Button = (props: Props) => {
  const { text, style } = props;
  return (
    <>
      <button className={style.join(" ")}>{text}</button>
    </>
  );
};

export default Button;

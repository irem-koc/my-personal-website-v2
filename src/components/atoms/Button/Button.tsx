import { Link } from "react-router-dom";

type Props = {
  text: string;
  style: string[];
  to: string; // Update the type of the 'to' prop to allow for undefined
};

const Button = (props: Props) => {
  const { text, style, to } = props;
  return (
    <Link to={to}>
      <button className={style.join(" ")}>{text}</button>
    </Link>
  );
};

export default Button;

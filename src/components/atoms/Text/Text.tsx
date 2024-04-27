type Props = {
  text: string;
  style: string[];
};
const Text = (props: Props) => {
  const { text, style } = props;
  return <span className={style.join(" ")}>{text}</span>;
};

export default Text;

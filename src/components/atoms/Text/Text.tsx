type Props = {
  text: string;
  secondaryText?: string;
  style: string[];
};
const Text = (props: Props) => {
  const { text, style, secondaryText } = props;
  return (
    <>
      <span className={style.join(" ")}>{text}</span>
      {secondaryText && (
        <span className={style.join(" ")}>{secondaryText}</span>
      )}
    </>
  );
};

export default Text;

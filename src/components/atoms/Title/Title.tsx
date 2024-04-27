type Props = {
  text: string;
  style?: string[];
};

const Title = (props: Props) => {
  const { text, style } = props;
  return (
    <>
      <h1 className={style?.join("")}>{text}</h1>
    </>
  );
};

export default Title;

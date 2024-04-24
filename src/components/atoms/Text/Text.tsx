type Props = {
  text: string;
};
const Text = (props: Props) => {
  const { text } = props;
  return <div>{text}</div>;
};

export default Text;

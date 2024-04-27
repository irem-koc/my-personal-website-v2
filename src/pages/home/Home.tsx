import Text from "@atoms/Text/Text";
import Title from "@atoms/Title/Title";
import React, { useContext } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Context } from "../../context/Context";
type Props = {};

const Home = (props: Props) => {
  const { name } = useContext(Context);
  const TEXTS = ["Coder", "Developer", "Engineer"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <div>
        <Text text="Hi, I'm " style={[""]} />
        <Text text="Irem!" style={[""]} />
        <Text text="Creative" style={[""]} />
        <TextTransition springConfig={presets.wobbly}>
          <Title text={TEXTS[index % TEXTS.length]} style={[""]} />
        </TextTransition>
        <Text text="Based in İstanbul" style={[""]} />
      </div>
    </div>
  );
};

export default Home;

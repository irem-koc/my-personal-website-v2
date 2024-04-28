import Button from "@atoms/Button/Button";
import Text from "@atoms/Text/Text";
import Title from "@atoms/Title/Title";
import { Context } from "@context/Context";
import React, { useContext } from "react";
import TextTransition, { presets } from "react-text-transition";
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
    <div className="p-32 bg-home-bg  w-full">
      <div className="w-1/2 flex flex-col gap-6">
        <div>
          <Text text="Hi, I'm " style={["home-title"]} />
          <Text text="Irem!" style={["home-title text-purple"]} />
          <br />
          <span className="flex">
            <Text text="Creative" style={["home-title pr-5"]} />
            <TextTransition springConfig={presets.wobbly}>
              <Title
                text={TEXTS[index % TEXTS.length]}
                style={["home-title"]}
              />
            </TextTransition>
          </span>
          <Text text="Based in İstanbul" style={["home-title"]} />
        </div>
        <div>
          <Text
            style={["leading-5"]}
            text="I'm a Istanbul based web designer & front‑end"
            secondaryText=" developer with 2+ years of experience"
          />
        </div>
        <div>
          <Button
            text="Go to projects"
            style={[
              "button bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue hover:border hover:border-dark-blue",
            ]}
            to="/portfolio"
          />
          <Button
            text="Let's talk"
            style={[
              "button ml-4 bg-transparent border border-dark-blue hover:bg-dark-blue hover:text-white",
            ]}
            to="/contact"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;

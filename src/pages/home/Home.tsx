import irem from "@assets/image.jpeg";
import Button from "@atoms/Button/Button";
import Image from "@atoms/Image/Image";
import Text from "@atoms/Text/Text";
import Title from "@atoms/Title/Title";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

// TODO: fix mobile screen responsiveness
const Home = () => {
  const TEXTS = ["Coder", "Developer", "Engineer"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:p-32 md:p-16 p-10 bg-home-bg w-full h-screen flex flex-col lg:flex-row justify-between items-center">
      <div className="xl:w-1/2 w-full flex flex-col gap-6">
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
        <div className="flex flex-col md:flex-row gap-4">
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
              "button bg-transparent border border-dark-blue hover:bg-dark-blue hover:text-white",
            ]}
            to="/contact"
          />
        </div>
        <div className="pl-4 border-l-4 border-orange flex flex-col">
          <Text text={"+90 553 975 3691"} style={["home-contact"]} />
          <Text text={"kociremx@gmail.com"} style={["home-contact"]} />
          <Text text={"Beylikduzu,Istanbul"} style={["home-contact"]} />
        </div>
      </div>
      <div className="hidden xl:block lg:w-1/3 mt-8 lg:mt-0 w-full lg:w-1/3">
        <Image
          source={irem}
          alt="irem koc"
          title="me"
          style={["rounded-full w-full"]}
        />
      </div>
    </div>
  );
};

export default Home;

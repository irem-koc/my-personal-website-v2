import Text from "@atoms/Text/Text";
import Title from "@atoms/Title/Title";

type Props = {};

const About = (props: Props) => {
  const {} = props;
  return (
    <div className="lg:p-24 p-24 bg-about-bg w-full h-screen flex justify-between items-start">
      <div>
        <div>
          <Text text="- NICE TO MEET YOU!" style={["about-top-text"]} />
          <Title text={"Irem Koc"} style={["about-title"]} />
          <Text
            text="Frontend & Software Developer"
            style={["about-sub-text"]}
          />
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default About;

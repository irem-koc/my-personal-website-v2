import Button from "@atoms/Button/Button";
import Text from "@atoms/Text/Text";
import Title from "@atoms/Title/Title";

type Props = {};

const About = (props: Props) => {
  const {} = props;
  return (
    <div className="lg:p-24 p-24 bg-about-bg w-full h-screen flex justify-between items-start">
      <div>
        <div className="col-start">
          <Text text="- NICE TO MEET YOU!" style={["about-top-text"]} />
          <Title text={"Irem Koc"} style={["about-title"]} />
          <Text
            text="Frontend & Software Developer"
            style={["about-sub-text"]}
          />
          <Button
            text={"View all projects"}
            style={[
              "button md: bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue hover:border hover:border-dark-blue",
            ]}
            to={"/portfolio"}
          />
        </div>
        <div>
          <Text text={"Hello there! My name is "} style={[]} />
          <Text text={"Irem Koc"} style={["text-orange"]} />
          <Text
            text={
              ". As a software engineer with a focus on frontend development, I bring a strong dedication and a wealth of experience to my work. "
            }
            style={[]}
          />
          <Text
            text={
              "With a solid foundation in technologies like React, React Native (both CLI and Expo), TypeScript, and Redux Toolkit, I am well-equipped to deliver robust and user-friendly applications. "
            }
            style={[]}
          />
          <Text
            text={
              "In addition to my frontend expertise, I also have experience with backend development using Spring Boot, which allows me to understand and contribute to different layers of a software project. "
            }
            style={[]}
          />
          <Text
            text={
              "I am passionate about every step of the software development process, from initial discussion and collaboration to the final stages of deployment. "
            }
            style={[]}
          />
          <Text
            text={
              "With over 2 years of experience in the field, I have honed the skills necessary to bring your project to success. I look forward to the opportunity to leverage my skills and enthusiasm to contribute to your team."
            }
            style={[]}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;

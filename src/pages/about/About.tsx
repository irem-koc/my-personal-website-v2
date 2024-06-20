import Button from "@atoms/Button/Button";
import Text from "@atoms/Text/Text";
import Title from "@atoms/Title/Title";
import InfoCard from "@molecules/About/InfoCard";

type Props = {};

const About = (props: Props) => {
  const {} = props;
  return (
    <div className="lg:p-24 p-24 bg-about-bg w-full h-screen flex flex-col justify-around">
      <div className="row-between">
        <div className="col-start w-1/3">
          <Text text="- NICE TO MEET YOU!" style={["about-top-text"]} />
          <Title text={"Irem Koc"} style={["about-title"]} />
          <Text
            text="Frontend & Software Developer"
            style={["about-sub-text"]}
          />
          <Button
            text={"View all projects"}
            style={[
              "button mt-2 md:bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue hover:border hover:border-dark-blue",
            ]}
            to={"/portfolio"}
          />
        </div>
        <div className="w-4/6">
          <div>
            <Text
              text={"Hello there! My name is "}
              style={["about-info-text"]}
            />
            <Text text={"Irem Koc"} style={["text-orange about-info-text"]} />
            <Text
              text={
                ". As a software engineer with a focus on frontend development, I bring a strong dedication and a wealth of experience to my work. "
              }
              style={["about-info-text"]}
            />
            <br />
            <br />
            {/* <Text
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
            /> */}
            <Text
              text={
                "With over 2 years of experience in the field, I have honed the skills necessary to bring your project to success. I look forward to the opportunity to leverage my skills and enthusiasm to contribute to your team."
              }
              style={["about-info-text"]}
            />
          </div>
          <div className="row-between">
            <div className="col-center">
              <Text text={"AGE"} style={["underline"]} />
              <Text text={"22"} style={["font-bold text-dark-blue"]} />
            </div>
            <div className="col-center">
              <Text text={"BORN IN"} style={["underline"]} />
              <Text
                text={"Istanbul, Turkey"}
                style={["font-bold text-dark-blue"]}
              />
            </div>
            <div className="col-center">
              <Text text={"MAIL"} style={["underline"]} />
              <Text
                text={"kociremx@gmail.com"}
                style={["font-bold text-dark-blue"]}
              />
            </div>
            <div className="col-start">
              <Text text={"PHONE"} style={["underline"]} />
              <Text
                text={"+90 5539753691"}
                style={["font-bold text-dark-blue"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row-between w-full gap-5">
        <InfoCard
          style={["info-card bg-[#D3F4EC]"]}
          top={"3.18"}
          bottom={"GPA"}
        />
        <InfoCard
          style={["info-card bg-[#FCE8D4]"]}
          top={"30+"}
          bottom={"PROJECTS COMPLETED"}
        />
        <InfoCard
          style={["info-card bg-[#E3F9E0]"]}
          top={"2+"}
          bottom={"YEARS OF EXPERIENCE"}
        />
      </div>
    </div>
  );
};

export default About;

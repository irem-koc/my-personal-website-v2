import Button from "@atoms/Button/Button";
import Text from "@atoms/Text/Text";
import Title from "@atoms/Title/Title";
import InfoCard from "@components/molecules/InfoCard/InfoCard";

const About = () => {
  return (
    <div className="lg:p-28 md:p-16 p-8 bg-about-bg w-full min-h-screen flex flex-col justify-around">
      <div className="flex flex-col xl:flex-row justify-between items-start">
        <div className="xl:flex hidden flex-col w-1/3">
          <Text text="- NICE TO MEET YOU!" style={["about-top-text"]} />
          <Title text={"Irem Koc"} style={["about-title"]} />
          <Text
            text="Frontend & Software Developer"
            style={["about-sub-text"]}
          />
          <Button
            text={"View all projects"}
            style={[
              "button mt-8 md:bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue hover:border hover:border-dark-blue",
            ]}
            to={"/portfolio"}
          />
        </div>
        <div className="w-full xl:w-5/6 mt-8 xl:mt-0">
          <div>
            <Text
              text={"Hello there! My name is "}
              style={["about-info-text"]}
            />
            <Text text={"Irem Koc"} style={["text-orange about-info-text"]} />
            <Text
              text={
                ". As a software engineer with a focus on frontend development, I bring a strong dedication and a wealth of experience to my work."
              }
              style={["about-info-text"]}
            />
            <Text
              text={
                "With over 2 years of experience in the field, I have honed the skills necessary to bring your project to success. I look forward to the opportunity to leverage my skills and enthusiasm to contribute to your team."
              }
              style={["about-info-text"]}
            />
          </div>
          <div className="flex flex-wrap justify-between gap-5 my-5 xl:flex-row">
            <div className="col-center w-full sm:w-auto">
              <Text text={"AGE"} style={["underline"]} />
              <Text text={"22"} style={["font-bold text-dark-blue"]} />
            </div>
            <div className="col-center w-full sm:w-auto">
              <Text text={"BORN IN"} style={["underline"]} />
              <Text
                text={"Istanbul, Turkey"}
                style={["font-bold text-dark-blue"]}
              />
            </div>
            <div className="col-center w-full sm:w-auto">
              <Text text={"MAIL"} style={["underline"]} />
              <Text
                text={"kociremx@gmail.com"}
                style={["font-bold text-dark-blue"]}
              />
            </div>
            <div className="col-center w-full sm:w-auto">
              <Text text={"PHONE"} style={["underline"]} />
              <Text
                text={"+90 553 975 3691"}
                style={["font-bold text-dark-blue"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5 w-full mt-8">
        <InfoCard
          style={["info-card bg-[#D3F4EC] w-full sm:w-auto"]}
          top={"3.19"}
          bottom={"GPA"}
        />
        <InfoCard
          style={["info-card bg-[#FCE8D4] w-full sm:w-auto"]}
          top={"30+"}
          bottom={"PROJECTS COMPLETED"}
        />
        <InfoCard
          style={["info-card bg-[#E3F9E0] w-full sm:w-auto"]}
          top={"2+"}
          bottom={"YEARS OF EXPERIENCE"}
        />
      </div>
    </div>
  );
};

export default About;

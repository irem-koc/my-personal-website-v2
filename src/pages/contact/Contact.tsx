import Text from "@components/atoms/Text/Text";
import Title from "@components/atoms/Title/Title";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="lg:p-28 p-24 bg-contact-bg w-full h-screen flex justify-between items-center">
      <div className="row-between">
        <div className="header">
          <Text text="- LET'S CONNECT" style={["about-top-text"]} />
          <Title text={"Get in touch"} style={["about-title"]} />
        </div>
      </div>
    </div>
  );
};

export default Contact;

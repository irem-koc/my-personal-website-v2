import Image from "@atoms/Image/Image";
import Text from "@atoms/Text/Text";
type Props = {
  text: string;
  secondaryText?: string;
};

const Footer = (props: Props) => {
  const { text, secondaryText } = props;
  return (
    <div className="col-center">
      <div className="row-center gap-3 mb-7">
        <Image alt="github" icon="FaGithub" style={["footer-icon"]} />
        <Image alt="linkedin" icon="FaLinkedinIn " style={["footer-icon"]} />
      </div>
      <Text text={text} secondaryText={secondaryText} style={["footer-text"]} />
    </div>
  );
};

export default Footer;

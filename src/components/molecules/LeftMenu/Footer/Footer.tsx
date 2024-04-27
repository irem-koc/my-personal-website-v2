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
        <a href="https://github.com/irem-koc">
          <Image alt="github" icon="FaGithub" style={["footer-icon"]} />
        </a>
        <a href="https://www.linkedin.com/in/koc-irem/">
          <Image alt="linkedin" icon="FaLinkedinIn " style={["footer-icon"]} />
        </a>
      </div>
      <Text text={text} secondaryText={secondaryText} style={["footer-text"]} />
    </div>
  );
};

export default Footer;

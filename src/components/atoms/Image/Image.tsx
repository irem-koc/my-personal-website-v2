import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {
  source?: string;
  alt?: string;
  title?: string;
  style?: string[];
  icon?: string;
};

const Image = (props: Props) => {
  const { source, alt, title, style, icon } = props;
  if (icon === "FaGithub" || icon === "FaLinkedinIn ") {
    const IconComponent = icon === "FaGithub" ? FaGithub : FaLinkedinIn;
    return <IconComponent className={style?.join(" ")} />;
  }

  return (
    <img src={source} alt={alt} title={title} className={style?.join(" ")} />
  );
};

export default Image;

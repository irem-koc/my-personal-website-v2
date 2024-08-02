type Props = {
  text: string;
  href: string;
  style: string[];
};

const Link = (props: Props) => {
  const { text, href, style } = props;

  return (
    <>
      <a href={href}>
        <span className={style.join(" ")}>{text}</span>
      </a>
    </>
  );
};

export default Link;

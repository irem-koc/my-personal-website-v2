type Props = {
  source: string;
  alt: string;
  title: string;
  style: string[];
};

const Image = (props: Props) => {
  const { source, alt, title, style } = props;
  return (
    <>
      <img src={source} alt={alt} title={title} className={style.join(" ")} />
    </>
  );
};

export default Image;

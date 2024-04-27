type Props = {
  source: string;
  alt: string;
  title: string;
};

const Image = (props: Props) => {
  const { source, alt, title } = props;
  return (
    <>
      <img src={source} alt={alt} title={title} />
    </>
  );
};

export default Image;

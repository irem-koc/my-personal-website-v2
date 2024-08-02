import Text from "@atoms/Text/Text";

type Props = {
  style: string[];
  top: string;
  bottom: string;
};

const InfoCard = (props: Props) => {
  const { style, top, bottom } = props;
  return (
    <div className={style.join(" ")}>
      <Text text={top} style={["font-bold text-[2rem] text-black mb-4"]} />
      <br />
      <Text text={bottom} style={[""]} />
    </div>
  );
};

export default InfoCard;

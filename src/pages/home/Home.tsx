import { useContext } from "react";
import { Context } from "../../context/Context";

type Props = {};

const Home = (props: Props) => {
  const { name } = useContext(Context);
  return (
    <div>
      Home, <h1 className="text-3xl font-bold underline">{name}</h1>
    </div>
  );
};

export default Home;

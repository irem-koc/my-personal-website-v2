import { FaArrowRight } from "react-icons/fa";

type Props = {};

const PortfolioCard = ({ project }: Props) => {
  return (
    <div>
      <div></div>
      <div>
        <p>
          Go to Github repository
          <span>
            <FaArrowRight fill="black" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;

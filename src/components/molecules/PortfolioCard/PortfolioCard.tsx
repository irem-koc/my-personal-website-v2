import Link from "@components/atoms/Link/Link";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

const PortfolioCard = ({ project }: Props) => {
  return (
    <div className="portfolio-card">
      <div>
        <img
          className="w-full object-cover h-48"
          src={project.thumbnail}
          alt={project.title}
        />
        <p className="font-semibold italic text-black text-base">
          {project.title}
        </p>
      </div>
      <div className="flex gap-2 items-center ">
        <Link
          text={"Go to Github repository"}
          href={project.githubUrl}
          style={["italic home-contact font-[13px] hover:translate-x-0"]}
        />
        <span>
          <FaArrowRight fill="black" />
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;

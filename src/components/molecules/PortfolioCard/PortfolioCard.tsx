import Link from "@components/atoms/Link/Link";
import { FaArrowRight } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

type Props = {
  project: {
    title: string;
    thumbnail: string;
    githubUrl: string;
    usedLanguages: string[];
  };
};

const PortfolioCard = ({ project }: Props) => {
  return (
    <div className="portfolio-card p-4 border mb-7 rounded-lg shadow-md bg-white">
      <div>
        <img
          className="w-full object-cover h-40 rounded"
          src={project.thumbnail}
          alt={project.title}
        />
        <p className="flex gap-1 items-center font-semibold italic text-black text-base mt-2">
          <span className="mt-1 hover:transform-y-2">
            <IoCodeSlashOutline />
          </span>
          {project.title}
        </p>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <Link
          text={"Go to Github repository"}
          href={project.githubUrl}
          style={["italic home-contact font-[13px] hover:translate-x-0"]}
        />
        <span>
          <FaArrowRight fill="black" />
        </span>
      </div>
      <div className="flex flex-wrap mt-1">
        <p className="font-semibold text-sm">Used Languages:</p>

        {project.usedLanguages.map((language, index) => (
          <span
            key={index}
            className="bg-orange hover:bg-white hover:text-orange text-white text-xs px-2 py-1 mr-1 mb-1 rounded-full"
          >
            {language}
          </span>
        ))}
      </div>
      <div className="mt-4"></div>
    </div>
  );
};

export default PortfolioCard;

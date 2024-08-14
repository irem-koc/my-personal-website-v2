import Link from "@components/atoms/Link/Link";
import { FaArrowRight, FaFigma } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

type Props = {
  project: {
    figmaUrl?: string;
    title: string;
    thumbnail: string;
    githubUrl: string;
    usedLanguages: string[];
  };
};

const PortfolioCard = ({ project }: Props) => {
  return (
    <div className="portfolio-card p-4 border mb-7 rounded-lg shadow-md bg-white w-full sm:w-72">
      <div>
        <img
          className="w-full object-cover h-40 rounded"
          src={project.thumbnail}
          alt={project.title}
        />
        <p className="flex gap-1 items-center font-semibold italic text-black text-base mt-2">
          <span className="mt-1">
            <IoCodeSlashOutline />
          </span>
          {project.title}
        </p>
      </div>
      <div className="flex items-center mt-2 justify-between">
        <div className="flex items-center">
          <Link
            text={"Go to Github repository"}
            href={project.githubUrl}
            style={["italic home-contact font-[13px] hover:translate-x-0"]}
          />
          <span className="ml-1">
            <FaArrowRight fill="black" />
          </span>
        </div>

        {project.figmaUrl && (
          <div className="flex items-center">
            <Link
              text={"Take a look at Figma design"}
              href={project.figmaUrl}
              style={["italic home-contact font-[13px] hover:translate-x-0"]}
            />
            <span className="ml-1">
              <FaFigma fill="black" />
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap mt-3">
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
    </div>
  );
};

export default PortfolioCard;

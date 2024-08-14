import { FaArrowRight } from "react-icons/fa";
import { Experience } from "src/types/type";

type Props = {
  experience: Experience;
  onClick: (experience: Experience) => void;
};

const ExperienceCard = ({ experience, onClick }: Props) => {
  const { company, title, startDate, endDate, description } = experience;
  return (
    <div
      className="experience-card relative hover:shadow-2xl shadow-purple hover:transition-all transform transition duration-500 hover:scale-105 cursor-pointer p-6 rounded-lg bg-white w-full sm:w-72"
      onClick={() => onClick(experience)}
    >
      <h1 className="text-xl font-semibold text-gray-800">{company}</h1>
      <h2 className="text-black font-bold text-lg mb-1">{title}</h2>
      <span className="opacity-90 text-xs italic">
        {startDate} - {endDate}
      </span>
      <p className="mb-3 text-sm text-gray-700">
        {description && description.substr(0, 70) + "..."}
      </p>
      <div className="effect-underline"></div>
      <p className="absolute border border-dashed border-gray-600 rounded p-1 right-3 bottom-3 flex items-center gap-1 text-xs text-gray-600 read-more">
        Read More
        <span>
          <FaArrowRight fill="black" />
        </span>
      </p>
    </div>
  );
};

export default ExperienceCard;

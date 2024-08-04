import { FaArrowRight } from "react-icons/fa";

const ExperienceCard = ({ experience, onClick }) => {
  const { company, title, startDate, endDate, description } = experience;
  return (
    <div
      className="experience-card relative hover:shadow-2xl shadow-purple hover:transition-all transform transition duration-1000 hover:scale-110 cursor-pointer"
      onClick={() => onClick(experience)}
    >
      <h1 className="text-xl">{company}</h1>
      <h2 className="text-black font-bold text-xl mb-1">{title}</h2>
      <span className="opacity-90 text-xs italic">
        {startDate} - {endDate}
      </span>
      <p className="mb-3">{description && description.substr(0, 70) + "..."}</p>
      <div className="effect-underline"></div>
      <p className="absolute border border-dashed border-gray-600 rounded p-1 right-3 bottom-3 flex items-center gap-1 read-more">
        Read More
        <span>
          <FaArrowRight fill="black" />
        </span>
      </p>
    </div>
  );
};

export default ExperienceCard;

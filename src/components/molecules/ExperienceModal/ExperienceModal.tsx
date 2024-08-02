import { BsCalendarDateFill } from "react-icons/bs";
import { FaArrowsToDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdConfirmationNumber } from "react-icons/md";

const ExperienceModal = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="modal-overlay overflow-hidden" onClick={onClose}>
      <div
        className="modal-content bg-indigo-300 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h1 className="text-black text-xl font-bold flex items-center gap-1">
          <span>
            <MdConfirmationNumber />
          </span>
          {experience.company}
        </h1>
        <h2 className="text-lg mb-1 border-b flex items-center gap-1">
          <span>
            <FaArrowsToDot />
          </span>
          {experience.title}
        </h2>
        <span className="text-sm italic flex items-center gap-1">
          <span>
            <BsCalendarDateFill />
          </span>
          {experience.startDate} - {experience.endDate}
        </span>
        <p className="my-3 flex">{experience.description}</p>
        <p className="flex items-center text-sm">
          <span>
            <IoLocationOutline />
          </span>
          Location: {experience.location}
        </p>
      </div>
    </div>
  );
};

export default ExperienceModal;

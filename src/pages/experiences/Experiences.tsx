import Link from "@components/atoms/Link/Link";
import Text from "@components/atoms/Text/Text";
import Title from "@components/atoms/Title/Title";
import ExperienceCard from "@components/molecules/ExperienceCard/ExperienceCard";
import ExperienceModal from "@components/molecules/ExperienceModal/ExperienceModal";
import { Experience } from "@types/experience";
import getData from "@utils/getData";
import { useEffect, useState } from "react";

const Experiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setExperiences(data);
    };

    fetchData();
  }, []);

  const handleCardClick = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="p-24 bg-experiences-bg overflow-visible w-full min-h-full flex-col justify-between items-center">
      <div className="row-between">
        <div className="header">
          <Text text="- EXPERIENCES" style={["about-top-text"]} />
          <Title text={"My Experiences"} style={["about-title"]} />
        </div>
        <div className="rowEnd">
          <Link
            text={"kociremx@gmail.com"}
            href={"mailto:kociremx@gmail.com"}
            style={["home-contact hover:orange-border"]}
          />
        </div>
      </div>
      <div className="row-between-wrap mt-7">
        {experiences.length > 0 &&
          experiences.map((experience: Experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              onClick={handleCardClick}
            />
          ))}
      </div>
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Experiences;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import Link from "@components/atoms/Link/Link";
import Text from "@components/atoms/Text/Text";
import Title from "@components/atoms/Title/Title";
import ExperienceCard from "@components/molecules/ExperienceCard/ExperienceCard";
import ExperienceModal from "@components/molecules/ExperienceModal/ExperienceModal";
import { useEffect, useState } from "react";
import { Experience } from "src/types/type";
import mock from "./../../../mock.json";

const Experiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>();
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await mock.experiences;
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
    <div className="lg:p-24 p-8 bg-experiences-bg overflow-visible w-full min-h-screen flex flex-col justify-between items-center">
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="mb-8 md:mb-0">
          <Text text="- EXPERIENCES" style={["about-top-text"]} />
          <Title text={"My Experiences"} style={["about-title"]} />
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <Link
            text={"kociremx@gmail.com"}
            href={"mailto:kociremx@gmail.com"}
            style={["home-contact hover:translate-x-0"]}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between w-full mt-7 gap-5">
        {experiences &&
          experiences?.length > 0 &&
          experiences?.map((experience: Experience, index) => (
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

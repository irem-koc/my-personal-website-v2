/* eslint-disable @typescript-eslint/ban-ts-comment */
import Text from "@components/atoms/Text/Text";
import Title from "@components/atoms/Title/Title";
import PortfolioCard from "@components/molecules/PortfolioCard/PortfolioCard";
import { useEffect, useState } from "react";
import mock from "../../../mock.json";

const Portfolio = () => {
  const [projects, setProjects] = useState<
    {
      id: number;
      title: string;
      thumbnail: string;
      githubUrl: string;
      figmaUrl: string;
      usedLanguages: string[];
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await mock.projects;
      setProjects(
        data as {
          id: number;
          title: string;
          thumbnail: string;
          githubUrl: string;
          figmaUrl: string;
          usedLanguages: string[];
        }[]
      );
    };
    fetchData();
  }, []);
  return (
    <div className="lg:p-24 p-8 bg-portfolio-bg overflow-visible w-full min-h-screen flex flex-col justify-between items-center">
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="header mb-8 md:mb-0">
          <Text text="- PROJECTS" style={["about-top-text"]} />
          <Title text={"Recent completed works"} style={["about-title"]} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between w-full mt-7 gap-5">
        {projects?.length > 0 &&
          projects?.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;

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
    <div className="p-24 bg-portfolio-bg overflow-visible w-full min-h-full flex-col justify-between items-center">
      <div className="row-between">
        <div className="header">
          <Text text="- PROJECTS" style={["about-top-text"]} />
          <Title text={"Recent completed works"} style={["about-title"]} />
        </div>
      </div>
      <div className="row-between-wrap mt-7">
        {projects?.length > 0 &&
          projects?.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;

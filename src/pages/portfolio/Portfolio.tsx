import Text from "@components/atoms/Text/Text";
import Title from "@components/atoms/Title/Title";
import PortfolioCard from "@components/molecules/PortfolioCard/PortfolioCard";
import { useEffect, useState } from "react";
import mock from "../../../mock.json";

type Props = {};

const Portfolio = (props: Props) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await mock.projects;
      setProjects(data);
    };
    fetchData();
  }, []);
  return (
    <div className=" p-24 bg-portfolio-bg w-full h-screen flex-col justify-between items-center">
      <div className="row-between">
        <div className="header">
          <Text text="- PROJECTS" style={["about-top-text"]} />
          <Title text={"Recent completed works"} style={["about-title"]} />
        </div>
      </div>
      <div className="row-between-wrap">
        {projects?.length > 0 &&
          projects?.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;

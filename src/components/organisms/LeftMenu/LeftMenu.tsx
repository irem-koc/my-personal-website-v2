import iremkoclogo from "@assets/iremkoc-logo.png";
import Image from "@atoms/Image/Image";
import Text from "@components/atoms/Text/Text";
import Footer from "@components/molecules/Footer/Footer";
import { Context } from "@context/Context";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftMenu = () => {
  const { activeTab, setActiveTab } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname, setActiveTab]);

  return (
    <div className="border-r sticky top-0 hidden md:block md:w-[300px] flex-shrink-0 h-screen p-8">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center">
          <Image
            source={iremkoclogo}
            alt="logo"
            title="İrem Koç"
            style={["left-image"]}
          />
          <div className="relative">
            <Text text="Irem KOC" style={["big-irem"]} />
            <Text text="Irem KOC" style={["small-irem"]} />
          </div>
        </div>
        <div className="col-center gap-6">
          <Link to="/">
            <Text
              text="Home"
              style={["liste-item", activeTab === "/" ? "text-purple" : ""]}
            />
          </Link>
          <Link to="/about">
            <Text
              text="About"
              style={[
                "liste-item",
                activeTab === "/about" ? "text-purple" : "",
              ]}
            />
          </Link>
          <Link to="/experiences">
            <Text
              text="Experiences"
              style={[
                "liste-item",
                activeTab === "/experiences" ? "text-purple" : "",
              ]}
            />
          </Link>
          <Link to="/portfolio">
            <Text
              text="Portfolio"
              style={[
                "liste-item",
                activeTab === "/portfolio" ? "text-purple" : "",
              ]}
            />
          </Link>
          <Link to="/contact">
            <Text
              text="Contact"
              style={[
                "liste-item",
                activeTab === "/contact" ? "text-purple" : "",
              ]}
            />
          </Link>
        </div>
        <Footer
          text="Copyright © 2024 Irem"
          secondaryText=" Koc. All rights reserved."
        />
      </div>
    </div>
  );
};

export default LeftMenu;

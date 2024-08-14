import iremkoclogo from "@assets/iremkoc-logo.png";
import Image from "@atoms/Image/Image";
import Text from "@atoms/Text/Text";
import Footer from "@components/molecules/Footer/Footer";
import { Context } from "@context/Context";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ContextType } from "src/types/ContextType";

const LeftMenu = () => {
  const { activeTab, setActiveTab } = useContext(Context) as ContextType;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname, setActiveTab]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:sticky md:top-0 h-screen flex-shrink-0 bg-white z-50">
      {/* Hamburger Icon for Mobile */}
      <FaBars
        className="absolute top-2 left-2 md:hidden text-2xl cursor-pointer"
        onClick={toggleMenu}
      />

      {/* Sidebar for Desktop and Fullscreen Menu for Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block fixed md:relative top-0 left-0 w-full h-full md:w-auto md:h-auto bg-white z-50`}
      >
        <FaBars
          className="absolute top-2 left-2 md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
        <div className="flex flex-col justify-between h-full p-8">
          <div className="flex flex-col items-center">
            <Image
              source={iremkoclogo}
              alt="logo"
              title="İrem Koç"
              style={["left-image"]}
            />
            <div className="relative mt-4">
              <Text text="Irem KOC" style={["big-irem"]} />
              <Text text="Irem KOC" style={["small-irem"]} />
            </div>
          </div>
          <div className="col-center gap-6">
            <Link to="/" onClick={toggleMenu}>
              <Text
                text="Home"
                style={["liste-item", activeTab === "/" ? "text-purple" : ""]}
              />
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              <Text
                text="About"
                style={[
                  "liste-item",
                  activeTab === "/about" ? "text-purple" : "",
                ]}
              />
            </Link>
            <Link to="/experiences" onClick={toggleMenu}>
              <Text
                text="Experiences"
                style={[
                  "liste-item",
                  activeTab === "/experiences" ? "text-purple" : "",
                ]}
              />
            </Link>
            <Link to="/portfolio" onClick={toggleMenu}>
              <Text
                text="Portfolio"
                style={[
                  "liste-item",
                  activeTab === "/portfolio" ? "text-purple" : "",
                ]}
              />
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <Text
                text="Contact"
                style={[
                  "liste-item",
                  activeTab === "/contact" ? "text-purple" : "",
                ]}
              />
            </Link>
          </div>
          <Footer text="Copyright © 2024 Irem Koc." />
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

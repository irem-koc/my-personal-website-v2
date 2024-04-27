import iremkoclogo from "@assets/iremkoc-logo.png";
import Image from "@atoms/Image/Image";
import Text from "@components/atoms/Text/Text";
import Footer from "@molecules/LeftMenu/Footer/Footer";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div className="border-r w-1/5 h-screen p-8">
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
            <Text text="Home" style={["liste-item"]} />
          </Link>
          <Link to="/about">
            <Text text="About" style={["liste-item"]} />
          </Link>
          <Link to="/experiences">
            <Text text="Experiences" style={["liste-item"]} />
          </Link>
          <Link to="/portfolio">
            <Text text="Portfolio" style={["liste-item"]} />
          </Link>
          <Link to="/contact">
            <Text text="Contact" style={["liste-item"]} />
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

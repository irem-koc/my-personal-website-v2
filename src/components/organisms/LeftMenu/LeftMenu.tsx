import iremkoclogo from "@assets/iremkoc-logo.png";
import Image from "@atoms/Image/Image";
import Text from "@components/atoms/Text/Text";
import Footer from "@molecules/LeftMenu/Footer/Footer";

const LeftMenu = () => {
  return (
    <div className="border-r w-1/5 h-screen p-8">
      <div className="col-center h-full">
        <div className="col-center">
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
        <div className="col-center gap-4">
          <Text text="Home" style={["liste-item"]} />
          <Text text="About" style={["liste-item"]} />
          <Text text="Experiences" style={["liste-item"]} />
          <Text text="Portfolio" style={["liste-item"]} />
          <Text text="Contact" style={["liste-item"]} />
        </div>
        <div className="col-center">
          <Footer
            text="Copyright © 2024 Irem"
            secondaryText=" Koc. All rights reserved."
          />
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

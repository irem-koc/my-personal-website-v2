import iremkoclogo from "@assets/iremkoc-logo.png";
import Image from "@atoms/Image/Image";
import Text from "@components/atoms/Text/Text";
import Footer from "@molecules/LeftMenu/Footer/Footer";

const LeftMenu = () => {
  return (
    <div className="border-r w-1/5 h-screen">
      <div className="col-center">
        <div className="col-center">
          <Image
            source={iremkoclogo}
            alt="logo"
            title="İrem Koç"
            style={["left-image"]}
          />
          <div className="relative">
            <Text text="Irem Koc" style={["big-irem"]} />
            <Text text="Irem Koc" style={["small-irem"]} />
          </div>
        </div>
        <div className="col-center">
          <Text text="Home" style={["liste-item"]} />
          <Text text="About" style={["liste-item"]} />
          <Text text="Experiences" style={["liste-item"]} />
          <Text text="Portfolio" style={["liste-item"]} />
          <Text text="Contact" style={["liste-item"]} />
        </div>
        <div className="col-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

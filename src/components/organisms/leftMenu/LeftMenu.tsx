import iremkoclogo from "@assets/iremkoc-logo.png";
import Image from "@atoms/Image/Image";
import Text from "@components/atoms/Text/Text";
import Footer from "@molecules/LeftMenu/Footer/Footer";

const LeftMenu = () => {
  return (
    <div className="border-r w-1/5 h-screen ">
      <div className="col-center">
        <div className="col-center">
          <Image source={iremkoclogo} alt="logo" title="İrem Koç" />
          <Text text="İrem Koç" />
          <Text text="İrem Koç" />
          <Text text="Home" />
        </div>
        <div className="col-center">
          <Text text="Home" />
          <Text text="About" />
          <Text text="Experiences" />
          <Text text="Portfolio" />
          <Text text="Contact" />
        </div>
        <div className="col-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

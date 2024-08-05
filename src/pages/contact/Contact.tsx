import Button from "@components/atoms/Button/Button";
import Text from "@components/atoms/Text/Text";
import Title from "@components/atoms/Title/Title";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="p-24 bg-contact-bg w-full overflow-visible min-h-full flex flex-col">
      <div className="row-between">
        <div>
          <div className="header">
            <Text text="- LET'S CONNECT" style={["about-top-text"]} />
            <Title text={"Get in touch"} style={["about-title"]} />
          </div>
          <div>
            <p>
              I am open to full-time job opportunities. You can reach me through
              the contact details below or by filling out the form on the right.
              You can contact anytime at 24/7
            </p>
            <div className="border-orange flex flex-col">
              <Text text={"+90 553 975 3691"} style={["home-contact"]} />
              <Text text={"kociremx@gmail.com"} style={["home-contact"]} />
              <Text text={"Beylikduzu,Istanbul"} style={["home-contact"]} />
            </div>
          </div>
        </div>
        <div>
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your name" />
          <textarea name="" id="" placeholder="Write something.."></textarea>
          <Button text={"Submit"} style={["bg-blue"]} to={"/"} />
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48187.25889999743!2d28.60543333924792!3d40.987968956746926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fc19deb0b3b%3A0xdf4ea093f30983c6!2zQmV5bGlrZMO8esO8L8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1722887758180!5m2!1sen!2str"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

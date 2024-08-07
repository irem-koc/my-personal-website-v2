import Text from "@components/atoms/Text/Text";
import Title from "@components/atoms/Title/Title";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_55594ng", "template_4kfjmt5", form.current || "", {
        publicKey: "yvwE0TUb1fcqRImzY",
      })
      .then(
        () => {
          toast.success("Your message sent successfully!");
        },
        () => {
          toast.error("Successfully toasted!");
        }
      );
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="p-24 bg-contact-bg w-full overflow-visible min-h-full flex flex-col gap-3">
      <Toaster />
      <div className="row-between gap-10">
        <div className="lg:w-3/6">
          <div className="header">
            <Text text="- LET'S CONNECT" style={["about-top-text"]} />
            <Title text={"Get in touch"} style={["about-title"]} />
          </div>
          <div className="mt-2">
            <p className="leading-8 my-2">
              I am open to full-time job opportunities. You can reach me through
              the contact details below or by filling out the form on the right.
              You can contact anytime at 24/7
            </p>
            <ul className="hidden xl:flex border-orange flex-col gap-2 mt-3">
              <li>
                <Text text={"+90 553 975 3691"} style={["home-contact"]} />
              </li>
              <li>
                <Text text={"kociremx@gmail.com"} style={["home-contact"]} />
              </li>
              <li>
                <Text text={"Beylikduzu,Istanbul"} style={["home-contact"]} />
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex xl:w-3/6 lg:w-3/6 md:w-4/6  flex-col items-center gap-4">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="w-5/6 h-14 p-4 mb-3 outline-none border focus:border-gray-400"
              type="text"
              placeholder="Enter your name"
              name="user_name"
              required
            />
            <input
              className="w-5/6 h-14 p-4 mb-3 outline-none border focus:border-gray-400"
              type="email"
              placeholder="Your email"
              name="user_email"
              required
            />
            <textarea
              className="w-5/6 p-4 outline-none border mb-3 focus:border-gray-400"
              name="message"
              placeholder="Write something.."
              required
            ></textarea>
            <input className="buton-style" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="w-full h-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210961672!2d28.682527326897503!3d41.00537021009964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1722974538685!5m2!1sen!2str"
          height="200"
          width={"100%"}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

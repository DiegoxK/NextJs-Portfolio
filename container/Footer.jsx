import { AppWrap, MotionWrap } from "../wrapper";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Footer = () => {
  const form = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_31u0re6",
        "template_kt5jwnm",
        form.current,
        "DVdPazxdRDRy23wQ0"
      )
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src="/assets/email.png" alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            diego.stv@hotmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src="/assets/mobile.png" alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +57 (321) 412890
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              id="name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              id="inputEmail"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              type="text"
              placeholder="Your Message"
              id="Subject"
              name="subject"
              required
            />
          </div>
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

Footer.getLayout = (section) => (
  <AppWrap idName="contact" classNames="app__whitebg">
    <MotionWrap classNames="app__footer">{section}</MotionWrap>
  </AppWrap>
);

export default Footer;

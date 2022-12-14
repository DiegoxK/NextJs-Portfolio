import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor } from "../client";

const About = ({ abouts }) => {
  return (
    <>
      <h2 className="head-text">
        Is Known <span>Passion</span> <br />
        is the key for <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

About.getLayout = (section) => (
  <AppWrap idName="about" classNames="app__whitebg">
    <MotionWrap classNames="app__about">{section}</MotionWrap>
  </AppWrap>
);

export default About;

import { motion } from "framer-motion";
import { AppWrap } from "../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, My name is</p>
              <h1 className="head-text">
                <span>Diego!</span>
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Full Stack</p>
            <p className="p-text">AI Enthusiast</p>
          </div>

          <div className="desc-cmp app__flex">
            <p className="p-text">
              From web reactive components with React to nice looking UI
              responsive designs, I'm a web developer & designer, currently
              focused on the MERN stack.
            </p>
          </div>

          <div className="desc-cmp app__flex">
            <p className="p-text">
              I really love to learn and create new things. Innovation, care,
              and security are my ways to go.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src="/assets/profile.png" alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          src="/assets/circle.svg"
          alt="profile_circle"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {["/assets/node.png", "/assets/react.png", "/assets/sass.png"].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}

Header.getLayout = (section) => <AppWrap idName="home">{section}</AppWrap>;

export default Header;

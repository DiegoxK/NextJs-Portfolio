import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/DiegoxKa">
      <BsTwitter />
    </a>
    <a href="https://github.com/DiegoxK">
      <AiFillGithub />
    </a>
    <a href="https://www.instagram.com/diegoxka/">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;

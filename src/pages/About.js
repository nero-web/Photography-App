/** @format */

import React, { useContext } from "react";
import WomanImg from '../img/about/woman.png';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section className='section' initial={{ opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:'100%'}} transition={transition1}>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 xxl:max-h-max lg:max-h-[500px] order-2 lg:order-none xxl:overflow-hidden">
            <img src={WomanImg} alt="" className="h-[500px] lg:ml-[100px]" /> 
          </div>
          <motion.div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start" initial={{ opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:'-80%'}} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">Im Alina Lee and <b>Im photographer</b> And Film Maker
            <br/>
            <br/>
            Im Alina Lee and Im photographer And Film Maker
            </p>
            <Link to={'/portfolio'} className="btn rounded-md">View my work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
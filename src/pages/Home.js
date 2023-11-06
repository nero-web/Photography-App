import React, { useContext } from 'react';
import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';
import '../index.css';

const Home = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section className='section flex justify-center relative' initial={{ opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={transition1}>
      <div className='container mx-auto h-full absolute'>
        <div className='flex flex-col justify-center'>
          <motion.div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start' initial={{ opacity: 0, y: '-50'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-50'}} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <h1 className='h1'>
              photoghrapher <br/> & film maker
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Los Angles, USA</p>
            <Link to={'/contact'} className='btn mb-[30px] rounded-md'>hire me</Link>
          </motion.div>
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-40' initial={{ scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={transition1}>
              <motion.img src={WomanImg} alt='' whileHover={{ scale: 1.1}} transition={transition1}/>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home; 

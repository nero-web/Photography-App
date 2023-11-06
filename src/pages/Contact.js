import React from 'react';
import WomanImg from '../img/contact/woman.png';
import emailjs from '@emailjs/browser';
import { useRef, useContext } from "react";
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32j4ym7', 'template_vig41qw', form.current, 'qZu2bRVf_i12O7WYh')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <motion.section className='section bg-white' initial={{ opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:'100%'}} transition={transition1}>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-[17rem] -z-10' initial={{ opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:'100%'}} transition={transition1}></motion.div>
          <div className='lg:flex-1 lg:pt-32 px-4' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form className='flex flex-col gap-y-4' onSubmit={sendEmail} ref={form} method='send'>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Your Name'
                name="from_name"/>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Your email adress'
                name="user_email"/>
              </div>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
                name="message"/>
              <button type='send' className='btn mb-[30px] mx-auto lg:mx-0 self-start rounded-md'>Send it</button>  
            </form>
          </div>
          <motion.div className='lg:flex-1' initial={{ opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:'100%'}} transition={{transition: transition1, duration: 1.5}}>
            <img src={WomanImg} alt='' className='max-h-[700px]'></img>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

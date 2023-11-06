import React, { useContext } from 'react';

import {
  ImTwitter,
  ImPinterest,
  ImYoutube,
} from 'react-icons/im';
import { CursorContext } from '../context/CursorContext';
import { FaInstagram, FaFacebook, } from 'react-icons/fa';

const Socials = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <div className='hidden xl:flex ml-24' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://twitter.com/SaadElmasrour' target='_blank'>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/SaadElmasrour' target='_blank'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/SaadElmasrour' target='_blank'>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/SaadElmasrour' target='_blank'>
            <ImYoutube />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/SaadElmasrour' target='_blank'>
            <ImPinterest />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;


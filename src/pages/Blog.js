import React, { useState, useEffect, useContext } from 'react';
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [displayAll, setDisplayAll] = useState(false);  

    const blogs = [
        {
            id: 1,
            category: "Landscape Photography",
            date: "3.11.2011",
            title: "Mastering Landscape Photography: Capturing Nature's Beauty",
            paragraphe: "Learn the art of landscape photography, from composition tips to equipment recommendations, and discover how to create breathtaking natural scenes in your photos.",
        },
        {
            id: 2,
            category: "Landscape Photography",
            date: "3.12.2021",
            title: "Golden Hour Magic: A Guide to Perfect Sunset Photography",
            paragraphe: "Uncover the secrets of capturing stunning sunset moments. Find out the best techniques, locations, and camera settings to make your sunset photos truly enchanting.",
        },
        {
            id: 3,
            category: "Portrait Photography",
            date: "3.11.2015",
            title: "The Art of Portraiture: A Photographer's Guide",
            paragraphe: "Dive into the world of portrait photography. Learn about lighting, posing, and composition to take captivating and emotionally rich portraits.",
        },
        {
            id: 4,
            category: "Portrait Photography",
            date: "3.11.2019",
            title: "Capturing Authentic Emotions: Candid Portrait Photography",
            paragraphe: "Explore the art of candid portrait photography. Discover techniques to capture genuine emotions and create compelling and natural-looking portraits.",
        },
        {
            id: 5,
            category: "Street Photography",
            date: "3.11.2023",
            title:  "Streets Speak: The Essence of Street Photography",
            paragraphe: "Get ready to roam the streets and capture the essence of urban life. Learn about techniques, equipment, and the ethics of street photography.",
        },
        {
            id: 6,
            category: "Street Photography",
            date: "9.08.2023",
            title: "The Art of Black and White Street Photography",
            paragraphe: "Dive into the world of black and white street photography. Discover how to create powerful and timeless images that convey the soul of the city.",
        },
        {
            id: 7,
            category: "Wildlife Photography",
            date: "29.08.2022",
            title: "Into the Wild: A Photographer's Guide to Wildlife Photography",
            paragraphe: "Explore the world of wildlife photography. Learn about wildlife behavior, essential gear, and tips for capturing stunning images of animals in their natural habitats.",
        },
        {
            id: 8,
            category: "Wildlife Photography",
            date: "9.10.2020",
            title: "Birdwatching Through a Lens: Bird Photography Essentials",
            paragraphe: "Bird photography enthusiasts, this one's for you! Learn about bird behavior, the right equipment, and techniques to capture stunning avian moments.",
        },
        {
            id: 9,
            category: "Macro Photography",
            date: "12.10.2023",
            title: "A World Up Close: Mastering Macro Photography",
            paragraphe: "Discover the beauty of the miniature world through macro photography. Learn about equipment, lighting, and techniques to capture intricate details.",
        },
        {
            id: 10,
            date: "22.11.2022",
            category: "Macro Photography",
            title:  "Capturing Tiny Wonders: The Art of Insect Macro Photography",
            paragraphe: "Explore the fascinating world of insects through your lens. Learn how to capture the minute details and behaviors of these tiny wonders in macro photography.",
        },
    ]

    const visibleBlogs = displayAll ? blogs : blogs.slice(0, 4);

    const toggleDisplay = () => {
    setDisplayAll(!displayAll);
    };

    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
    

    return (
        <motion.section className='w-screen h-screen relative flex justify-center' initial={{ opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:'-80%'}} transition={transition1}>
      <div className='container mx-0 h-auto absolute lg:top-[140px] top-[100px] pb-5 px-5'>
        <div className='w-full mb-5' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <h1 className='h11 mb-10'>Blog</h1>
        </div>
        <div className='w-full'>
          <div className='work_listb w-full'>
            {visibleBlogs.map((blog) => (
                <div key={blogs.id} className='flex flex-col mb-16'>
                <div className='xxl:text-[25px] text-[#696c6d]'>{blog.date} • {blog.category}</div>
                <h1 className='xxl:text-[35px] text-[24px] font-primary font-bold capitalize leading-[120%] mb-2 pt-2'>{blog.title}</h1>
                <p className='xxl:text-[25px]'>{blog.paragraphe}</p>
              </div>
            ))}  
          </div>
            <button onClick={toggleDisplay} className='text-white cursor-pointer bg-black px-5 py-5 rounded-md' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            {displayAll ? 'Show First Blogs' : 'Show All Blogs'}
            </button>
        </div>
      </div>
      </motion.section> 
    );
};

export default Blog;
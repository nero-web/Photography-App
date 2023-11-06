import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { items } from '../components/AllData';
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Set the filtered items based on the selected category
    setFilteredItems(selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory));
  }, [selectedCategory]);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category.toLowerCase()); // Convert to lowercase
  };

  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)

  return (
    <section className='w-screen h-screen relative flex justify-center'>
      <div className='container mx-0 h-auto absolute lg:top-[140px] top-[100px] pb-5 px-5'>
        <div className='w-full mb-5' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <h1 className='h11 mb-10'>Portfolio</h1>
          <div className="filter-btns">
            <Link className='pl-[0rem] pr-[1rem]'>
              <button onClick={() => handleCategorySelect('all')}>
                ALL
              </button>
            </Link>
            <Link>
              <button className='pl-[.6rem] pr-[1rem]' onClick={() => handleCategorySelect('fashion')}>
                FASHION
              </button>
            </Link>
            <Link>
              <button className='pl-[.6rem] pr-[1rem]' onClick={() => handleCategorySelect('food')}>
                FOOD
              </button>
            </Link>
            <Link>
              <button className='pl-[.6rem] pr-[1rem]' onClick={() => handleCategorySelect('events')}>
                EVENTS
              </button>
            </Link>
            <Link>
              <button className='pl-[.6rem] pr-[1rem]' onClick={() => handleCategorySelect('nature')}>
                NATURE
              </button>
            </Link>
            <Link>
              <button className='pl-[.6rem] pr-[1rem]' onClick={() => handleCategorySelect('urban')}>
                URBAN
              </button>
            </Link>
            <Link>
              <button className='pl-[.6rem] pr-[1rem]' onClick={() => handleCategorySelect('person')}>
                PERSON
              </button>
            </Link>
            {/* Add more buttons for other categories as needed */}
          </div>
        </div>
        <div className='w-full'>
          <div className='work_list'>
            {filteredItems.map((item) => (
              <div key={item.id} className='h-fit grid-item'>
                <Link to={`/portfolio/product/${item.id}`}>
                  <img src={item.imgp} alt='' className='grid-img'/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>  
  );
};

export default Portfolio;



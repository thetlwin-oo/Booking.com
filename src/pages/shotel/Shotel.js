import React, { useState } from 'react';
import Navbar from '../../component/Navbar';
import Header from '../../component/Header';
import "./shotel.css";
import { TfiLocationPin } from "react-icons/tfi";
import Footer from '../footer/Footer';
import { BsFillArrowLeftCircleFill ,BsFillArrowRightCircleFill} from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import MailList from '../mailList/MailList';

const Shotel = () => {
  const [open, setOpen] = useState(true);
  const [slideImage, setSliderImage] = useState(0);

  const handleClick = (i) => {
    setOpen(!open);
    setSliderImage(i);
  };


  const moveArrow = (direction) => {

    let newSliderNumber ;

    if(direction === "L") {
        newSliderNumber =   slideImage === 0 ? 5 : slideImage - 1
    }else {
        newSliderNumber =  slideImage === 5 ? 0 : slideImage + 1
    }

    setSliderImage(newSliderNumber)

  }

  const photos = [
    {
      src: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      src: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      src: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      src: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotleContainer'>
        {open && (
          <div className='slider'>
            <BsFillArrowLeftCircleFill className='arrow' onClick={() => moveArrow("L")}/>
            <IoCloseCircle className='close'onClick={()=>setOpen(false)}/>
            <div className='sliderWrapper'>
              <img src={photos[slideImage]?.src} alt="SliderImage" className='sliderImag'/>
            </div>
            <BsFillArrowRightCircleFill className='arrow' onClick={() => moveArrow("R")}/>
          </div>
        )}
        <div className='hotelWarrper'>
          <div className='hotleAdress'>
            <div className='hoteldetail'>
              <h1 style={{ margin: '0' }}>Grand hotel</h1>
              <button style={{ height: "max-content", padding: "10px 10px", background: "blue", color: 'white', border: 'none', borderRadius: '5px' }}>Reserve or Book Now!</button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TfiLocationPin />
              <span>Aungminglar 31 str Yangon</span>
            </div>
            <span style={{ color: 'blue' }}>Excellent location - 500m from city center</span>
            <span style={{ color: 'green' }}>Book stay over $105 at this property and get a free airport taxi!</span>
          </div>
          <div className='hotelImgs'>
            {photos.map((photo, i) => (
              <div className='photoImageWarpper' key={i}>
                <img onClick={() => handleClick(i)} src={photo.src} className='hotelImage' alt={`Photo ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className='summar'>
            <div className='summarDetail'>
              <h1>
                Stay in the heart of Kalaw
              </h1>
              <span>
                You're eligible for a Genius discount at Hotel IN! To save at this property, all you have to do is sign in. Situated on Biograd’s marina, Hotel In provides luxurious rooms with large balconies. It includes a gourmet restaurant, an impressive wellness area with an indoor pool, and a rooftop terrace with a hot tub.
                Looking out to the Adriatic Sea, all rooms at the In Hotel have been decorated with contemporary designer furniture and nautical features, such as wood panels and cool whites and blues.
                These large rooms all come with king-size beds, glass-boxed bathrooms, and spacious seating areas. From their private balcony, guests can enjoy views of the marina and the Pasman Island.
                The restaurant features floor-to-ceiling windows with views of the marina and a minimalist decor. Here guests can enjoy a fresh Mediterranean menu and a daily buffet breakfast.
              </span>
            </div>
            <div className='highlights'>
              <h1>Property highlights</h1>
              <span>Situated in the best-rated area in Biograd na Moru, this hotel has an excellent location score of 8.9</span>
              <h2>$540 (7 nights)</h2>
              <button style={{ padding: '10px 10px', background: 'rgb(68, 68, 165)', color: 'wheat', fontWeight: 'bold', border: 'none', borderRadius: '5px', marginBottom: '5px' }}>Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <MailList/>

    </div>
  );
}

export default Shotel;

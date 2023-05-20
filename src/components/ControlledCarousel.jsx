import React from 'react';
import Slider from 'react-slick';

const images = [
 
   'https://img.freepik.com/free-photo/schezwan-fried-rice-masala-szechuan-rice-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-74696.jpg?t=st=1677590724~exp=1677591324~hmac=5ec894f4b335af4ca49a656c40fd46dcc485dada34fbe8e966454e6b8fc34e39',
  ' https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1060&t=st=1677591203~exp=1677591803~hmac=6160b32ca4b029e1b24efb6d7986cd61585a8f32241dbcfc6ab3f8c8d5853b5e',
  ' https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1060&t=st=1677591234~exp=1677591834~hmac=bf4ae1f37110da1a40c6e566eff0d50747a090754b7dcf0ad80e758f44488be9',
];

const ControlledCarousel = () => {
  const settings = {
  
    speed: 300,
     
    slidesToScroll: 1,
  };

  return (
    <div className= "mx-5">
      <Slider className="  " {...settings}>
        {images.map((image, index) => (
          <div className="opacity-10" key={index}>
            <img  className="h-[23rem]  rounded-2xl object-cover" src={image} alt="" />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ControlledCarousel;
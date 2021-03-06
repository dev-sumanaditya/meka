import React, { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {

    const sliderRef = useRef();

    const items = [
        `${process.env.PUBLIC_URL}/assets/slide/C1.jpeg`,
        `${process.env.PUBLIC_URL}/assets/slide/G1.jpeg`,
        `${process.env.PUBLIC_URL}/assets/slide/L1.jpeg`,
        `${process.env.PUBLIC_URL}/assets/slide/MJ1.jpeg`,
        `${process.env.PUBLIC_URL}/assets/slide/MK1.jpeg`,
    ];

    const [selectedThumb, setSelectedThumb] = useState(0);

    const settings = {
        className:"",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 3,
        speed: 500,
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        draggable: true,
        focusOnSelect: true,
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                }
            }
        ],
        swipeToSlide: true,
        afterChange: (current) => setSelectedThumb(current),
        beforeChange: (current, next) => setSelectedThumb(next)
    };

    const SlideItem = (props) => {
        return (
            <div className="">
                <div className="w-11/12 mx-auto">
                    <div className="relative" style={{paddingTop: '100%'}}>
                        <div className={`absolute top-0 bottom-0 left-0 right-0`}>
                            <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: `url('${props.item}')`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Fade>
            <div className="">
                <Slider ref={sliderRef} {...settings}>
                    {items.map((item,index) => {
                        return (
                            <SlideItem item={item} key={index} index={index}/>
                        )
                    })}
                </Slider>
            </div>

           

            <div className="mt-14 flex items-center justify-center gap-2">
                {items.map((item,index) => {
                    return (
                        <div key={index} onClick={() => {sliderRef.current.slickGoTo(index)}} className={`h-1 w-10 duration-300 ${selectedThumb === index ? 'bg-gray-700' : 'bg-gray-400 bg-opacity-60 cursor-pointer'}`}></div>
                    )
                })}
            </div>
        </Fade>
    )
}

export default SliderComponent;
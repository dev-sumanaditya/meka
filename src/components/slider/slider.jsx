import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Fade from 'react-reveal/Fade';


const SliderComponent = () => {

    const items = [
        `${process.env.PUBLIC_URL}/assets/nft/0.png`,
        `${process.env.PUBLIC_URL}/assets/nft/1.png`,
        `${process.env.PUBLIC_URL}/assets/nft/2.png`,
        `${process.env.PUBLIC_URL}/assets/nft/3.png`,
        `${process.env.PUBLIC_URL}/assets/nft/4.png`,
    ];

    const [selectedThumb, setSelectedThumb] = useState(0);

    const handleChange = (e) => {
        setSelectedThumb(e)
    }

    return (
        <Fade>
            <div className="hidden sm:block">
                <Carousel
                    axis="horizontal"
                    autoPlay
                    centerMode
                    centerSlidePercentage={33}
                    emulateTouch
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    stopOnHover={true}
                    transitionTime={600}
                    onChange={handleChange}
                    swipeScrollTolerance={5}
                >
                    {items.map((item, index) => {
                        return (
                            <div className="my-10" key={index}>
                                <div className="w-5/6 mx-auto">
                                    <div className="relative" style={{paddingTop: '100%'}}>
                                        <div className={`absolute top-0 bottom-0 left-0 right-0 transform duration-500 ${selectedThumb === index ? 'scale-125' : 'hover:scale-105'}`}>
                                            <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: `url('${item}')`}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="my-10"></div>
                </Carousel>
            </div>

            <div className="sm:hidden">
                <Carousel
                    axis="horizontal"
                    autoPlay
                    centerMode
                    centerSlidePercentage={80}
                    emulateTouch
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    stopOnHover={true}
                    transitionTime={600}
                    onChange={handleChange}
                    swipeScrollTolerance={5}
                >
                    {items.map((item, index) => {
                        return (
                            <div className="my-10" key={index}>
                                <div className="w-10/12 mx-auto">
                                    <div className="relative" style={{paddingTop: '100%'}}>
                                        <div className={`absolute top-0 bottom-0 left-0 right-0 transform duration-500 ${selectedThumb === index ? 'scale-125' : 'hover:scale-105'}`}>
                                            <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: `url('${item}')`}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="my-10"></div>
                </Carousel>
            </div>

            <div className="mt-14 flex items-center justify-center gap-2">
                {items.map((item,index) => {
                    return (
                        <div key={index} className={`h-1 w-10 ${selectedThumb === index ? 'bg-white' : 'bg-indigo-400 bg-opacity-60'}`}></div>
                    )
                })}
            </div>
        </Fade>
    )
}

export default SliderComponent;
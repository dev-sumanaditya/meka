import React, { useEffect, useState } from 'react';
import MainNavbar from '../../components/mainNavBar/mainNavBar';

import Fade from 'react-reveal/Fade';
import SliderComponent from '../../components/slider/slider';
import SmallSlider from '../../components/smallSlide/smallSlide';
import Footer from '../../components/footer/footer';

const HomePage = () => {

    const [translateVal, setTranslateVal] = useState(0);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    const handleScroll = (e) => {
        setTranslateVal(window.pageYOffset / 3)
    }

    const styleParalax = {
        transform: `translate(0px, ${translateVal}px)`
    }

    return (
        <div>
            {/* Top section */}
            <div className="h-screen overflow-hidden" style={{backgroundColor: '#D0CDE1'}}>

                <div className="h-full" style={styleParalax}>
                    <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/media/main-bg.png')`}}></div>
                </div>

                <div className="absolute top-0 left-0 h-full w-full">
                    <div className="flex flex-col h-full">
                        <MainNavbar />
                        <div className="flex flex-grow items-center justify-center">
                            <div className="mt-72">
                                <Fade>
                                    <div className="px-10 py-6 text-white text-base sm:text-xl cursor-pointer bg-indigo-600 hover:bg-indigo-500 duration-300">
                                        View on Opensea
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="w-full" style={{transform: 'translateY(4px)'}}>
                            <svg id="wave" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(1, 3, 13, 1)" offset="0%"></stop><stop stopColor="rgba(1, 3, 13, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,0L720,45L1440,0L2160,120L2880,135L3600,30L4320,75L5040,105L5760,60L6480,135L7200,60L7920,90L8640,30L9360,135L10080,90L10800,105L11520,105L12240,15L12960,15L13680,45L14400,75L15120,0L15840,135L16560,15L17280,60L17280,150L16560,150L15840,150L15120,150L14400,150L13680,150L12960,150L12240,150L11520,150L10800,150L10080,150L9360,150L8640,150L7920,150L7200,150L6480,150L5760,150L5040,150L4320,150L3600,150L2880,150L2160,150L1440,150L720,150L0,150Z"></path></svg>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* rest content */}
            <div className="bg-primaryBlack">
                <div className="flex flex-col sm:flex-row items-center gap-10 max-w-5xl mx-auto px-8 sm:px-2">
                    <div className="w-full sm:w-6/12">
                        <Fade>
                            <h3 className="text-4xl text-pink">10 unique depictions</h3>
                            <h3 className="text-4xl text-white mt-2">who need Drivers.</h3>
                            <p className="text-gray-500 mt-6">The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.</p>
                            <p className="text-gray-500 mt-4">Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.</p>
                        </Fade>
                    </div>
                    <div data-lg-reveal className="w-full sm:w-6/12">
                        <div className="w-full relative" style={{paddingTop: '100%'}}>
                            <Fade>
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center"  style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/nft/6.png')`}}></div>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="py-32">
                    <SliderComponent />
                </div>

                <Fade>
                    <div className="max-w-5xl mx-auto relative">
                        <div className="flex flex-col sm:flex-row items-center gap-10 px-4 sm:px-2">
                            <div className="w-full sm:w-5/12 sm:text-right">
                                <h4 style={{zIndex: 10}} className="text-4xl text-gray-400">Who are we?</h4>
                                <h4 style={{zIndex: 10}} className="text-pink text-4xl">Creative Teams</h4>
                            </div>
                            <div className="w-full sm:w-7/12">
                                <p className="text-lg text-gray-400">
                                Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art direction. We have been working hard to establish our own style, and we're continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!
                                </p>
                            </div>
                        </div>
                        <div className="absolute sm:top-0 right-0 sm:left-0">
                                <img className="w-20 transform -rotate-45" src={`${process.env.PUBLIC_URL}/assets/media/cone.png`} alt="" />
                        </div>
                    </div>
                </Fade>


                <SmallSlider
                    leftImg={`${process.env.PUBLIC_URL}/assets/nft/elise.jpeg`}
                    title="Johnson"
                    img1={`${process.env.PUBLIC_URL}/assets/nft/1.png`}
                    img2={`${process.env.PUBLIC_URL}/assets/nft/2.png`}
                />

                <SmallSlider
                    leftImg={`${process.env.PUBLIC_URL}/assets/nft/elise.jpeg`}
                    title="Matt.B"
                    img1={`${process.env.PUBLIC_URL}/assets/nft/3.png`}
                    img2={`${process.env.PUBLIC_URL}/assets/nft/4.png`}
                />
                
                <div className="mt-32 bg-cover bg-center" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/nft/5-lg.png')`}}>
                    <div className="max-w-5xl mx-auto py-28 px-4 sm:px-0">
                        <Fade>
                            <div className="w-full sm:w-1/2">
                                <h2 className="text-gray-900 text-5xl">Purchase Your Brand Depiction</h2>
                                <p className="my-6 text-gray-700 text-lg">
                                MekaVerse Discord already has over 200,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.
                                </p>
                                <button className="px-10 py-6 bg-indigo-600 hover:bg-indigo-700 text-white mt-4">Purchase Your Brand Depiction</button>
                            </div>
                        </Fade>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default HomePage;
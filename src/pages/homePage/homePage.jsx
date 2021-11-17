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
            <div className="h-screen max-h-screen overflow-hidden" style={{backgroundColor: '#D0CDE1'}}>

                <div className="h-full" style={styleParalax}>
                    <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/media/main-bg.png')`}}></div>
                </div>

                <div className="absolute top-0 left-0 h-full w-full">
                    <div className="flex flex-col h-full">
                        <MainNavbar />
                        <div className="flex flex-col flex-grow items-center justify-center">
                                    <div className="w-3/4 sm:w-1/4">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src={`${process.env.PUBLIC_URL}/assets/video/gucci_text.mp4`} type="video/mp4"/>
                                        </video>
                                    </div>
                            <div className="border border-black mt-10">
                                <Fade>
                                    <a href="http://opensea.io/3dluxe" target="_blank" className="px-10 py-6 text-white text-base sm:text-xl cursor-pointer bg-indigo-600 hover:bg-indigo-500 duration-300">
                                        View on Opensea
                                    </a>
                                </Fade>
                            </div>
                        </div>
                        <div className="w-full text-primaryBG" style={{transform: 'translateY(4px)'}}>
                            <svg id="wave" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="currentColor" offset="0%"></stop><stop stopColor="currentColor" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,0L720,45L1440,0L2160,120L2880,135L3600,30L4320,75L5040,105L5760,60L6480,135L7200,60L7920,90L8640,30L9360,135L10080,90L10800,105L11520,105L12240,15L12960,15L13680,45L14400,75L15120,0L15840,135L16560,15L17280,60L17280,150L16560,150L15840,150L15120,150L14400,150L13680,150L12960,150L12240,150L11520,150L10800,150L10080,150L9360,150L8640,150L7920,150L7200,150L6480,150L5760,150L5040,150L4320,150L3600,150L2880,150L2160,150L1440,150L720,150L0,150Z"></path></svg>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* rest content */}
            <div className="bg-primaryBG">
                <div className="flex flex-col sm:flex-row items-center gap-10 max-w-5xl mx-auto px-8 sm:px-2">
                    <div className="w-full sm:w-6/12">
                        <Fade>
                            <h3 className="text-5xl text-pink">20 unique, Luxury NFT’s</h3>
                            <h3 className="text-4xl text-gray-700 mt-2">that need Drivers..</h3>
                            <p className="text-gray-700 mt-6">3DLUXE is a collection of 20 unique 3D Depictions with a few associative elements inspired by Burberry’s Apple iOS Design Award Winner.</p>
                            <p className="text-gray-700 mt-4">Each artwork is original, with its own color palette and creation. The objective was provide complimentary ux in accordance with the 3D architecture in order to prioritize quality above quantity.</p>
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
                                <h4 style={{zIndex: 10}} className="text-4xl text-gray-700">Who are we?</h4>
                                <h4 style={{zIndex: 10}} className="text-pink text-4xl">Creative Teams</h4>
                            </div>
                            <div className="w-full sm:w-7/12">
                                <p className="text-lg text-gray-700">
                                Hi! Elise T & Winston are two friends currently focusing on 3D, Art direction, & UX. We have been working hard to establish our own archetypal style, and we're continuously looking for new ways to push ourselves. Elise has worked with Prada, Gisou, Agent Nateur, & more!
                                </p>
                            </div>
                        </div>
                        <div style={{top: '-80px'}} className="absolute left-0 hidden sm:block">
                                <img className="w-20 transform -rotate-45" src={`${process.env.PUBLIC_URL}/assets/media/cone.png`} alt="" />
                        </div>
                        <div style={{top: '50px', right: '20px'}} className="absolute sm:hidden">
                                <img className="w-20 transform -rotate-45" src={`${process.env.PUBLIC_URL}/assets/media/cone.png`} alt="" />
                        </div>
                    </div>
                </Fade>


                <SmallSlider
                    leftImg={`${process.env.PUBLIC_URL}/assets/nft/elise.jpeg`}
                    title="Elise T"
                    img1={`${process.env.PUBLIC_URL}/assets/nft/red.jpg`}
                    img2={`${process.env.PUBLIC_URL}/assets/nft/8.jpg`}
                />
                
                <div className="mt-32 bg-cover bg-center" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/nft/5-lg.png')`}}>
                    <div className="max-w-5xl mx-auto py-28 px-4 sm:px-0">
                        <div className="flex flex-col sm:flex-row items-center gap-10">
                            <Fade>
                                <div className="w-full sm:w-3/5">
                                    <h2 className="text-gray-900 text-5xl">Purchase Your Depiction</h2>
                                    <p className="my-6 text-gray-700 text-lg">
                                    3DLUXE has a limited # of depictions! If you want to purchase your favorite brand depictions, head over to Openseas for the exclusive NFT listing. Each is 1/1.
                                    </p>
                                    <div className="pt-6">
                                        <a href="http://opensea.io/3dluxe" target="_blank">
                                            <div className="px-10 w-max py-6 bg-indigo-600 hover:bg-indigo-700 text-white text-center sm:text-left">
                                                Purchase Your Brand Depiction
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Fade>
                            <Fade>
                                <div className="w-full sm:w-2/5">
                                    <div className="w-full relative" style={{paddingTop: '100%'}}>
                                        <div className="absolute top-0 left-0 h-full w-full">
                                            <video width="100%" height="100%" autoPlay muted>
                                                <source src={`${process.env.PUBLIC_URL}/assets/video/gucci_text.mp4`} type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default HomePage;
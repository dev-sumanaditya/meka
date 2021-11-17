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
        <div className="uppercase bg-primaryBG">
            {/* Top section */}
            <div className="h-screen overflow-hidden">
                    <div className="flex flex-col h-full">

                        <MainNavbar />

                        <div className="flex flex-col flex-grow items-center justify-center">
                            <div className="w-5/6 sm:w-4/12 mt-16 sm:mt-2">
                                <video width="100%" height="100%" autoPlay muted loop>
                                    <source src={`${process.env.PUBLIC_URL}/assets/video/gucci_text.mp4`} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="mt-14 sm:mt-10">
                                <Fade>
                                    <a href="http://opensea.io/3dluxe" target="_blank">
                                        <div className="px-10 py-6 text-white text-base sm:text-xl cursor-pointer bg-black hover:bg-opacity-90 duration-300">View on Opensea</div>
                                    </a>
                                </Fade>
                            </div>
                        </div>
                    </div>                
            </div>

            {/* rest content */}
            <div className="bg-primaryBG sm:pt-20">
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
                                <p className="text-base text-gray-700">
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
                    leftImg={`${process.env.PUBLIC_URL}/assets/nft/6.png`}
                    title="Elise T"
                    img1={`${process.env.PUBLIC_URL}/assets/nft/red.jpg`}
                    img2={`${process.env.PUBLIC_URL}/assets/nft/8.jpg`}
                />
                
                <div className="mt-10 sm:mt-32 bg-cover bg-center">
                    <div className="max-w-5xl mx-auto py-10 sm:py-28 px-4 sm:px-0">
                        <div className="flex flex-col sm:flex-row items-center gap-10">
                            <Fade>
                                <div className="w-full sm:w-1/2">
                                    <h2 className="text-gray-900 text-3xl sm:text-4xl">Purchase Your Depiction</h2>
                                    <p className="my-6 text-gray-700 text-base">
                                    3DLUXE has a limited # of depictions! If you want to purchase your favorite brand depictions, head over to Openseas for the exclusive NFT listing. Each is 1/1.
                                    </p>
                                    <div className="pt-6">
                                        <a href="http://opensea.io/3dluxe" target="_blank">
                                            <div className="px-10 w-max py-6 text-sm sm:text-base bg-black hover:bg-opacity-90 text-white text-center sm:text-left">
                                                Purchase
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Fade>
                            <Fade>
                                <div className="w-full sm:w-1/2">
                                    <div className="w-full relative" style={{paddingTop: '100%'}}>
                                        <div className="absolute top-0 left-0 h-full w-full">
                                            <video width="100%" height="100%" autoPlay muted loop>
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
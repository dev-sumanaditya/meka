import React, { useEffect, useState } from 'react';
import MainNavbar from '../../components/mainNavBar/mainNavBar';

import Fade from 'react-reveal/Fade';
import SliderComponent from '../../components/slider/slider';
import SmallSlider from '../../components/smallSlide/smallSlide';
import Footer from '../../components/footer/footer';
import VideoPlayer from '../../components/player/player';

const HomePage = () => {

    const [showVideo, setShowVideo] = useState(false)


    const playVideo = () => {
        setShowVideo(true);
        setTimeout(() => {
            document.body.style.overflow = "hidden";
        }, 100)
    }

    const hideVideo = () => {
        setShowVideo(false);
        if(document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto";
        }
    }

    return (
        <div className="uppercase bg-primaryBG">
            {   showVideo &&
                <div className="fixed top-0 bottom-0 left-0 bg-primaryBG bg-opacity-60 right-0 z-50">
                    <Fade>
                        <div className="h-full w-full relative select-none">
                            <div className="p-4 flex justify-end absolute top-0 w-full left-0">
                                <div onClick={hideVideo} className="p-4 cursor-pointer bg-black text-white">close</div>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <VideoPlayer />
                            </div>
                        </div>
                    </Fade>
                </div>
            }
            {/* Top section */}
            <div className="">
                    <div className="flex flex-col h-full">

                        <MainNavbar />

                        <div className="max-w-7xl mx-auto mt-8">
                            <div className="w-full flex flex-col items-center justify-center">
                                <div className="sm:hidden w-11/12 mt-2">
                                    <video onContextMenu={e => e.preventDefault()} width="100%" preload="auto" autoPlay muted loop>
                                        <source src={`${process.env.PUBLIC_URL}/assets/video/${Math.random() < 0.5 ? 'GUC' : 'COA'}.mp4`} type="video/mp4"/>
                                    </video>
                                </div>
                                <div className="hidden sm:block mt-16 w-full">
                                    <video onContextMenu={e => e.preventDefault()} width="100%" preload="auto" autoPlay muted loop>
                                        <source src={`${process.env.PUBLIC_URL}/assets/video/triad${Math.random() < 0.5 ? '1' : '2'}.mp4`} type="video/mp4"/>
                                    </video>
                                </div>
                                <div className="mt-14 sm:mt-10">
                                    <Fade>
                                        <button onClick={playVideo}>
                                            <div className="px-10 py-6 text-white text-sm cursor-pointer bg-black hover:bg-opacity-90 duration-300">PLAY</div>
                                        </button>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>                
            </div>

            {/* rest content */}
            <div className="bg-primaryBG pt-24">
                <div className="px-4">
                    <div className="flex flex-col sm:flex-row items-center gap-10 max-w-5xl mx-auto">
                        <div className="w-full sm:w-6/12">
                            <Fade>
                                <h3 className="text-3xl text-black">20+ unique, Luxury NFT’s</h3>
                                <p className="text-gray-700 text-base mt-6">3DLUXE is a collection of 20+ unique 3D Depictions with a few associative elements inspired by Burberry’s Apple iOS Design Award Winner.</p>
                                <p className="text-gray-700 text-base mt-4">Each artwork is original, with its own color palette and creation. The objective was provide complimentary ux in accordance with the 3D architecture in order to prioritize quality above quantity.</p>
                            </Fade>
                        </div>
                        <div data-lg-reveal className="w-full sm:w-6/12">
                            <div className="w-full relative" style={{paddingTop: '100%'}}>
                                <Fade>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center"  style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/nft/merged.gif')`}}></div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-32">
                    <SliderComponent />
                </div>

                <div className="bg-black mb-20 pb-20 pt-0 sm:pt-20">
                    <div className="max-w-5xl mx-auto flex flex-col items-center gap-20">
                        <div className="w-full sm:w-8/12 lg:w-6/12">
                            <video width="100%" height="100%" autoPlay muted loop>
                                <source src={`${process.env.PUBLIC_URL}/assets/video/${Math.random() < 0.5 ? 'light':'dark'}2.mp4`} type="video/mp4"/>
                            </video>
                        </div>
                        <a href="http://opensea.io/3dluxe" target="_blank" className="bg-white text-black text-sm px-10 py-6 cursor-pointer transform  duration-300 hover:scale-105">View on Opensea</a>
                    </div>
                </div>

                <Fade>
                    <div className="px-4">
                        <div className="max-w-5xl mx-auto relative">
                            <div className="flex flex-col sm:flex-row gap-10">
                                <div className="w-full sm:w-5/12">
                                    <h4 style={{zIndex: 10}} className="text-3xl text-gray-700">Who are we?</h4>
                                    <h4 style={{zIndex: 10}} className="text-black text-2xl mt-2">Creative Teams</h4>
                                </div>
                                <div className="w-full sm:w-7/12">
                                    <p className="text-base text-gray-700">
                                    Hi! Elise T & Winston are two friends currently focusing on 3D, Art direction, & UX. We have been working hard to establish our own archetypal style, and we're continuously looking for new ways to push ourselves. Elise has worked with Prada, Gisou, Agent Nateur, & more!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>


                <SmallSlider
                    leftImg={`${process.env.PUBLIC_URL}/assets/nft/prada.jpg`}
                    title="Elise T"
                    img1={`${process.env.PUBLIC_URL}/assets/nft/red.jpg`}
                    img2={`${process.env.PUBLIC_URL}/assets/nft/8.jpg`}
                />
                
                <div className="mt-20 px-0 sm:px-4 bg-black">
                    <div className="max-w-5xl mx-auto pt-10 sm:py-28">
                        <div className="flex flex-col sm:flex-row items-center gap-10">
                            <Fade>
                                <div className="w-full sm:w-1/2 px-4 sm:px-0">
                                    <h2 className="text-white text-3xl">Purchase Your Depiction</h2>
                                    <p className="my-6 text-gray-200 text-base">
                                    3DLUXE has a limited # of depictions! If you want to purchase your favorite brand depictions, head over to Openseas for the exclusive NFT listing. Each is 1/1.
                                    </p>
                                    <div className="pt-6">
                                        <a href="http://opensea.io/3dluxe" target="_blank">
                                            <div className="px-10 w-max py-6 text-sm sm:text-base bg-white hover:bg-opacity-90 text-black text-center sm:text-left">
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
                                                <source src={`${process.env.PUBLIC_URL}/assets/video/light1.mp4`} type="video/mp4"/>
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
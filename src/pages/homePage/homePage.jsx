import React from 'react';
import MainNavbar from '../../components/mainNavBar/mainNavBar';

import Fade from 'react-reveal/Fade';
import SliderComponent from '../../components/slider/slider';
import SmallSlider from '../../components/smallSlide/smallSlide';
import Footer from '../../components/footer/footer';

const HomePage = () => {

    return (
        <div className="uppercase bg-primaryBG">
            {/* Top section */}
            <div className="">
                    <div className="flex flex-col h-full">

                        <MainNavbar />

                        <div className="flex flex-col flex-grow items-center justify-center">
                            <div className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 mt-16 sm:mt-2">
                                <video width="100%" height="100%" autoPlay muted loop>
                                    <source src={`${process.env.PUBLIC_URL}/assets/video/coach_text.mp4`} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="mt-14 sm:mt-10">
                                <Fade>
                                    <a href="http://opensea.io/3dluxe" target="_blank">
                                        <div className="px-10 py-6 text-white text-sm cursor-pointer bg-black hover:bg-opacity-90 duration-300">View on Opensea</div>
                                    </a>
                                </Fade>
                            </div>
                        </div>
                    </div>                
            </div>

            {/* rest content */}
            <div className="bg-primaryBG pt-24 px-4">
                <div className="flex flex-col sm:flex-row items-center gap-10 max-w-5xl mx-auto">
                    <div className="w-full sm:w-6/12">
                        <Fade>
                            <h3 className="text-3xl text-black">20 unique, Luxury NFT’s</h3>
                            <p className="text-gray-700 text-base mt-6">3DLUXE is a collection of 20 unique 3D Depictions with a few associative elements inspired by Burberry’s Apple iOS Design Award Winner.</p>
                            <p className="text-gray-700 text-base mt-4">Each artwork is original, with its own color palette and creation. The objective was provide complimentary ux in accordance with the 3D architecture in order to prioritize quality above quantity.</p>
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
                
                <div className="mt-10 px-4">
                    <div className="max-w-5xl mx-auto py-10 sm:py-28">
                        <div className="flex flex-col sm:flex-row items-center gap-10">
                            <Fade>
                                <div className="w-full sm:w-1/2">
                                    <h2 className="text-gray-900 text-3xl">Purchase Your Depiction</h2>
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
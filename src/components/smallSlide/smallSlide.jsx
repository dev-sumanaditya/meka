import React from 'react';
import Fade from 'react-reveal/Fade';
import SocialIcons2 from '../social/social2';

const SmallSlider = (props) => {

    return (
            <div>
                <Fade>
                    <div className="pt-24 sm:pt-32 px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex flex-col lg:flex-row gap-10 md:gap-6 lg:gap-10 sm:gap-16">
                                <div className="w-full lg:w-1/3 flex flex-col gap-10">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-gray-700 text-3xl">{props.title}</h3>
                                        <SocialIcons2 white />
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-cover bg-center" style={{paddingTop: '100%', backgroundImage: `url('${props.leftImg}')`}}></div>
                                    </div>
                                </div>
                                <div className="hidden md:block border-r border-gray-600 border-opacity-30"></div>
                                <div className="w-full lg:w-2/3 flex flex-col gap-10">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-gray-700 text-3xl">Artwork</h3>
                                        <div className="flex gap-4">
                                            <div className="h-10 w-8 flex items-center">
                                                <div className="bg-gray-700 w-full h-1"></div>
                                            </div>
                                            <div className="h-10 w-8 flex items-center">
                                                <div className="bg-gray-700 w-full h-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-full">
                                        <div className="h-full flex flex-col sm:flex-row gap-4">
                                            <div className="w-full md:w-1/2">
                                                <div style={{paddingTop: '100%'}} className="relative">
                                                    <div className="absolute top-0 left-0 h-full w-full bg-cover bg-center" style={{backgroundImage: `url('${props.img1}')`}}></div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <div style={{paddingTop: '100%'}} className="relative">
                                                    <div className="absolute top-0 left-0 h-full w-full bg-cover bg-center" style={{backgroundImage: `url('${props.img2}')`}}></div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
    )
}

export default SmallSlider;
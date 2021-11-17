import React from 'react';
import Fade from 'react-reveal/Fade';
import SocialIcons2 from '../social/social2';

const SmallSlider = (props) => {

    return (
            <div>
                <Fade>
                    <div className="pt-32">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 px-4 sm:px-0">
                                <div className="w-full sm:w-1/3 flex flex-col gap-10">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-gray-700 text-3xl">{props.title}</h3>
                                        <SocialIcons2 white />
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-cover bg-center" style={{paddingTop: '100%', backgroundImage: `url('${props.leftImg}')`}}></div>
                                    </div>
                                </div>
                                <div className="hidden sm:block border-r border-gray-600 border-opacity-30"></div>
                                <div className="w-full sm:w-2/3 flex flex-col gap-10">
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
                                        <div className="h-full flex gap-4">
                                            <div className="w-1/2 h-64 sm:h-full bg-cover bg-center" style={{backgroundImage: `url('${props.img1}')`}}></div>
                                            <div className="w-1/2 h-64 sm:h-full bg-cover bg-center" style={{backgroundImage: `url('${props.img2}')`}}></div>
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
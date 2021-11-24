import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player'

const VideoPlayer = () => {

    const volume = useRef(90);
    const playing = useRef(true);

    const [buffering, setBuffering] = useState(false);

    return (
        <div className="h-full">
                <div className="h-full flex items-center justify-center">
                    <div className="w-11/12 sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12" style={{maxHeight: '100vh'}}>
                        <div className="h-full w-full shadow-lg border border-black relative" style={{borderWidth: 7}}>
                            {/* <ReactPlayer
                                height="100%"
                                width="100%"
                                loop
                                playing={playing.current}
                                url={`${process.env.PUBLIC_URL}/assets/video/brands.mov`}
                                onBuffer={() => {setBuffering(true)}}
                                onBufferEnd={() => {setBuffering(false)}}
                            /> */}

                            <video width="100%" preload="auto" autoPlay muted loop>
                                <source src={`${process.env.PUBLIC_URL}/assets/video/brands.mp4`} type="video/mp4"/>
                            </video>
                            <div className="absolute top-0 left-0 h-full w-full">
                                {
                                    buffering &&
                                    <div className="h-full w-full flex items-center justify-center">
                                    <svg width="50" height="50" className="animate-spin" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.6667 20C36.6667 29.2047 29.2047 36.6667 20 36.6667C10.7952 36.6667 3.33333 29.2047 3.33333 20C3.33333 10.7952 10.7952 3.33333 20 3.33333C29.2047 3.33333 36.6667 10.7952 36.6667 20ZM6.66666 20C6.66666 27.3638 12.6362 33.3333 20 33.3333C27.3638 33.3333 33.3333 27.3638 33.3333 20C33.3333 12.6362 27.3638 6.66666 20 6.66666C12.6362 6.66666 6.66666 12.6362 6.66666 20Z" fill="#dddddd"/>
                                    <path d="M20 3.33333C22.1887 3.33333 24.356 3.76442 26.378 4.602C28.4001 5.43958 30.2375 6.66724 31.7851 8.21488C33.3327 9.76252 34.5604 11.5998 35.398 13.6219C36.2356 15.644 36.6667 17.8113 36.6667 20L33.3333 20C33.3333 18.249 32.9884 16.5152 32.3184 14.8975C31.6483 13.2799 30.6662 11.81 29.4281 10.5719C28.19 9.33379 26.7201 8.35166 25.1024 7.6816C23.4848 7.01154 21.7509 6.66666 20 6.66666L20 3.33333Z" fill="#000"/>
                                    </svg>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default VideoPlayer;
import React, { useRef } from 'react';
import ReactPlayer from 'react-player'

const VideoPlayer = () => {

    const volume = useRef(90);
    const playing = useRef(true);

    return (
        <div className="h-full">
                <div className="h-full flex items-center justify-center">
                    <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12" style={{maxHeight: '100vh'}}>
                        <div className="h-full w-full shadow-lg">
                            <ReactPlayer
                                height="100%"
                                width="100%"
                                loop
                                playing={playing.current}
                                url={`${process.env.PUBLIC_URL}/assets/video/promo.mp4`}
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default VideoPlayer;
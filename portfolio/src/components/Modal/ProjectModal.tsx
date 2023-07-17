import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import YouTube from 'react-youtube';

function ProjectModal({ title, content, videoUrl, onClose }: { videoUrl: string; title: string; content: string; onClose: () => void }) {
    const extractVideoId = (videoUrl: string) => {
        const regExp =
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\/\?v=|embed\/|v\/|youtu\.be\/|\/v\/|watch\?v=|ytscreeningroom\?v=|\/embed\/|watch\?v%3D|%2Fv%2F|e\/|embed\/|v=|v%3D|ytscreeningroom\?v%3D|watch\?v%3D|youtu\.be\/)([^#\&\?\n]+)/;
        const match = videoUrl.match(regExp);
        return match && match[1] ? match[1] : undefined;
    };
    const videoId = extractVideoId(videoUrl);

    const opts = {
        height: '390',
        width: '640',
    };
    return (
        <div className="fixed z-30 top-0 left-0 w-[100vw] h-[100vh] flex justify-center	items-center" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}>
            <div className="flex flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white items-center w-[80%] max-h-[70%] text-center rounded-[.4rem]">
                <AiOutlineClose onClick={onClose} />
                <div className="w-[100%] overflow-y-auto">
                    <p>{content}</p>
                    <p>{title}</p>
                    <YouTube videoId={videoId} opts={opts} />
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;

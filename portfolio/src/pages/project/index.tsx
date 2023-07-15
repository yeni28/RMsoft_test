import ProjectCard from '@/components/Card/ProjectCard';
import React from 'react';
import { useRouter } from 'next/router';

function index() {
    const router = useRouter();

    return (
        <div className="bg-black w-screen h-screen flex items-center justify-center relative">
            <img src="/image/background1.jpg" alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-90" />
            <div className="grid grid-cols-3 gap-[7rem] relative z-10">
                <ProjectCard
                    image="/image/pjt1.png"
                    title="씨유어게인"
                    role="프론트엔드"
                    contribution="30%"
                    people="FE(3) BE(3)"
                    duration="2023.04.10 ~ 2023.05.19"
                    onClick={() => {
                        router.push('/project/1');
                    }}
                />
                <ProjectCard
                    image="/image/pjt2.png"
                    title="팅크"
                    role="프론트엔드"
                    contribution="30%"
                    people="FE(3) BE(3)"
                    duration="2023.02.27 ~ 2023.04.07"
                    onClick={() => {
                        router.push('/project/1');
                    }}
                />
                <ProjectCard
                    image="/image/pjt3.png"
                    title="플랜토"
                    role="프론트엔드"
                    contribution="100%"
                    people="FE(1) BE(2) EMB(3)"
                    duration="2023.01.10 ~ 2023.02.16"
                    onClick={() => {
                        router.push('/project/1');
                    }}
                />
            </div>
        </div>
    );
}

export default index;

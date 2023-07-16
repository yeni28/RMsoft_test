import React from 'react';
import styles from './profile.module.css';

function page() {
    return (
        <div className="flex mx-[8rem] my-[8rem]">
            <img src="/image/background.jpg" alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-90" />
            <div
                className="relative z-10 bg-[#ffffff8f] p-8 rounded-3xl "
                style={{
                    // border: 'solid 2px white',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* content */}
                <div className="grid grid-cols-2 gap-10">
                    {/* left */}
                    <div className="grid grid-rows-3 gap-10">
                        {/*  */}
                        <div>
                            <p className={`${styles.semititle}`}>교육</p>
                            <p className={`${styles.element} font-NanumNeo text-[1.4rem] mt-3`}>삼성 청년 SW 아카데미 8기 수료</p>
                        </div>
                        {/*  */}
                        <div>
                            <p className={`${styles.semititle}`}>경력</p>
                            <div className="mt-3">
                                <div className="mb-3">
                                    <p className={`${styles.element} text-[1.4rem] font-NanumNeo`}>IT조선 편집기자 인턴</p>
                                    <p className="text-[1rem] font-NanumNeo ">웹 디자인 및 웹 기획</p>
                                </div>
                                <p className={`${styles.element} text-[1.4rem] font-NanumNeo`}>EBS 홍보부 계약직</p>
                                <p className="text-[1rem] font-NanumNeo ">사내/외 홍보 콘텐츠 기획 및 제작</p>
                            </div>
                        </div>
                        {/* 수상 */}
                        <div>
                            <p className={`${styles.semititle}`}>수상</p>
                            <p className={`${styles.element} mt-3 text-[1.4rem] font-NanumNeo`}>삼성 청년 SW 아카데미 자율 프로젝트 우수상</p>
                        </div>
                    </div>
                    {/* right */}
                    <div>
                        <p className={`${styles.semititle}`}> 프로그래밍 역량 </p>
                        <p className={`${styles.semititle}`}> 기타 사용 Tool </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;

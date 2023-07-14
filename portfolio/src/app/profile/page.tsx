import React from 'react'
import LegacyImage from 'next/legacy/image';
import styles from './profile.module.css';

function page() {
  return (
    <div className='flex mx-[8rem] my-[8rem]'>
      {/* photo */}
      <div className='mx-10'>
      <LegacyImage
                  src='/image/profile_yen.jpg'
                  width={300}
                  height={370}
                  alt='Pink'
                  style={{
                    borderRadius: '48%',
                  }}
              />
      </div>
      {/* content */}
      <div className='grid grid-cols-2 gap-10'>
        {/* left */}
        <div className='grid grid-rows-3 gap-10'>
          {/*  */}
          <div>
            <p className='font-NanumNeoEB text-[2rem]'>교육</p>
            <p className={`${styles.element} font-NanumNeo text-[1.4rem] mt-3`}>삼성 청년 SW 아카데미 8기 수료</p>
          </div>
          {/*  */}
          <div>
            <p className='font-NanumNeoEB text-[2rem]'>경력</p>
            <div className='mt-3'>
              <div className='mb-3'>
                <p className={`${styles.element} text-[1.4rem] font-NanumNeo`}>IT조선 편집기자 인턴</p>
                <p className='text-[1rem] font-NanumNeo '>웹 디자인 및 웹 기획</p>
              </div>
              <p className='text-[1.4rem] font-NanumNeo '>EBS 홍보부 계약직</p>
            </div>
          </div>
          {/* 수상 */}
          <div>
            <p className='font-NanumNeoEB text-[2rem]'>수상</p>
          </div>
        </div>
        {/* right */}
        <div>
            <p className='font-NanumNeoEB text-[2rem]'> 프로그래밍 역량 </p>
            <p className='font-NanumNeoEB text-[2rem]'> 기타 사용 Tool </p>
        </div>
      </div>
    </div>
  )
}

export default page
import { useMemo } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface sliderProps {
    /** 슬라이더 아이템 요소 */
    children: React.ReactNode;
    /** 커스텀 클래스 */
    className?: string;
    /** 자동재생 (속도 설정시 number 타입으로) */
    autoplay?: boolean | number;
    /** 슬라이더 속도 */
    speed?: number;
    /** 반복 여부 */
    loop?: boolean;
}

function Slick({ children, className, autoplay = true, speed = 300, loop = true }: sliderProps) {
    const settings = useMemo<Settings>(
        () => ({
            dots: true,
            infinite: loop,
            speed: speed,
            slidesToShow: 3,
            autoplay: Boolean(autoplay),
            autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
        }),
        [autoplay, loop, speed],
    );
    return (
        <div className={className}>
            <Slider {...settings}>{children}</Slider>
        </div>
    );
}

export default Slick;

import { useEffect, useState, useRef } from 'react';
import carousel from '../css/carousel.css';

function Carousel() {
    const [carouselItemNum, setCarouselItemNum] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        let myInterval = null;
        if (!isHover) {
            myInterval = setInterval(() => {
                setIsTransitioning(true);
                setCarouselItemNum(carouselItemNum + 1);
            }, 2500);
        }

        return () => {
            clearInterval(myInterval);
        };
    }, [carouselItemNum, isHover]);

    function handleHoverCarousel() {
        setIsHover(!isHover);
    }

    function handleClickLi(itemNum) {
        setIsTransitioning(true);
        setCarouselItemNum(itemNum);
    }

    function handleRightClick() {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCarouselItemNum(carouselItemNum + 1);
        }
    }
    function handleLeftClick() {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCarouselItemNum(carouselItemNum - 1);
        }
    }

    function handleTransitionEnd() {
        setIsTransitioning(false);
        if (carouselItemNum === 4) {
            setCarouselItemNum(1);
        }
        if (carouselItemNum === 0) {
            setCarouselItemNum(3);
        }
    }

    return (
        <>
            <h3>可以在carousel.css 關掉 .wrap 的 overflow: hidden;</h3>
            <div
                className="wrap"
                onMouseEnter={handleHoverCarousel}
                onMouseLeave={handleHoverCarousel}
            >
                <div
                    className={`carousel move-left${carouselItemNum} ${
                        isTransitioning ? 'transitioning' : ''
                    }`}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <div className="carousel-item">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/04/04/03/10/wooden-bench-7110299_1280.jpg"
                            alt=""
                        />
                        <h2>假3</h2>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/03/05/12/03/city-7049028_1280.jpg"
                            alt=""
                        />
                        <h2>真1</h2>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/04/03/04/46/temple-7108054_1280.jpg"
                            alt=""
                        />
                        <h2>真2</h2>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/04/04/03/10/wooden-bench-7110299_1280.jpg"
                            alt=""
                        />
                        <h2>真3</h2>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/03/05/12/03/city-7049028_1280.jpg"
                            alt=""
                        />
                        <h2>假1</h2>
                    </div>
                </div>

                <ul>
                    <li
                        className={
                            carouselItemNum === 1 || carouselItemNum === 4
                                ? 'active'
                                : ''
                        }
                        onClick={() => handleClickLi(1)}
                    ></li>
                    <li
                        className={carouselItemNum === 2 ? 'active' : ''}
                        onClick={() => handleClickLi(2)}
                    ></li>
                    <li
                        className={
                            carouselItemNum === 3 || carouselItemNum === 0
                                ? 'active'
                                : ''
                        }
                        onClick={() => handleClickLi(3)}
                    ></li>
                </ul>

                <button onClick={handleLeftClick}>L</button>
                <button onClick={handleRightClick}>R</button>
            </div>
        </>
    );
}

export default Carousel;

import React, { useState } from 'react';
import slide1 from '../../../assets/slider/slider1.png'; // with import
import slide2 from '../../../assets/slider/slider2.png'; // with import
import slide3 from '../../../assets/slider/slider3.png'; // with import
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="img"
                    src={slide1}
                    alt="First slide" />
                <Carousel.Caption>
                    <div className="slide-text">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img"
                    src={slide2}
                    alt="Second slide"/>

                <Carousel.Caption>
                    <div className="slide-text">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img"
                    src={slide3}
                    alt="Third slide"/>

                <Carousel.Caption>
                    <div className="slide-text">
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default Slider;
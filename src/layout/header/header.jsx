import React from 'react'
import NavBar from './navBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
    return (

        <div>
            <NavBar />
            <Carousel>
                <div>
                    <img src="../image/red.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../image/fast-and-forious.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../image/red-notice.webp" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="../image/jumanji.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="../image/wekand.webp" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Header










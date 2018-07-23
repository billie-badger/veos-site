import React, { Component } from 'react';

import BackgroundSlideshow from 'react-background-slideshow';


import image2 from '../assets/color-shirts.jpg';
import image3 from '../assets/color-shirts-2.jpg';
import image4 from '../assets/color-shirts-3.jpg';

class HeroImages extends Component {
    render() {
        return (
            <div className="heroimages">
                <BackgroundSlideshow images={[image2, image3, image4]}
                                     animationDelay={5000}
                                     disableClick={true}/>
            </div>
        );
    }
}

export default HeroImages;

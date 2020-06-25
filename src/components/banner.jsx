import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import './banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <Image src={require('../assets/img/banner-img.png')} width='100%' alt="Frijoles-logo"></Image>
            </div>
        )
    }
}

export default Banner;
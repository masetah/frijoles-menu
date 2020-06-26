import React, {Component} from 'react';
import HappyHour from './happy-hour';
import Beer from './beer';
import Margaritas from './margaritas';

class Cantina extends Component {
    render() {
        return (
            <div className="cantina-items">
                <HappyHour/>
                <Beer/>
                <Margaritas/>
            </div>
        )
    }
}

export default Cantina;
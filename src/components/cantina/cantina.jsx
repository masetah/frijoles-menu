import React, {Component} from 'react';
import HappyHour from './happy-hour';
import Beer from './beer';
import Margaritas from './margaritas';
import { Container } from 'semantic-ui-react';

class Cantina extends Component {
    render() {
        return (
            <div>
                <Container>
                    <HappyHour/>
                    <Beer/>
                    <Margaritas/>
                </Container>
            </div>
        )
    }
}

export default Cantina;
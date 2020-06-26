import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react';
import LunchApps from "./lunch-appetizers";
import LunchSpecials from "./lunch-specials";



class Lunch extends Component {
    render() {
        return(
            <div className="lunch_menu">
                <Container>
                    <Header align='center' size='tiny'>Available Monday - Saturday from 11am-4pm.</Header>
                    <LunchApps/>
                    <LunchSpecials/>
                </Container>
            </div>
        )
    }
}

export default Lunch;
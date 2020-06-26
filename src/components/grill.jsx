import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Grill extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Grill is 6
            if (menuItem.categoryId === 6) {
                return <Container key = {index}>
                    <Grid>
                <Grid.Row>
                  <Grid.Column width={13}>
                    <Header size='medium'>{menuItem.name}</Header>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header size='small'>{menuItem.price}</Header>
                  </Grid.Column>
                  <Grid.Column width={14}>
                  <span>{menuItem.description}</span>
                  </Grid.Column>
                </Grid.Row>
                </Grid>
                </Container>
            } else {
                return null
            }
        });
        return (
            <div className="grilled_items">
                <Container>
                    <Header align='center' size='tiny'>Grilled specialties come with your choice of beans (refried, charro or black) and Mexican rice. Garnished with pico de Gallo and fresh guacamole.</Header>
                </Container>
                {menuItems}
            </div>
        )
    }
}

export default Grill;
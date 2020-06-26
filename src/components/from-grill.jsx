import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class FromGrill extends Component {
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
                    <Header align='center' size='tiny'>From the Grill plates come with seasoned mixed veggies (Broccoli, carrots, and zucchini) and Mexican rice. Garnished with fresh guacamole.</Header>
                </Container>
                {menuItems}
            </div>
        )
    }
}

export default FromGrill;
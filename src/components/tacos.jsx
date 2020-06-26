import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Tacos extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for taco is 2
            if (menuItem.categoryId === 2) {
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
            <div className="taco_items">
                <Header align='center' size='tiny'>All taco plates come with your choice of beans (refried, charro or black) and spanish rice.</Header>
                {menuItems}
            </div>
        )
    }
}

export default Tacos;
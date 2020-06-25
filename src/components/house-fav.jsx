import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class HouseFav extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for HouseFav is 5
            if (menuItem.categoryId === 5) {
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
            <div className="house_favorite_items">
                {menuItems}
            </div>
        )
    }
}

export default HouseFav;
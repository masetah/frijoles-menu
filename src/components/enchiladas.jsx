import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Enchiladas extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for enchiladas is 3
            if (menuItem.categoryId === 3) {
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
            <div>
                <div style={{paddingBottom:'15px'}}>
                <Container>
                    <Header align='center' size='tiny'>Enchilada plates come with your choice of beans (refried, charro or black) and Mexican rice.</Header>
                </Container>
                </div>
                {menuItems}
            </div>
        )
    }
}

export default Enchiladas;
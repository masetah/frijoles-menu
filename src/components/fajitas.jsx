import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Fajitas extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for fajitas is 4
            if (menuItem.categoryId === 4) {
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
                <div style={{paddingBottom:'10px'}} align='center'>
                    <Container>
                        <Header align='center' size='tiny'>Fajita plates come with your choice of beans (refried, charro or black) and Mexican rice. Garnished with pico de gallo and guacamole. Served with flour and/or corn tortillas.</Header>
                    </Container>
                </div>
                {menuItems}
                <div style={{paddingTop:'15px'}} align='center'>
                    <b>Add shredded cheese and sour cream for 2.00.</b>
                </div>
                <div style={{paddingTop:'15px'}} align='center'>
                    <b>Add 4 jumbo shrimp for 7.50. </b>
                </div>
            </div>
        )
    }
}

export default Fajitas;
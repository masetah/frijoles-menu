import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('../../menu-items.json');

class LunchSpecials extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Lunch Specials is 11
            if (menuItem.categoryId === 11 && menuItem.price2) {
                return <Container key = {index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header size='small'>{menuItem.name}</Header>
                            </Grid.Column>
                            <Grid.Column width={4} align='right'>
                                <Header size='tiny'>{menuItem.price}</Header>
                            </Grid.Column>
                            <Grid.Column width={4} align='right'>
                                <Header size='tiny'>{menuItem.price2}</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <span>{menuItem.description}</span>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Container>
            }  if (menuItem.categoryId === 11 && !menuItem.price2) {
                return <Container key = {index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                <Header size='small'>{menuItem.name}</Header>
                            </Grid.Column>
                            <Grid.Column width={5} align='right'>
                                <Header size='tiny'>{menuItem.price}</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <span>{menuItem.description}</span>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <b>{menuItem.modifier}</b>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <b style={{float:'right'}}>{menuItem.modifier_price}</b>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Container>
            } else {
                return null
            }
        });
        return (
            <div className="lunch_special_items" >
                <Header size='medium'>Lunch Favorites</Header>
                {menuItems}
            </div>
        )
    }
}

export default LunchSpecials;
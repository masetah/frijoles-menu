import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Appetizers extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Appetizers is 0
            if (menuItem.categoryId === 0 && menuItem.price2) {
                return <Container key = {index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Header size='medium'>{menuItem.name}</Header>
                            </Grid.Column>
                            <Grid.Column width={5} align='right'>
                                <Header size='small'>{menuItem.price}</Header>
                            </Grid.Column>
                            <Grid.Column width={5} align='right'>
                                <Header size='small'>{menuItem.price2}</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <span>{menuItem.description}</span>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Container>
            }  if (menuItem.categoryId === 0 && !menuItem.price2) {
                return <Container key = {index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                <Header size='medium'>{menuItem.name}</Header>
                            </Grid.Column>
                            <Grid.Column width={5} align='right'>
                                <Header size='small'>{menuItem.price}</Header>
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
                            <Grid.Column width={12}>
                                <b>{menuItem.modifier2}</b>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <b style={{float:'right'}}>{menuItem.modifier_price2}</b>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <b>{menuItem.modifier3}</b>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <b style={{float:'right'}}>{menuItem.modifier_price3}</b>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Container>
            } else {
                return null
            }
        });
        return (
            <div className="appetizers">
                {menuItems}
            </div>
        )
    }
}

export default Appetizers;
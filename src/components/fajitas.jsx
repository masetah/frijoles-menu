import React, {Component} from 'react';
import { Header, Container, Item } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Fajitas extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for fajitas is 4
            if (menuItem.categoryId === 4) {
                return <Item key ={index}>
                <Item.Content>
                    <Item.Header>{menuItem.name}</Item.Header>
                    <Item.Description>{menuItem.description} {menuItem.price}</Item.Description>
                </Item.Content>
            </Item>
            } else {
                return null
            }
        });
        return (
            <div className="fajitas">
                <Container>
                <Header as='h2'>Fajitas</Header>
                <Item.Group divided = {true}>
                    {menuItems}
                </Item.Group>
                </Container>
            </div>
        )
    }
}

export default Fajitas;
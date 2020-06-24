import React, {Component} from 'react';
import { Header, Container, Item } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Drinks extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Drinks is 7
            if (menuItem.categoryId === 7) {
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
            <div className="drinks">
                <Container>
                <Header as='h2'>Drinks</Header>
                <Item.Group divided = {true}>
                    {menuItems}
                </Item.Group>
                </Container>
            </div>
        )
    }
}

export default Drinks;
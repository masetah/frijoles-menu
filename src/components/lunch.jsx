import React, {Component} from 'react';
import { Container, Item } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Lunch extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Lunch is 9
            if (menuItem.categoryId === 9) {
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
            <div className="lunch_items">
                <Container>
                <Item.Group divided = {true}>
                    {menuItems}
                </Item.Group>
                </Container>
            </div>
        )
    }
}

export default Lunch;
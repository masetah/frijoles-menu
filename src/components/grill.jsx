import React, {Component} from 'react';
import { Container, Item } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Grill extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Grill is 6
            if (menuItem.categoryId === 6) {
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
            <div className="grill_items">
                <Container>
                <Item.Group divided = {true}>
                    {menuItems}
                </Item.Group>
                </Container>
            </div>
        )
    }
}

export default Grill;
import React, {Component} from 'react';
import { Item, Container } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class SoupSalad extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Soup/Salad is 1
            if (menuItem.categoryId === 1) {
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
            <div className="soup_salads">
                <Container>
                    <Item.Group divided = {true}>
                        {menuItems}
                    </Item.Group>
                </Container>
            </div>
        )
    }
}

export default SoupSalad;
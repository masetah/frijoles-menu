import React, {Component} from 'react';
import { Header, Container, Item } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class HouseFav extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for HouseFav is 5
            if (menuItem.categoryId === 5) {
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
            <div className="house-favs">
                <Container>
                <Header as='h2'>House Favorites</Header>
                <Item.Group divided = {true}>
                    {menuItems}
                </Item.Group>
                </Container>
            </div>
        )
    }
}

export default HouseFav;
import React, {Component} from 'react';
import { Header, Container, Item } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class Desserts extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for Desserts is 8
            if (menuItem.categoryId === 8) {
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
            <div className="desserts">
                <Container>
                <Header as='h2'>Desserts</Header>
                <Item.Group divided = {true}>
                    {menuItems}
                </Item.Group>
                </Container>
            </div>
        )
    }
}


export default Desserts;
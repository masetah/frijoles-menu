import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import './footer.css';

class Nav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item header>Frijoles</Menu.Item>
                <Menu.Item
                name='aboutUs'
                active={activeItem === 'aboutUs'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='jobs'
                active={activeItem === 'jobs'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default Nav;
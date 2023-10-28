import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './footer.css';

class Nav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name, })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Link to='/'>
                <Menu.Item header>Home</Menu.Item>
                </Link>

                <Link to='/menu'>
                    <Menu.Item
                    name='Menu'
                    active={activeItem === 'menu'}
                    onClick={this.handleItemClick}
                    />
                </Link>

                {/* <Link to='/gallery'>
                    <Menu.Item
                    name='Gallery'
                    active={activeItem === 'gallery'}
                    onClick={this.handleItemClick}
                    />
                </Link>

                <Link to='/survey'>
                    <Menu.Item
                    name='Survey'
                    active={activeItem === 'survey'}
                    onClick={this.handleItemClick}
                    />
                </Link>

                <Link to='/contact'>
                    <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                    />
                </Link>

                <Link to='/covid'>
                    <Menu.Item
                    name='Covid-19'
                    active={activeItem === 'covid19'}
                    onClick={this.handleItemClick}
                    />
                </Link> */}
            </Menu>
        )
    }
}

export default Nav;
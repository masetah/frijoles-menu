import React, {Component} from 'react';
import { Grid, Menu, Icon } from 'semantic-ui-react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <Grid columns={1} textAlign='center' className="footer">
                 <Grid.Row>
                    <Grid.Column>
                    <Menu fluid vertical>
                        <Menu.Item className='header'>
                        <span><Icon name='copyright' /> Frijoles 2000-2020</span>
                        </Menu.Item>
                    </Menu>
                    </Grid.Column>
                 </Grid.Row>
            </Grid>
        )
    }
}

export default Footer;
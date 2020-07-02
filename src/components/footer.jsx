import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div style={{marginTop:'25px'}}>
                <Grid columns={1} textAlign='center' className="footer">
                    <Grid.Row>
                        <a href='https://www.masetaherian.com/' target='none'>Designed by: MaseTaherian.com</a>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Footer;
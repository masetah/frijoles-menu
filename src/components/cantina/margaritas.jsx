import React, {Component} from 'react';
import { Container, Grid, Header} from 'semantic-ui-react';

let cantinaJSON = require('../../cantina.json');

class Margaritas extends Component {
    render() {
        const cantinaItems = cantinaJSON.map((cantinaItem, index) => {
            // CategoryId for Margaritas is 2
            if (cantinaItem.categoryId === 2 && cantinaItem.price2) {
                return <Container key = {index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Header size='small'>{cantinaItem.name}</Header>
                            </Grid.Column>
                            <Grid.Column width={5} align='right'>
                                <Header size='tiny'>{cantinaItem.price}</Header>
                            </Grid.Column>
                            <Grid.Column width={5} align='right'>
                                <Header size='tiny'>{cantinaItem.price2}</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <span>{cantinaItem.description}</span>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Container>
            }  if (cantinaItem.categoryId === 2 && !cantinaItem.price2) {
                return <Container key = {index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                <Header size='small'>{cantinaItem.name}</Header>
                            </Grid.Column>
                            <Grid.Column width={5} align='right'>
                                <Header size='tiny'>{cantinaItem.price}</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <span>{cantinaItem.description}</span>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Container>
            } else {
                return null
            }
        });
        return (
            <div style={{paddingTop:'15px'}}>
                <Header size='large' align='center'>Margaritas</Header>
                {cantinaItems}
            </div>
        )
    }
}

export default Margaritas;
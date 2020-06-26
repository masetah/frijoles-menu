import React, {Component} from 'react';
import { Container, Grid, Header} from 'semantic-ui-react';

let cantinaJSON = require('../../cantina.json');

class Beer extends Component {
    render() {
        const cantinaItems = cantinaJSON.map((cantinaItem, index) => {
            // CategoryId for Beer is 0
            if (cantinaItem.categoryId === 0 && cantinaItem.price2) {
                return <Container key = {index}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header size='small'>{cantinaItem.name}</Header>
                            </Grid.Column>
                            <Grid.Column width={4} align='right'>
                                <Header size='tiny'>{cantinaItem.price}</Header>
                            </Grid.Column>
                            <Grid.Column width={4} align='right'>
                                <Header size='tiny'>{cantinaItem.price2}</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <span>{cantinaItem.description}</span>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Container>
            }  if (cantinaItem.categoryId === 0 && !cantinaItem.price2) {
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
            <div className="lunch_appetizer_items">
                <Header size='medium'>Beer</Header>
                {cantinaItems}
            </div>
        )
    }
}

export default Beer;
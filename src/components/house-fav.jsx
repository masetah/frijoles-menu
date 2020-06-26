import React, {Component} from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

let menuItemsJSON = require('./../menu-items.json');

class HouseFav extends Component {
    render() {
        const menuItems = menuItemsJSON.map((menuItem, index) => {
            // CategoryId for HouseFav is 5
            if (menuItem.categoryId === 5 && menuItem.price2) {
              return <Container key = {index}>
                  <Grid>
                      <Grid.Row>
                          <Grid.Column width={8}>
                              <Header size='medium'>{menuItem.name}</Header>
                          </Grid.Column>
                          <Grid.Column width={4} align='right'>
                              <Header size='tiny'>{menuItem.price}</Header>
                          </Grid.Column>
                          <Grid.Column width={4} align='right'>
                              <Header size='tiny'>{menuItem.price2}</Header>
                          </Grid.Column>
                          <Grid.Column width={16}>
                              <span>{menuItem.description}</span>
                          </Grid.Column>
                      </Grid.Row> 
                  </Grid>
              </Container>
          }  if (menuItem.categoryId === 5 && !menuItem.price2) {
              return <Container key = {index}>
                  <Grid>
                      <Grid.Row>
                          <Grid.Column width={11}>
                              <Header size='medium'>{menuItem.name}</Header>
                          </Grid.Column>
                          <Grid.Column width={5} align='right'>
                              <Header size='small'>{menuItem.price}</Header>
                          </Grid.Column>
                          <Grid.Column width={16}>
                              <span>{menuItem.description}</span>
                          </Grid.Column>
                      </Grid.Row> 
                  </Grid>
              </Container>
          } else {
              return null
          }
      });
        return (
            <div className="house_favorite_items">
                {menuItems}
            </div>
        )
    }
}

export default HouseFav;
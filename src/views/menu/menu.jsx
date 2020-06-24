import React, {Component} from 'react';
import {Header, Container, Accordion, Icon} from 'semantic-ui-react';
import Appetizers from "../../components/appetizers";
import SoupSalad from "../../components/soup-salad";
import Tacos from "../../components/tacos";
import Enchiladas from "../../components/enchiladas";
import Fajitas from "../../components/fajitas";
import HouseFav from "../../components/house-fav";
import Grill from "../../components/grill";
import Drinks from "../../components/drinks";
import Desserts from "../../components/dessert";
import Lunch from "../../components/lunch";
import Cantina from "../../components/cantina";
import AlaCart from "../../components/ala-cart";

export default class Menu extends Component {

    state = { activeIndex: null };

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }
    render(){

        const { activeIndex } = this.state

        return (
            <div className="menu">
                <Container>
                    <Accordion>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index ={0}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Appetizers
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <Appetizers/>
                            </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 1}
                            index ={1}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Soups and Salads
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <SoupSalad/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 2}
                            index ={2}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Tacos
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <Tacos/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 3}
                            index ={3}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Enchiladas
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <Enchiladas/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 4}
                            index ={4}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Fajitas
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <Fajitas/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 5}
                            index ={5}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                House Favorites
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 5}>
                                <HouseFav/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 6}
                            index ={6}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Grilled Specialties
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 6}>
                                <Grill/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 7}
                            index ={7}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Drinks
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 7}>
                                <Drinks/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 8}
                            index ={8}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Cantina
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 8}>
                                <Cantina/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 9}
                            index ={9}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Desserts
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 9}>
                                <Desserts/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 10}
                            index ={10}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Lunch
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 10}>
                                <Lunch/>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 11}
                            index ={11}
                            onClick= {this.handleClick}>
                                <Icon name='dropdown' />
                                Items A la Carte
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 11}>
                                <AlaCart/>
                            </Accordion.Content>
                    </Accordion>
                </Container>
            </div>
            
        );
    }
  }


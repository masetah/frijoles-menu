import React, {Component} from 'react';
import {Header, Accordion, Icon} from 'semantic-ui-react';
import Appetizers from "../../components/appetizers";
import SoupSalad from "../../components/soup-salad";
import Tacos from "../../components/tacos";
import Enchiladas from "../../components/enchiladas";
import Fajitas from "../../components/fajitas";
import HouseFav from "../../components/house-fav";
import Grill from "../../components/grill";
import FromGrill from "../../components/from-grill";
import Drinks from "../../components/drinks";
import Desserts from "../../components/dessert";
import Lunch from "../../components/lunch/lunch";
// import Cantina from "../../components/cantina/cantina";
import AlaCart from "../../components/ala-cart";
import Banner from "../../components/banner";
// import Footer from "../../components/footer";
// import Nav from "../../components/nav";

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
            <div style={{marginBottom:'75px'}}>
                {/* <Nav/> */}
                <Banner/>
                <div style={{paddingTop:'35px'}}>
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 7}
                        index ={7}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Drinks</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 7}>
                        <Drinks/>
                    </Accordion.Content>

                    {/* <Accordion.Title
                        active={activeIndex === 8}
                        index ={8}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Cantina</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 8}>
                        <Cantina/>
                    </Accordion.Content> */}

                    <Accordion.Title
                        active={activeIndex === 0}
                        index ={0}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Appetizers</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <Appetizers/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 1}
                        index ={1}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Soups and Salads</Header>  
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <SoupSalad/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 2}
                        index ={2}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Tacos</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <Tacos/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 3}
                        index ={3}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Enchiladas</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <Enchiladas/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 4}
                        index ={4}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Fajitas</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <Fajitas/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 5}
                        index ={5}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />House Favorites</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5}>
                        <HouseFav/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 6}
                        index ={6}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown'/>Grilled Specialties</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 6}>
                        <Grill/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 13}
                        index ={13}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown'/>From the Grill</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 13}>
                        <FromGrill/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 9}
                        index ={9}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Desserts</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 9}>
                        <Desserts/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 10}
                        index ={10}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />Lunch</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 10}>
                        <Lunch/>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 11}
                        index ={11}
                        onClick= {this.handleClick}>
                        <Header size='large'><Icon name='dropdown' />A la Carte</Header>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 11}>
                        <AlaCart/>
                    </Accordion.Content>
                </Accordion>
                {/* <Footer/> */}
                </div>
            </div> 
        );
    }
  }


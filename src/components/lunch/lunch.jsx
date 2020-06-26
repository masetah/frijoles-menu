import React, {Component} from 'react';
import LunchApps from "./lunch-appetizers";
import LunchSpecials from "./lunch-specials";



class Lunch extends Component {
    render() {
        return(
            <div className="lunch_menu">
                <LunchApps></LunchApps>
                <LunchSpecials></LunchSpecials>
            </div>
        )
    }
}

export default Lunch;
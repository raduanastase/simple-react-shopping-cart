import React, {Component} from 'react';
import inventory from './Inventory';
import ListOfItems from './components/ListOfItems.jsx';
import Basket from './components/Basket.jsx';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            apple: 0,
            orange: 0,
            banana: 0,
            papaya: 0
        };
    }

    onButtonClick(itemName, itemCount) {
        this.setState({[itemName.toLowerCase()]: itemCount});
    }

    render() {
        return (
            <div className="application">
                <ListOfItems list={inventory} itemsCounter={this.state} onButtonClick={this.onButtonClick.bind(this)}/>
                <Basket items={inventory} itemsCounter={this.state}/>
            </div>
        );
    }
}

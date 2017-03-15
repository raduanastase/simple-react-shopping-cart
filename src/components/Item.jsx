import React, {Component} from 'react';


export default class Item extends Component {
    constructor(props) {
        super();

        this.state = {itemCounter: props.itemCounter};
    }

    render() {
        return (
            <div className="item">
                <img className="image" src={`build/images/${this.props.name.toLowerCase()}.png`}/>
                <span className="name">{this.props.name}</span>
                <span className="price">{this.props.price} ct</span>
                <span className="counter">
                    <button className="plus" onClick={this.onPlusClick.bind(this)}>+</button>
                    <span className="counter">{this.state.itemCounter}</span>
                    <button className="minus" onClick={this.onMinusClick.bind(this)}>-</button>
                </span>
            </div>
        );
    }

    onPlusClick() {
        const newCounter = this.state.itemCounter + 1;

        this.setState({itemCounter: newCounter});
        this.props.onButtonClick(this.props.name, newCounter);
    }

    onMinusClick() {
        let newCounter = this.state.itemCounter - 1;

        newCounter = newCounter < 0 ? 0 : newCounter;

        this.setState({itemCounter: newCounter});
        this.props.onButtonClick(this.props.name, newCounter);
    }
}
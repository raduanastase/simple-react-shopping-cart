import React from 'react';
import Basket, {getPriceForItem, getTotal} from './Basket.jsx';
import {shallow} from 'enzyme';

describe('Basket', () => {
    const props = {
        items: [
            {name: 'Item1', price: 30},
            {name: 'Item2', price: 50},
            {name: 'Item3', price: 60, bundle: 3, bundlePrice: 120}
        ],
        itemsCounter: {
            item1: 0,
            item2: 1,
            item3: 4
        }
    };
    const basket = shallow(<Basket {...props}/>);

    it('should add a div with the class item for each item that has a counter higher than 0', () => {
       expect(basket.find('div.item')).toHaveLength(2);
    });

    describe('getPriceForItem()', () => {
        it('should get the right price for the amount bought and also according to bundle', () => {
           expect(getPriceForItem(props.items[0], props.itemsCounter.item1)).toEqual(0);
           expect(getPriceForItem(props.items[1], props.itemsCounter.item2)).toEqual(50);
           expect(getPriceForItem(props.items[2], props.itemsCounter.item3)).toEqual(180);
        });
    });

    describe('getTotal()', () => {
        it('should add all the prices and leave them in ct if they are below 100', () => {
            const items = [
                {name: 'Item1', price: 30},
                {name: 'Item2', price: 25}
            ];
            const itemsCounter = {
                item1: 2,
                item2: 1
            };

           expect(getTotal(items, itemsCounter)).toEqual('85 ct');
        });
        it('should add all the prices and convert them in $ if they are above 100', () => {
            const items = [
                {name: 'Item1', price: 30},
                {name: 'Item2', price: 25}
            ];
            const itemsCounter = {
                item1: 3,
                item2: 1
            };

           expect(getTotal(items, itemsCounter)).toEqual('1.15 $');
        });
    });
});
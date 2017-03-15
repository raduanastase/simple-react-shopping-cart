import React from 'react';
import Item from './Item.jsx';
import {shallow} from 'enzyme';

describe('Item', () => {
    const props = {
        name: 'test',
        price: 1,
        itemCounter: 0,
        onButtonClick: () => {}
    };
    const item = shallow(<Item {...props}/>);
    const instance = item.instance();

    describe('onPlusClick()', () => {
        it('should increment itemCounter with 1 and call onButtonClick', () => {
            const onButtonClick = jest.fn();

            item.setProps({onButtonClick});
            item.setState({itemCounter: 2});
            instance.onPlusClick();

            expect(item.state('itemCounter')).toEqual(3);
            expect(onButtonClick).toHaveBeenCalledTimes(1);
        });
    });

    describe('onMinusClick()', () => {
        it('should decrement itemCounter with 1 and call onButtonClick', () => {
            const onButtonClick = jest.fn();

            item.setProps({onButtonClick});
            item.setState({itemCounter: 2});
            instance.onMinusClick();

            expect(item.state('itemCounter')).toEqual(1);
            expect(onButtonClick).toHaveBeenCalledTimes(1);
        });
        it('should stop decrementing when reaching 0', () => {
            item.setState({itemCounter: 1});
            instance.onMinusClick();
            instance.onMinusClick();
            instance.onMinusClick();
            instance.onMinusClick();

            expect(item.state('itemCounter')).toEqual(0);
        });
    });
});
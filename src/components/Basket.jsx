import React, {Component} from 'react';

export const getTotal = (items, itemsCounter) => {
    let total = 0;

    items.forEach((item) => {
        total += getPriceForItem(item, itemsCounter[item.name.toLowerCase()]);
    });

    return total >= 100 ? `${total / 100} $` : `${total} ct`;
};

export const getPriceForItem = (item, itemCounter) => {
    let price = 0;

    if (item.bundle && itemCounter >= item.bundle) {
        price += item.bundlePrice * parseInt(itemCounter / item.bundle) + item.price * (itemCounter % item.bundle);
    } else {
        price += item.price * itemCounter;
    }

    return price;
};

const Basket = (props) => {
    return (
        <div className="basket">
            {props.items.map((item) =>
                props.itemsCounter[item.name.toLowerCase()] > 0 ? (
                    <div key={item.name} className="item">
                        {item.name} × {props.itemsCounter[item.name.toLowerCase()]}
                    </div>
                ) : (
                    null
                )
            )}
            <div className="total">Total: {getTotal(props.items, props.itemsCounter)}</div>
        </div>
    );
};

export default Basket;
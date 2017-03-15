import React from 'react';
import Item from './Item.jsx';

const ListOfItems = (props) => {
    return (
        <div className="list-of-items">
            {props.list.map((item) =>
                <Item key={item.name} {...item} onButtonClick={props.onButtonClick} itemCounter={props.itemsCounter[item.name.toLowerCase()]}/>
            )}
        </div>
    );
};

export default ListOfItems;
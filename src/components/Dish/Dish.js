import React from 'react';
import './Dish.css';

const Dish = props => {
    return (
        <div className="card">
            <figure className="snip1171">
                <img src={props.data.img} height="220px" width="320px" alt={props.dish}/>
                <div className="price">{props.data.price}</div>
                <figcaption>
                    <h3>{props.name}</h3>
                    <p>{props.data.description}</p>
                    <a href={props.dish} onClick={props.click} name={props.name} title={props.data.price}>Add to Cart</a>
                </figcaption>
            </figure>
        </div>
    )
};

export default Dish;
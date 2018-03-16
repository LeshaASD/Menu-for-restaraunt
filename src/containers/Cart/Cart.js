import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Cart.css';
import Button from "../../components/UI/Button/Button";
import {deleteDish, placeOrder} from "../../store/actions/cart";

class Cart extends Component {
    render() {
        return (
            <div className="whole">
                <div className="type">
                    <p>Order cart</p>
                </div>
                <div className="plan">
                    <div className="header">
                        <span>{this.props.total}<sup>KGS</sup></span>
                    </div>
                    <div className="content">
                        <ul>
                            {Object.keys(this.props.dishes).map(dish =>
                                this.props.dishes[dish] > 0 ?
                                <li key={dish}>{dish}
                                <Button name={dish} key={dish} click={(event) => this.props.deleteDish(event.target.name)}/>
                                <span className='dish-count'>X {this.props.dishes[dish]}</span>
                                </li> : null
                            )}
                        </ul>
                    </div>
                    <div className="price">
                        <a href="#" className="bottom" style={this.props.total === 0 ? {'display': 'none'} : null}
                        onClick={this.props.onOrderNowClick}>
                            <p className="cart">Order Now</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        total: state.cart.totalPrice,
        dishes: state.cart.dishes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteDish: (name) => dispatch(deleteDish(name)),
        onOrderNowClick: () => dispatch(placeOrder())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
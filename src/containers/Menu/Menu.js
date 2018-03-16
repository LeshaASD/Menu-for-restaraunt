import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Menu.css';
import {requestDishes} from "../../store/actions/menu";
import Dish from "../../components/Dish/Dish";
import {addDish} from "../../store/actions/cart";
import Spinner from "../../components/UI/Spinner/Spinner";


class Menu extends Component {
    componentDidMount() {
        this.props.requestDishes()
    }

    render() {
        return (
            <div className='menu'>
                <h1>Menu</h1>
                {this.props.loading ? <Spinner/>
                : <div className="row">
                        {Object.keys(this.props.dishes).map(dish => <Dish name={dish}
                                                                          data={this.props.dishes[dish]} key={dish} click={(event) => this.props.addDish(event)}/>)}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dishes: state.menu.dishes,
        loading: state.menu.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        requestDishes: () => dispatch(requestDishes()),
        addDish: (name) => dispatch(addDish(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
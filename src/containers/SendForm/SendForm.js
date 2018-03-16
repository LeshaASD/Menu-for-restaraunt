import React, {Component} from 'react';
import {connect} from 'react-redux';

import './SendForm.css';
import Form from "../../components/UI/Form/Form";
import {closeForm, requestCartOrder} from "../../store/actions/cart";


const mapStateToProps = state => {
    return {
        order: state.cart.dishes,
        price: state.cart.totalPrice,
        show: state.cart.formShow
    }
};

const mapDispatchToProps = dispatch => {
    return {
        cartOrderSend: (event, order, price, contacts) => dispatch(requestCartOrder(event, order, price, contacts)),
        closeForm: () => dispatch(closeForm())
    }
};

class SendForm extends Component {

    state = {
        contacts: {
            name: '',
            email: '',
            comment: ''
        }
    };

    nameInputHandler = event => {
        const state = {...this.state};
        const contacts = {...this.state.contacts};
        contacts.name = event.target.value;
        state.contacts = contacts;
        this.setState(state);
    };

    emailInputHandler = event => {
        const state = {...this.state};
        const contacts = {...this.state.contacts};
        contacts.email = event.target.value;
        state.contacts = contacts;
        this.setState(state);
    };

    commentInputHandler = event => {
        const state = {...this.state};
        const contacts = {...this.state.contacts};
        contacts.comment = event.target.value;
        state.contacts = contacts;
        this.setState(state);
    };

    closeForm = () => {
        this.setState({
            contacts: {
                name: '',
                email: '',
                comment: ''
            },
            visible: false
        })
    };

    render() {
        return (
            <Form change={event => this.nameInputHandler(event)} change1={event => this.emailInputHandler(event)}
            change2={event => this.commentInputHandler(event)} close={this.props.closeForm}
            visible={this.props.show} price={this.props.price} contacts={this.state.contacts}
            click={(event) => this.props.cartOrderSend(event, this.props.order, this.props.price,
                this.state.contacts ? this.state.contacts : null)}
            enable={(this.state.contacts.name.length === 0) || (this.state.contacts.email.length === 0)}/>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SendForm);
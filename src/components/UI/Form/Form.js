import React from 'react';
import './Form.css';

const Form = props => {
    return (
        props.visible ?
        <div className='form-contact'>
            <div id="form-main">
                <div id="form-div">
                    <button className='close-contact-form' onClick={props.close}>Close</button>
                    <form className="form" id="form1">
                        <p className="name">
                            <input name="name" type="text" onChange={props.change} className="validate[required,custom[onlyLetter],
                            length[0,100]] feedback-input" placeholder="Name" id="name" />
                        </p>
                        <p className="email">
                            <input name="email" type="text" onChange={props.change1} className="validate[required,custom[email]]
                            feedback-input" id="email" placeholder="Email" />
                        </p>
                        <p className="text">
                            <textarea name="text" onChange={props.change2} className="validate[required,length[6,300]]
                            feedback-input" id="comment" placeholder="Comment"></textarea>
                        </p>
                        <button disabled={props.enable} className='main-btn-send' onClick={props.click}>send</button>
                    </form>
                </div>
            </div>
        </div>

            : null
    )
};

export default Form;

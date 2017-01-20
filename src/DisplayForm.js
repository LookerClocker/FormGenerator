import React from 'react';
import Label from './Label';
import Input from './Input';
import Checkbox from './Checkbox';

const DisplayForm = (props) => {
    const formItem = props.data.map((item, index) => {
        if (item.type === "label") {
            return (
                <Label
                    key={index}
                    text={item.value}
                />
            )
        } else if (item.type === "input") {
            return (
                <Input
                    key={index}
                    text={item.value}
                />
            )
        } else if (item.type === "checkbox") {
            return (
                <Checkbox
                    key={index}
                    text={item.value}
                />
            )
        } else if (item.type === "button") {
            return (
                <button
                    key={index}
                    type="submit"
                    className="btn submit-btn"
                >
                    {item.value}
                </button>
            )
        }
    });
    return (
        <div>
            <span className="display-title">Your created form will look like below:</span>
            <form className="display-forms-elements">
                {formItem}
            </form>
        </div>

    )
};

export default DisplayForm;
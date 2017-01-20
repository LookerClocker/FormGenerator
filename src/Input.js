import React from "react";

const Input = ({text}) => {
    return (
        <div>
            <input
                className="form__input"
                placeholder={text}
            />
        </div>
    )
};

export default Input;
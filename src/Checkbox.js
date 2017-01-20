import React from "react";

const Checkbox = ({text}) => {
    return (
        <div>
            <label className="form__label">{text}</label>
            <input
                type="checkbox"
            />
        </div>
    )
};

export default Checkbox;
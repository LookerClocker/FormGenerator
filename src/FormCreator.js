import React from 'react';
import FormComponents from './FormComponents'

const FormCreator = (props) => {
    const readyForm = props.predefinedForm.map( (item, index) => {
        return (
            <FormComponents
                key={index}
                fields={item}
            />
        )
    });
    return (
        <div>
            {readyForm}
        </div>
    )
};

export default FormCreator;
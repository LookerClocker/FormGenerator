import React, {Component} from 'react';
import DisplayForm from './DisplayForm'

export default class FormRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
    }

    updateValue = (value, index) => {
        this.props.changeFormsItemValue(value, index);
    };

    display = ()=> {
        this.setState({
            showForm: true
        });
    };

    render() {
        const item = this.props.elements.map((item, index) => {
            return (
                <div
                    key={index}>
                    <label className="form__label">{item.type} text: </label>
                    <input onBlur={event => this.updateValue(event.target.value, index)} placeholder=""/>
                </div>
            );
        });
        if (item.length > 0) {
            return (
                <div className="element-intend">
                    <div className="element-intend__item">{item}</div>
                    <a
                        id="hiddenLink"
                        onClick={this.props.saveJsonFile}
                        className="btn"
                    >
                        Save
                    </a>
                    <a
                        id="hiddenLink2"
                        onClick={this.display}
                        className="btn"
                    >
                        Create
                    </a>
                    <div>
                        {this.state.showForm ? <DisplayForm data={this.props.elements}/> : ''}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}
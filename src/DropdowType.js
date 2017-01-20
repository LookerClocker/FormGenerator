import React, {Component} from 'react';

export default class DropdowType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        };
    }

    addElement = ()=> {
        if (this.state.selected) {
            this.props.newElement(this.state.selected);
        }
    };

    setStateToSelected = (value)=> {
        this.setState(
            {selected: value}
        );
    };


    render() {
        const item = this.props.formTypes.map((item, index) => {
            return (
                <option
                    key={index}
                    value={item.type}
                >
                    {item.type}
                </option>
            )
        });

        return (
            <section className="selection">
                <select
                    onChange={event => this.setStateToSelected(event.target.value)}
                >
                    <option
                        default
                        hidden
                    >
                        Choose element
                    </option>
                    {item}
                </select>
                <button
                    className="btn"
                    onClick={this.addElement}
                >
                    Add
                </button>
            </section>
        )

    }
}

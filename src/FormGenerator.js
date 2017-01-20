import React, {Component} from 'react';
import DropdownType from './DropdowType';
import FormRender from './FormRender';
import FormCreator from './FormCreator'

export default class FormGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            predefinedFormsData: [],
            formItems: [],
            formTypes: [
                {
                    type: "label"
                },
                {
                    type: "input"
                },
                {
                    type: "checkbox"
                },
            ],
            startFormingForm: false
        }
    }

    /**
     * adding new element to form
     * @param type
     */
    addNewElement = (type)=> {
        this.setState({
            formItems: this.state.formItems.concat({type: type, value: ''})
        });
    };

    /**
     * changing specific elements value
     * @param value
     * @param index
     */
    changeFormsItemValue = (value, index)=> {
        this.state.formItems[index].value = value;
        this.setState({
            formItems: this.state.formItems
        });
    };

    /**
     * saving data to json file
     * @param text
     */
    saveJsonFile = text => {
        var a = document.getElementById("hiddenLink");
        this.state.formItems.push({type: "button", value: "Submit"});
        var json = JSON.stringify(this.state.formItems);
        var file = new Blob([json], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = "result.json";
        this.setState({
            formItems: [],
            startFormingForm: false
        });
    };

    /**
     * reading json file with form
     * @param input
     */
    readFile = input=> {
        var fr = new FileReader();
        fr.onload = (event) => {
            var obj = JSON.parse(event.target.result);
            this.setState({
                predefinedFormsData: this.state.predefinedFormsData.concat([obj])
            });
            input.value = "";
        };
        fr.readAsText(input.files[0]);
    };

    /**
     * make generation flag 'true' to change render method
     */
    startGenerateForm = ()=> {
        this.setState({
            startFormingForm: true
        });
    };

    createPredefinedForm = ()=> {
        var loginForm = [
            {
                type: "label",
                value: "Login:"
            },
            {
                type: "input",
                value: "Enter your login"
            },
            {
                type: "label",
                value: "Password:"
            },
            {
                type: "input",
                value: "Enter your password"
            },
            {
                type: "button",
                value: "Submit"
            }];
        this.setState({
            predefinedFormsData: this.state.predefinedFormsData.concat([loginForm])
        });
    };


    render() {
        if (this.state.startFormingForm) {
            return (
                <div className="new-form-section">
                    <DropdownType
                        formTypes={this.state.formTypes}
                        newElement={this.addNewElement}
                    />
                    <FormRender
                        elements={this.state.formItems}
                        changeFormsItemValue={this.changeFormsItemValue}
                        saveJsonFile={this.saveJsonFile}
                    />
                </div>
            )
        }

        return (
            <div>
                <div className="generate-form-block">
                    <button
                        className="btn generate-form-block__login"
                        onClick={this.createPredefinedForm}
                    >
                        Create Pre-defined Form
                    </button>
                    <button
                        className="btn generate-form-block__new-form"
                        onClick={this.startGenerateForm}
                    >
                        Generate New Form
                    </button>
                </div>
                <div className="create-form-block">
                    <h2 className="create-form-block__top">Download form from JSON file: </h2>
                    <span className="upload-block">
                        Add
                        <input
                            type="file"
                            onChange={ event => this.readFile(event.target) }
                        />
                    </span>
                </div>
                <FormCreator
                    predefinedForm={this.state.predefinedFormsData}
                />
            </div>
        )
    }
}

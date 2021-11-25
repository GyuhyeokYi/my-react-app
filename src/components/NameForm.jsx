import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSumit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefalut();
    }

    render() {
        return (
            <form onSubmit={this.handleSumit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit" value="Submit">Submit</button>
            </form>
        )
    }
}

export default NameForm;
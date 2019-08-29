import React from 'react';
class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick the Product code:
            <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Stationary">Stationary</option>
                        <option value="Travel">Travel</option>
                        <option value="Accomodation">Accomodation</option>
                        <option value="Food">Food</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default SelectForm;
import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput(e) {
        this.props.onSearchKeyWordChange(e.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <input placeholder="Search..." onChange={this.handleChangeInput} />
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Only show products in stock</label>
                </div>
            </div>
        );
    }
}

export default SearchBar;
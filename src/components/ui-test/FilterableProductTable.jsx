import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyWordChange = this.handleKeyWordChange.bind(this);
        this.state = {keyWord: ''};
    }

    handleKeyWordChange(keyWord) {
        this.setState({keyWord: keyWord});
        // alert(this.state.keyWord);
    }

    render() {
        const keyWord = this.state.keyWord;
        return (
            <div>
                <SearchBar
                    onSearchKeyWordChange={this.handleKeyWordChange}/>
                <ProductTable  
                    keyWord={keyWord}/>
            </div>
        );
    }
}

export default FilterableProductTable;
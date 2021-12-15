import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import styles from './styles.module.css';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyWordChange = this.handleKeyWordChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.state = {keyWord: '', isOnlyShow: false};
    }

    handleKeyWordChange(keyWord) {
        this.setState({keyWord: keyWord});
    }
    
    handleCheckBoxChange(isOnlyShow) {
        this.setState({isOnlyShow: isOnlyShow})
    }

    render() {
        const keyWord = this.state.keyWord;
        const isOnlyShow = this.state.isOnlyShow;
        const PRODUCT = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
        return (
            <div className={styles.mainBody}>
                <SearchBar
                    onSearchKeyWordChange={this.handleKeyWordChange}
                    onCheckBoxChange={this.handleCheckBoxChange}/>
                <ProductTable  
                    product={PRODUCT}
                    keyWord={keyWord}
                    isOnlyShow={isOnlyShow}/>
            </div>
        );
    }
}

export default FilterableProductTable;
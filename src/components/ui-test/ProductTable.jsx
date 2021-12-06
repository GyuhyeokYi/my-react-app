import React from "react";

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const keyWord = this.props.keyWord;
        const product = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ];

        const productTable = product.map((goods, index) => {
            return (
                <tr key={index}>
                    <td>{goods.name}</td>
                    <td>{goods.price}</td>
                </tr>
            );
        });

        return (
            <div>
                <div>Search word: {keyWord}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {productTable}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;
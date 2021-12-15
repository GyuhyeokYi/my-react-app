import React from "react";

function ProductCategoryRow(props) {
    return (
        <tr>
            <td colSpan={"2"}>{props.category}</td>
        </tr>
    );
}

function ProductRow(props) {
    const product = props.goods;
    const name = product.stocked ? 
        product.name :
        <span style={{color: 'red'}}>{product.name}</span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchGoods = this.handleSearchGoods.bind(this);
    }

    handleSearchGoods(keyWord) {
        
    }

    render() {
        const keyWord = this.props.keyWord;
        const product = this.props.product;
        const isOnlyShow = this.props.isOnlyShow;
        let lastCategory = null;
        /*
        const productTable2 = product.map((goods, index) => {
            return (
                // <tr key={index}>
                //     <td>{goods.name}</td>
                //     <td>{goods.price}</td>
                // </tr>
                <ProductRow key={index}
                    name={goods.name}
                    price={goods.price}
                    />
            );
        });
        */

        const productTable = [];
        product.forEach((goods) => {
            if (goods.name.includes(keyWord) || !isOnlyShow) {
                if (goods.category !== lastCategory) {
                    productTable.push(
                        <ProductCategoryRow key={goods.category}
                            category={goods.category}/>
                    );
                    lastCategory = goods.category;
                }        
                productTable.push(
                    <ProductRow key={goods.category + ':' + goods.name}
                        goods={goods}
                        />
                );
            }
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
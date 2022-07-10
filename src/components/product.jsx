import React from "react";
import './styles/product.css';

export default function Product(props) {

    return (
        <div className="product">
            <div className="productImage" style={{backgroundImage: `url(${props.image})`}}>
                <div className={(props.stock !== 'instock') ? 'stock' : null}>{ (props.stock !== 'instock') ? 'OUT OF STOCK' : null }</div>
            </div>
            <div className="onProductCategoryName">{props.categoryName}</div>
            <div className="productName">{props.name}</div>
            <div className="productRating">{props.rating} / 5</div>
            <div className="productPrice">{props.price} €</div>
        </div>
    )
}
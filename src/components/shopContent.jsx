import React, { useState, useEffect } from "react";
import Product from "./product";
import './styles/productsContainer.css';
import api from "../api/get-products";

export default function ShopContent() {

    const [products, setProducts] = useState(0);

    useEffect(() => {
        async function fetchData() {
            await api.get('products?category=50')
                .then((res) => setProducts(res.data.reverse()))
        }
        fetchData()
    }, [])

    function renderProducts(data) {
        return(
            Object.values(data).map((calendar) => (
                <Product 
                    image={calendar.images[0].src} 
                    categoryName={calendar.shipping_class} 
                    name={calendar.name} 
                    rating={calendar.average_rating} 
                    price={calendar.regular_price}
                    stock={calendar.stock_status} 
                />
            ))
        )
    }

    if(!products) {
        return(
            <div className="productsContainer">
                loading...
            </div>
        )
    } 

    return (
        <div className="productsContainer">
            {
                renderProducts(products)
            }
        </div>
    )    
}
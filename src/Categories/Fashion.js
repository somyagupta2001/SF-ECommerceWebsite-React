import React from 'react';
import data from './Data/Fashion-data.json';
import ProductCard from './ProductCard';

const Fashion = (props) => {
    return ( 
        <div>
            <h1 style={{color: "#917164", fontSize: "10rem", textAlign: "center"}}>Fashion</h1>
            <div className="products" style={{display: "flex", flexWrap: "wrap"}}>
                {
                    data.products.map(product => <ProductCard key={product.id}product={product} addHandler={props.handlers[0]} increaseHandler={props.handlers[1]} decreaseHandler={props.handlers[2]} returnCount={props.handlers[3]} />)
                }
            </div>
        </div>
     );
}
 
export default Fashion;
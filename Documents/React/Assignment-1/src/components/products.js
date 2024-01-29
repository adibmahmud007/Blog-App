import React from "react";
import Products from "./product"

function SProducts({products}){
    return(
        <div className="products">
            {products.map((product)=>
                <Product key={product.id} product={product}/>
                )}
        </div>
    )

}
export default SProducts
import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const param = useParams();
    const {name} = param;
    return(
        <div>{name}</div>
    )
}

export default Product;
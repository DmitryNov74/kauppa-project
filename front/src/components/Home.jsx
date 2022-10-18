

import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const Home = () => {
    const {products} = data;
    return(
        <div className="prods">
            {
                products.map((item) => (
                    <div className="prod" key={item.name}>
                        <Link to={`/product/${item.name}`}>
                        <img src={item.image}></img>
                        </Link>
                        <h5>{item.brand}</h5>
                       <p>{item.name}</p>
                       <div className="hinta">
                            <h6><strong>{item.price}€</strong></h6>
                        </div> 
                    </div>
                    
                ))
            }

        </div>
    )
}

export default Home;
import React from 'react'
import Rating from './Rating';

export default function Product(props){
    const {prod} = props;
    return (
        <div>
            <div key={prod._id} className="card">
                <a href={`/product/${prod._id}`}>
                    <img className="medium" src={prod.image} alt={prod.name}/>
                </a>
                <div className="card-body">
                    <a href={`/product/${prod._id}`}>
                        <h2>{prod.name}</h2>
                    </a>
                    <Rating rating={prod.rating} reviewNum = {prod.reviewNum}></Rating>
                    <div className="price">
                        ${prod.price}
                    </div>
                </div>
            </div>     
        </div>
    );
}
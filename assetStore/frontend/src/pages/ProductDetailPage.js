import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductDetailPage(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    if(!product){
        return <div> <span>404</span> <span>Product Not Found</span></div>;
    }
    return (
    <div><span>Product's Detail Page</span>
        <p><Link to="/">Back</Link></p>
        <div className="row top">
            <div className="col-2">
                <img class="detailImage" src={product.image} alt={product.name}></img>
                {/* <VideoJS video={product.video} poster={product.image}></VideoJS> */}
                <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    autoPlay="true"
                    width="auto"
                    height="600"
                    loop="true"
                    poster={product.image}
                    data-setup="{}"
                    className="videoPlayer">
                    <source src={product.video} type="video/mp4" />
                    <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                </video>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating
                            rating={product.rating}
                            reviewNum={product.reviewNum}></Rating>
                    </li>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Description: <p>{product.description}</p>
                    </li>
                    <li>
                        Type: {product.type}
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">
                                    ${product.price}
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add To Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}
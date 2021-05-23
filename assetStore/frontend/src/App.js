import React from 'react'
import data from './data';

function App() {
  return (
    <div className="grid-containter">
            <header className="row">
                <div>
                    <a className="brand" href="/">AssetStore</a>
                </div>
                <div>
                    <a href="/shopping_cart">Cart</a>
                    <a href="/sign_in">Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                  {
                    data.products.map((products) => (
                     <div key={products._id} className="card">
                        <a href={`/product/${products._id}`}>
                            <img className="medium" src={products.image} alt={products.name}/>
                        </a>
                        <div className="card-body">
                            <a href={`/product/${products._id}`}>
                              <h2>{products.name}</h2>
                            </a>
                            <div className="rating">
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa fa-star-half-o"></i>
                                </span>
                            </div>
                            <div className="price">
                                ${products.price}
                            </div>
                        </div>
                    </div>     
                    ))
                  }
                    
                </div>

            </main>
            <footer className="row center">
                All Rights Reserved
            </footer>
        </div>
  );
}

export default App;

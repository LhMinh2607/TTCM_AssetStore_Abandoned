import React from 'react'
import Product from './components/Product';
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
                    data.products.map((prod) => (
                     <Product key={prod._id} prod = {prod}>
                         
                     </Product>
                     
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

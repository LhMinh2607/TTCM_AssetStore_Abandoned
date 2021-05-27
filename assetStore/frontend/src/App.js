import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
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
              <Route path="/product/:id" component={ProductDetailPage}></Route>
              <Route path="/" component={HomePage} exact></Route>
                

            </main>
            <footer className="row center">
                All Rights Reserved
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;

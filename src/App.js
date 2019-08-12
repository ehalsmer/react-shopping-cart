import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	const removeItem = id => {
		console.log('Removing item with ID:', id)
		// filter here returns a new array of cartItems not equal to item (by comparing ids)
		setCart(cart.filter(cartItem => cartItem.id !== id))
	}

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
				<div className="App">
					<Navigation />
		
					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}/>
		
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import CartMenu from "./components/CartMenu";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="products/:productId"
					element={<ProductDetails />}
				/>
				<Route path="checkout" element={<Checkout />} />
				<Route path="checkout/success" element={<Confirmation />} />
			</Routes>
			<CartMenu />
		</React.Fragment>
	);
};

export default App;

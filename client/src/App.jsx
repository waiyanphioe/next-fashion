import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/home/Home";
import ItemDetails from "./screens/itemDetails/itemDetails";

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
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/item/:itemId" element={<ItemDetails />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;

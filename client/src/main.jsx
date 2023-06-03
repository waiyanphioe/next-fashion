import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./utils/theme.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./screens/productDetails/productDetails.jsx";
import Home from "./screens/home/Home.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <div>Error</div>,
	},
	{
		path: "products/:productId",
		element: <ProductDetails />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);

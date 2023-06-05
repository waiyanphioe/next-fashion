import React from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography, Button, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../utils/theme";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ item, width }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [count, setCount] = React.useState(1);
	const [isHovered, setIsHovered] = React.useState(false);
	const {
		palette: { neutral },
	} = useTheme();

	// const { category, price, name, image } = item.attributes;

	// const {
	// 	data: {
	// 		attributes: {
	// 			formats: {
	// 				medium: { url },
	// 			},
	// 		},
	// 	},
	// } = image;

	return (
		<Box width={width}>
			<Box
				sx={{ position: "relative" }}
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<img
					src={item.image}
					alt={item.name}
					width={"100%"}
					height={"100%"}
					onClick={() => navigate(`/product/${item.id}`)}
					style={{ cursor: "pointer" }}
				/>
				<Box
					display={isHovered ? "block" : "none"}
					sx={{
						position: "absolute",
						bottom: "10%",
						left: 0,
						width: "100%",
						padding: "0 5%",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								backgroundColor: shades.neutral[100],
								borderRadius: "3px",
							}}
						>
							<IconButton
								onClick={() => setCount(Math.max(count - 1, 1))}
							>
								<RemoveIcon />
							</IconButton>
							<Typography color={shades.primary[300]}>
								{count}
							</Typography>
							<IconButton onClick={() => setCount(count + 1)}>
								<AddIcon />
							</IconButton>
						</Box>

						<Button
							onClick={() =>
								dispatch(
									addToCart({ item: { ...item, count } })
								)
							}
							sx={{
								backgroundColor: shades.primary[300],
								color: "white",
							}}
						>
							Add to Cart
						</Button>
					</Box>
				</Box>
			</Box>

			<Box mt={"3px"}>
				<Typography variant="subtitle2" color={neutral.dark}>
					{item.category
						.replace(/([A-Z])/g, "$1")
						.replace(/^./, (str) => str.toUpperCase())}
				</Typography>
				<Typography>{item.name}</Typography>
				<Typography fontWeight={"bold"}>$ {item.price}</Typography>
			</Box>
		</Box>
	);
};

export default Product;

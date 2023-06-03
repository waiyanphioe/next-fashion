import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
	PersonOutline,
	ShoppingCartOutlined,
	MenuOutlined,
	SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../utils/theme";
import { setIsCartOpen } from "../redux/cartSlice";

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { cart } = useSelector((state) => state.cart);

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				width: "100%",
				height: "60px",
				backgroundColor: "rgba(255,255,255,0.95)",
				color: "black",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 1,
			}}
		>
			<Box
				sx={{
					width: "80%",
					margin: "auto",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Box
					onClick={() => navigate("/")}
					sx={{ cursor: "pointer", color: "black" }}
				>
					<h2>NEXT</h2>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						columnGap: "20px",
						zIndex: 2,
					}}
				>
					<IconButton sx={{ color: "black" }}>
						<SearchOutlined />
					</IconButton>
					<IconButton sx={{ color: "black" }}>
						<PersonOutline />
					</IconButton>
					<Badge
						badgeContent={cart.length}
						color="secondary"
						sx={{
							"& .MuiBadge-badge": {
								right: -3,
								top: 3,
								padding: "0 4px",
							},
						}}
					>
						<IconButton
							onClick={() => {
								dispatch(setIsCartOpen(true));
							}}
							sx={{ color: "black" }}
						>
							<ShoppingCartOutlined />
						</IconButton>
					</Badge>

					<IconButton sx={{ color: "black" }}>
						<MenuOutlined />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;

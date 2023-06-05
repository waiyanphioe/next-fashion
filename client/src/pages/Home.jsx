// import React from "react";
import Product from "../components/Product";
// import MainCarousel from "../components/MainCarousel";

const data = {
	id: 2,
	name: "White Sweater TShirt",
	shortDescription:
		"Donec sollicitudin molestie malesuada. Vivamus suscipit.",
	longDescription:
		"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\n",
	price: 15,
	category: "topRated",
	createdAt: "2022-10-17T17:17:21.884Z",
	updatedAt: "2022-10-17T17:17:23.404Z",
	publishedAt: "2022-10-17T17:17:23.402Z",
	image: "https://assets.vogue.in/photos/5fe1eeca3d9c144d784175c7/2:3/w_2560%2Cc_limit/Fashion%2520Diva%2520Dhawan.jpg",
	createdBy: null,
	updatedBy: null,
};

const Home = () => {
	return (
		<div>
			{/* <MainCarousel /> */}
			<Product item={data} width={"250px"} />
		</div>
	);
};

export default Home;

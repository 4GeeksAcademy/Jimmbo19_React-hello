import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Reloj from "./num";
//create your first component
function Home() {
	return (
		<>
			<div className="text-center">
			
				<Reloj initialSeconds={0}></Reloj>
				<i className="fa-regular fa-clock"></i>
			</div>

		</>
	);
}

export default Home;

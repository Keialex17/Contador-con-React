import React, {Fragment} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter, one, two, three, four, five, six }) => {

	return (
		<Fragment>
		<div className="container d-flex align-self-center">
		<div className="row">
		<div className="col-12 d-flex flex-row-reverse">
		<script src="https://kit.fontawesome.com/cda3887f65.js" crossorigin="anonymous"></script>
			<div className="p-5 display-l bg-dark text-white border border-white fs-1"> <div><i className="far fa-clock"></i></div> </div>
			<div className="p-5 display-l bg-dark text-white border border-white fs-1">{one % 10}</div>
			<div className="p-5 display-l bg-dark text-white border border-white fs-1">{Math.floor (two % 10)}</div>
			<div className="p-5 display-l bg-dark text-white border border-white fs-1">{Math.floor (three % 10)}</div>
			<div className="p-5 display-l bg-dark text-white border border-white fs-1">{Math.floor (four % 10)}</div>
			<div className="p-5 display-l bg-dark text-white border border-white fs-1">{Math.floor (five % 10)}</div>
			<div className="p-5 display-l bg-dark text-white border border-white fs-1">{Math.floor (six % 10)}</div>
		</div>
		</div>
		</div>
		</Fragment>
	);
};

export default Home;

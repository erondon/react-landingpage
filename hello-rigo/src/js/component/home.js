import React, { Fragment } from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

export function Home(props) {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</Fragment>
	);
}

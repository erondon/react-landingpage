import React, { Fragment } from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";
import * as data from "../data";

export function Home(props) {
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-md-12 offset-md-1">
						<Jumbotron />

						<Cards />
						<Cards />
						<Cards />
						<Cards />

						<Footer />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

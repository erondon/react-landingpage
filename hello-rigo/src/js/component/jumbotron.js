import React from "react";
import * as data from "../data";

export function Jumbotron(props) {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{data.jumbotron.titulo}</h1>
				<p className="lead">{data.jumbotron.description}</p>
				<a
					href={data.jumbotron.link.url}
					className="btn btn-primary btn-lg">
					{data.jumbotron.link.label}
				</a>
			</div>
		</div>
	);
}

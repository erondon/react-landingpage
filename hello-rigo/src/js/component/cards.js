import React from "react";
import * as data from "../data";

export function Cards(props) {
	return (
		<div classNameName="card h-100">
			<img className="card-img-top" src={data.cards.img} alt="" />
			<div className="card-body">
				<h4 className="card-title">{data.cards.title}</h4>
				<p className="card-text">{data.cards.description}</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					{data.cards.button}
				</a>
			</div>
		</div>
	);
}

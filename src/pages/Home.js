import Features from "components/Features";
import Blog from "components/Blog";
import Header from "components/Header";
import React from "react";

export default function Home() {
	return (
		<div>
			<div className="mx-auto">
				<Header />
			</div>
			<div className="w-full" />
			<Features />
			<Blog />
		</div>
	);
}

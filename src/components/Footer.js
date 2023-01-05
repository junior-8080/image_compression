import logo from "assets/img/logo.png";
import { Link } from "react-router-dom";

const navigation = {
	social: [
		{
			name: "Privacy Notice",
			href: "/privacy-policy",
		},
		{
			name: "Imprint",
			href: "#",
		},
		{
			name: "Terms and Conditions",
			href: "#",
		},
		{
			name: "Contact Us",
			href: "#",
		},
	],
};

export default function Footer() {
	return (
		<footer className="bg-indigo-900" aria-labelledby="footer-heading">
			<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="lg:flex lg:items-center lg:justify-between xl:mt-0">
					<div>
						<img className="h-5 w-auto sm:h-5" src={logo} alt="office3.net" />
					</div>
					<div className="flex space-x-6 md:order-2">
						{navigation.social.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className="text-white text-sm hover:text-gray-300"
							>
								<span className="">{item.name}</span>
							</Link>
						))}
					</div>
				</div>
				<div className="mt-6 border-t border-gray-500 pt-8 md:flex md:items-center md:justify-between">
					<p className="mt-8 text-sm text-white md:order-1 md:mt-0">
						&copy; {new Date().getFullYear()} office3.net
					</p>
				</div>
			</div>
		</footer>
	);
}

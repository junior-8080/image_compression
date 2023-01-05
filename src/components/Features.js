import cloud from "assets/img/cloud.svg";
import secure from "assets/img/secure.svg";
import docs from "assets/img/docs.svg";
import Icon from "./Icon";

const features = [
	{
		name: "Comprehensive functionality bundle",
		description:
			"All variety of conversion and efficiency features around all relevant document formats",
		icon: <Icon img={docs} alt="files" className="w-1/3" />,
	},
	{
		name: "All in the cloud - no need for installation",
		description:
			"Everything available via website and therefore no tedious installation or update routines",
		icon: <Icon img={cloud} alt="cloud" className="w-1/3" />,
	},
	{
		name: "100% secure and safe",
		description:
			"GDPR compliant solution, hosted on servers in the EU. Private intranet hosting for companies on request",
		icon: <Icon img={secure} alt="secure" className="w-1/3" />,
	},
];

export default function Features() {
	return (
		<div className="py-20 sm:py-24 lg:py-32 mt-10">
			<div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
				<div>
					{features.map((feature, i) => (
						<div
							key={feature.name}
							className={`flex mb-14 ${
								i % 2 === 0 ? "flex-row-reverse" : "flex-row"
							}`}
						>
							<div className="flex basis-1/2 items-center justify-center m-auto -rotate-12 overflow-hidden">
								{feature.icon}
							</div>
							<div className="w-full flex flex-col justify-center basis-1/2 text-center">
								<p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 justify-center text-center p-feature">
									{feature.name}
								</p>
								<dd className="mt-2 text-base leading-7 dd-feature">
									{feature.description}
								</dd>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

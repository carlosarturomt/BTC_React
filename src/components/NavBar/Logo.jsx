import React from "react";

function Logo({image, logo, classLogo}) {
	return (
		<a
			href="/"
			className="flex items-baseline title-font font-medium items-center text-gray-900 md:mb-0 lg:order-none"
		>
			<svg x="0px" y="0px" width="27px" height="27px" viewBox="0 0 90 90">
				<image id="image0" width="90" height="90" x="0" y="0" href={image}/>
			</svg>
			<span
                className={classLogo + ' ml-1 text-5xl font-semibold leading-3'} >
				{logo}
			</span>
		</a>
	);
}

export { Logo };

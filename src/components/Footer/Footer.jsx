import React from "react";
import btcLogo from "../../assets/icons/logo_btc-9ca3af.svg";
import { UlList } from "./UlList";
import { Logo } from "../NavBar/Logo";

function Footer() {
	// const year = document.getElementById('current-year')
	// year.innerHTML = new Date().getFullYear();

	return (
		<footer className="border-t border-gray-400 py-8 px-8 lg:px-40" >
			<section className="flex flex-wrap items-center justify-between">
				<Logo
                    image={btcLogo}
                    classLogo='text-gray-400'
                    logo="btc"
                />

				<aside className="flex flex-wrap">
					<UlList is
						classN="md:border-none"
						section="Company"
						liOne="About us"
						liTwo="Legal"
						liThree="Career"
						liFour="Contact"
					/>
					<UlList
						section="Services"
						liOne="Pricing"
						liTwo="Products"
						liThree="Customers"
						liFour="Success Stories"
					/>
					<UlList
						section="Support"
						liOne="About us"
						liTwo="Legal"
						liThree="Career"
						liFour="More"
					/>
				</aside>
			</section>
			<section className="flex items-center flex-start text-gray-50">
				<p>
					© Business Travel Consulting <span id="current-year"></span> - All
					rights reserved · Privacy Policy
				</p>
			</section>

			<style>
				{`
                    aside ul li a {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    aside ul li a::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    aside ul li a::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					aside ul li a:hover::after {
                        width: 100%;
                    }

                    aside ul li a:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    aside ul li a::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`}
			</style>
		</footer>
	);
}

export { Footer };

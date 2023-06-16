import React from "react";
import { TemplateLogged } from "../templates/TemplateLogged";

function About() {
	return (
		<>
			<TemplateLogged
				content={
					<div className="text-gray-200 py-4 md:px-28 lg:px-56">
						<h1 className="py-4 text-6xl font-semibold text-border-style text-center px-2 md:text-8xl">
							About Us
						</h1>
						<p className="pb-4 px-6 text-justify md:pb-8">
							Lorem Ipsum es simplemente el texto de relleno de las imprentas y
							archivos de texto. Lorem Ipsum ha sido el texto de relleno
							estándar de las industrias desde el año 1500, cuando un impresor
							(N. del T. persona que se dedica a la imprenta) desconocido usó
							una galería de textos y los mezcló de tal manera que logró hacer
							un libro de textos especimen. No sólo sobrevivió 500 años, sino
							que tambien ingresó como texto de relleno en documentos
							electrónicos, quedando esencialmente igual al original. Fue
							popularizado en los 60s con la creación de las hojas "Letraset",
							las cuales contenian pasajes de Lorem Ipsum, y más recientemente
							con software de autoedición, como por ejemplo Aldus PageMaker, el
							cual incluye versiones de Lorem Ipsum.
						</p>
						<aside className="flex flex-wrap px-6 pb-28 text-justify md:flex-nowrap">
							<p className="pb-4 md:pb-8 md:pr-6">
								Lorem Ipsum es simplemente el texto de relleno de las imprentas
								y archivos de texto. Lorem Ipsum ha sido el texto de relleno
								estándar de las industrias desde el año 1500, cuando un impresor
								(N. del T. persona que se dedica a la imprenta) desconocido usó
								una galería de textos y los mezcló de tal manera que logró hacer
								un libro de textos especimen.
							</p>
							<p className="pb-4 md:pb-8 md:pl-6">
								Lorem Ipsum es simplemente el texto de relleno de las imprentas
								y archivos de texto. Lorem Ipsum ha sido el texto de relleno
								estándar de las industrias desde el año 1500, cuando un impresor
								(N. del T. persona que se dedica a la imprenta) desconocido usó
								una galería de textos y los mezcló de tal manera que logró hacer
								un libro de textos especimen.
							</p>
						</aside>
					</div>
				}
			/>
		</>
	);
}

export { About };

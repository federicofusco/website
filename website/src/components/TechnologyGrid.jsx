/**
 * Displays a grid of tools/technologies each with their own icon
 * 
 * @param {Array} data - An array of objects which contain the name and data URI of a technology 
 * @example <TechnologyGrid data={[{ name: "Example", icon: "data:......" }]} />
 */
export default function TechnologiesGrid ({ data }) {

	const list = data.map ( ( technology ) =>
		(
			<div key={ technology.name } className="relative rounded-xl h-40 bg-white dark:bg-zinc-900">
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
					<img className="m-auto" src={ technology.icon } />
					<p className="mt-2 text-center font-semibold text-background-dark dark:text-white">{ technology.name }</p>	
				</div>
			</div>
		)
	);

	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 my-4">
			{ list }
		</div>
	)
}
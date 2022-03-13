import { Code, VariableButton } from "./CustomInputs"
import { Link } from "react-router-dom"

/**
 * Displays a menu with links to other pages.
 * This will be updated with it's own state and will accept links as props 
 * in a future commit
 * 
 * @param {Boolean} menuVisible - Whether or no the menu is visible, this should be a compoment's state
 * @param {Function} toggleMenu - The function which should toggle the menu's visibility, this function is called
 * 								  when the user clicks the VariableButton 
 */
export default function Menu ({ menuVisible, toggleMenu }) {

	return (
		<div>
			<div className={`z-40 top-0 left-0 transition-opacity duration-200 absolute bg-neutral-900 w-screen h-screen ${ menuVisible ? "opacity-75" : "hidden" }`}></div>
			<div className={`px-10 py-12 z-50 w-screen sm:w-5/6 md:w-1/2 h-screen fixed top-0 right-0 ${ menuVisible ? "translate-x-0" : "translate-x-full" } transition-transform duration-200 transform bg-background-dark`}>
				
				<VariableButton name="menuVisible" value="true" onButtonClick={ toggleMenu } />
				<p className="my-10 text-white">Thanks for checking out the site. It's currently under development with many updates coming soon, but I hope you've enjoyed it so far.</p>
				
				<Code text="const menu = [" />
				<Link to="/" >
					<h2 className="text-semibold text-xl my-2 ml-8 text-white">Home,</h2>
				</Link>
				<Code text="];" />
				
				<div className="w-full h-1/2 relative">
					<div className="absolute bottom-0 h-24 w-full">
						<p className="mb-3 text-emerald-500 text-xl font-semibold">✔ Website</p>
						<Code text={`Code compiled successfully at ${ new Date().toString () }`} />
					</div>
				</div>
			</div>
		</div>
	)

}
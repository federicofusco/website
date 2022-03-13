import React, { useState, useRef} from 'react'
import { VariableInput, FunctionButton } from '../components/CustomInputs'
import Navbar from './../components/Navbar'
import Code from '../components/Code'
import TechnologyGrid from '../components/TechnologyCard'
import Menu from '../components/Menu'

export default function App () {

	const defaultAdjective = "awesome";
	const adjectiveRef = useRef ();
	const [adjective, setAdjective] = useState ( defaultAdjective );

	const [menuVisible, setMenuVisibility] = useState ( false );
	const toggleMenu = () => {
		setMenuVisibility ( !menuVisible );
	} 

	return (
		<div className="overflow-x-hidden">

			<Menu menuVisible={ menuVisible } toggleMenu={ toggleMenu } />
			
			<Navbar  menuToggle={ <FunctionButton name="toggleMenu" onButtonClick={ toggleMenu }/> } />

			{/* Title */}
			<div ref={ adjectiveRef } className="mt-32 w-full px-4 md:px-12 pt-12">
				<Code text="hello()" />
				<VariableInput parent={ adjectiveRef } name="adjective" value={ defaultAdjective } updateValue={ setAdjective } />

				<h1 className="max-w-4xl mt-6 font-black text-5xl md:text-7xl text-white">
					Creating <span className="font-black text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-fuchsia-700">{ adjective }</span> websites and apps.
				</h1>
			</div>

			{/* Technologies */}
			<div className="w-full px-4 md:px-12 py-20">
				<h2 className="text-white text-xl font-medium mb-12">Utilizing an ever-growing list of technologies and tools.</h2>
				<Code text="const frequent_tech = [" />

				<TechnologyGrid data={[
					{
						name: "React",
						icon: "/src/assets/images/react.svg"
					},
					{
						name: "Firebase",
						icon: "/src/assets/images/firebase.svg"
					},
					{
						name: "MongoDB",
						icon: "/src/assets/images/mongodb.svg"
					},
					{
						name: "Tailwind",
						icon: "/src/assets/images/tailwind.svg"
					},
					{
						name: "Git",
						icon: "/src/assets/images/git.svg"
					},
					{
						name: "NodeJS",
						icon: "/src/assets/images/nodejs.svg"
					},
					{
						name: "Python",
						icon: "/src/assets/images/python.svg"
					},
					{
						name: "PHP",
						icon: "/src/assets/images/php.svg"
					}
				]} />

				<Code text="];" />
			</div>

		</div>
	)

}
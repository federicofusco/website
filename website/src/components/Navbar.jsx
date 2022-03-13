import React, { useState } from 'react'
import Logo from './Logo'
import { VariableButton, FunctionButton } from './CustomInputs';
import Menu from './Menu'

/**
 * Displays a fixed navbar
 */
export default function Navbar () {

	const [menuVisible, setMenuVisibility] = useState ( false );
	const toggleMenu = () => {
		setMenuVisibility ( !menuVisible );
	} 

	const toggleDarkMode = () => {
		document.getElementById ( "root" ).classList.toggle ( "dark" );
	}

	return (
		<div className="z-10 bg-background-light dark:bg-background-dark fixed top-0 left-0 w-screen py-8 px-6 sm:px-12 flex">
			
			<Menu menuVisible={ menuVisible } toggleMenu={ toggleMenu } toggleDarkMode={ toggleDarkMode } />

			<Logo />
			
			<div className="flex justify-between ml-auto">
				<div className="hidden h-full sm:flex mr-8">
					<VariableButton name="const theme" value={["THEMES.dark", "THEMES.light"]} onButtonClick={ toggleDarkMode } />
				</div>
				<FunctionButton name="toggleMenu" onButtonClick={ toggleMenu }/>
			</div>
		</div>
	);
}
import React, { useState, useRef, useEffect } from 'react'

/**
 * Displays text in a gray text, should be used to represent code, 
 * such as "const menu = [" in the website menu
 * 
 * @param {String} text - The text which should be displayed
 */
function Code ({ text }) {
	return <span className="text-zinc-500">{ text }</span>
}

/**
 * Displays a button as a function call with optional parameters
 * 
 * @param {String} name - The name of the function
 * @param {Array} parameters - The function's parameters, these are only for decoration
 * @param {Function} onButtonClick - The function which should be called when the button is clicked 
 */
function FunctionButton ({ name, parameters, onButtonClick }) {
	return (
		<button className="bg-transparent hover:bg-neutral-900 px-1" onClick={ onButtonClick }>
			<Code text={ name } />
			<span className=" font-bold text-md text-emerald-500">({ parameters && parameters.map ( parameter => <span key={ parameter } className=" font-bold text-white">{ parameter } </span> ) })</span>
		</button>
	)
}

/**
 * Displays a text input as a variable declaration 
 * 
 * @param {String} name - The name of the variable
 * @param {?String} defaultValue - The default value of the input
 * @param {Function} onChange - The function which should be called when the input's value changes
 * @param {ref} parent - A reference to the input's parent, this is used to calculate the input's maximum length
 */
function VariableInput ({ name, defaultValue, onChange, parent }) {

	const [content, setContent] = useState ( defaultValue );
	const [width, setWidth] = useState ( 0 );
	const spanRef = useRef();

	// Called every time the content is updated
	useEffect ( () => {

		// Sets the input width based on the width of the parent and the content
		var spanWidth = spanRef.current.innerText.length < 5 ? 5 * 9.8 : spanRef.current.innerText.length * 9.8;
		var parentWidth = parent.current.offsetWidth;
		var inputWidth = ( spanWidth > parentWidth / 3 ) ? parentWidth - parentWidth / 3 : spanWidth;
		setWidth ( inputWidth );
	}, [content]);

	// Called every time the input box is updated
	const changeHandler = event => {

		// Limits the input's content length to a third of the parent's width
		if ( event.target.value.length > ( parent.current.offsetWidth / 3 ) / 9.8 ) {
			event.target.value = content;
			return;
		}

		setContent ( event.target.value );
		onChange ( event.target.value );
	};

	return (
		<div className="flex justify-start">
			<Code text={ `let ${ name } = "` } />
			<span className="hidden" ref={ spanRef }>{ content }</span>
			<input style={{ width }} className="overflow-hidden bg-transparent text-zinc-500  outline-none focus:bg-zinc-900" defaultValue={ defaultValue } onChange={ changeHandler } />
			<Code text='";' />
		</div>
	);
}

/**
 * Displays a button as a variable declaration. The button is only clicked
 * when the user clicks the variable's value, not when the variable 
 * declaration itself is called
 * 
 * @param {String} name - The name of the variable
 * @param {String} value - The default value fo the varible
 * @param {Function} onButtonClick - The function which should be called when the variable's value is clicked 
 */
function VariableButton ({ name, value, onButtonClick }) {

	const toggleValue = () => {
		onButtonClick ();
	}

	return (
		<div>
			<Code text={ `${ name } = ` } />
			<button className="bg-transparent hover:bg-neutral-900" onClick={ toggleValue }>
				<span className="font-medium text-md text-zinc-500">{ value }</span>
			</button>
		</div>
	)
}

export { Code, FunctionButton, VariableInput, VariableButton };
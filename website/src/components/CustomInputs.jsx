import React, { useState, useRef, useEffect } from 'react'
import Code from './Code';

function FunctionButton ({ name, parameters, onButtonClick }) {
	return (
		<button className="bg-transparent hover:bg-neutral-900 px-1" onClick={ onButtonClick }>
			<span className=" text-md text-zinc-500">{ name }</span>
			<span className=" font-bold text-md text-emerald-500">({ parameters && parameters.map ( parameter => <span key={ parameter } className=" font-bold text-white">{ parameter } </span> ) })</span>
		</button>
	)
}

function VariableInput ({ name, value, updateValue, parent }) {

	const [content, setContent] = useState ( value );
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
		updateValue ( event.target.value );
	};

	return (
		<div className="flex justify-start">
			<p className="text-md text-zinc-500">{ `let ${ name } = "` }</p>
			<span className="hidden" ref={ spanRef }>{ content }</span>
			<input style={{ width }} className="overflow-hidden bg-transparent text-zinc-500  outline-none focus:bg-zinc-900" defaultValue={ value } onChange={ changeHandler } />
			<p className=" text-md text-zinc-500">";</p>
		</div>
	);
}

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

export { FunctionButton, VariableInput, VariableButton };
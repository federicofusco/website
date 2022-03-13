import Logo from './Logo'

export default function Navbar ({ menuToggle }) {
	return (
		<div className="z-10 bg-background-dark fixed top-0 left-0 w-screen py-8 px-12 flex justify-between">
			<Logo />
			<div className="table-cell">{ menuToggle }</div>
		</div>
	);
}
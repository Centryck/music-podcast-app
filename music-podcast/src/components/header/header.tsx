import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
	isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({isLoading}) => {

	return (
		<div>
			<Link to="/">Podcaster</Link>
		</div>
	)
}

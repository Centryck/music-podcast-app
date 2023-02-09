import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../badge';
import "./headerStyles.css";

export interface HeaderProps {
	isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({isLoading}) => {

	return (
		<div className="headerContainer">
			<Link to="/" className="headerTitle">Podcaster</Link>

			{isLoading && <Badge className='loadingBadge'/>}
		</div>
	)
}

export default Header;
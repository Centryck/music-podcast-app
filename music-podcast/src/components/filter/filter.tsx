import React from 'react';
import Badge from '../badge';
import "./filterStyles.css";

interface FilterComponentProps {
	podcastNumber?: string;
	onChange: (filterText: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ podcastNumber = "0", onChange }) => {

	return (
		<div className="filterContainer">
			<Badge value={podcastNumber} className="podcastNumBadge"/>
			<input
				type="text"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
				placeholder="Filter podcasts..."
				className='filterInput'
			/>
		</div>
	)
} 

export default FilterComponent;
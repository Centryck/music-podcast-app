import React from "react";
import cn from 'classnames';

export interface BadgeProps {
	className?: string;
	value?: string;
}

const Badge: React.FC<BadgeProps> = ({
	className = "",
	value
}) => {

	const classNames = cn(
		"Badge",
		className.split(" "),
	);

	return (
		<div className={classNames} data-testid="badge">
			{value}
		</div>
	)
}

export default Badge;
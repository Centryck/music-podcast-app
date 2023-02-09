import React from "react";
import cn from 'classnames';
import "./badgeStyles.css";

export interface BadgeProps {
	className?: string;
	value?: string;
}

const Badge: React.FC<BadgeProps> = ({
	className = "",
	value = ""
}) => {

	const classNames = cn(
		"Badge",
		className.split(" "),
	);

	return (
		<div className={classNames} data-testid="badge">
			<p>{value}</p>
		</div>
	)
}

export default Badge;
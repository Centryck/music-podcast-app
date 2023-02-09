import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge, { BadgeProps } from "./";

const CLASS_NAME = 'fakeClassName';
const VALUE = "100";

const renderElement = (props?: Partial<BadgeProps>) => {
	const utils = render(<Badge {...props} />);

	const query = {
		badge: () => screen.queryByTestId("badge")
	};

	return {
		...utils,
		query
	}
} 

describe("Badge", () => {
	it("should render default badge", () => {
		const {query} = renderElement();

		expect(query.badge()).not.toBeNull();
		expect(query.badge()).toHaveClass("Badge");

	});

	it("should render badge with custom props", () => {
		const {query} = renderElement({className: CLASS_NAME, value: VALUE});

		expect(query.badge()).toHaveClass("Badge fakeClassName");
		expect(query.badge()).toHaveTextContent("100");
	})
})
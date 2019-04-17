import React from 'react';
import renderer from 'react-test-renderer';

import TelecastItem from './index';

describe('TelecastItem', () => {

	it('render correctly', () => {
		const TelecastItemComponent = renderer.create(
			<TelecastItem
				title="Title"
				time="11:00"
				type="isOver"
			/>
		).toJSON();
		expect(TelecastItemComponent).toMatchSnapshot();
	});
});
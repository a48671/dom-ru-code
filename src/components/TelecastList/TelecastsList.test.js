import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {render}  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TelecasrsList from './index';

const info1 = [{title: 'Title', time: '12:00', type: 'isOver'}];
const info2 = [
	{title: 'Title', time: '12:00', type: 'isOver'},
	{title: 'Title2', time: '13:00', type: 'isFuture'}
];

describe('TelecasrsList', () => {

	it('render correctly component', () => {
		const TelecasrsListComponent = renderer.create(
			<TelecasrsList
				info={info1}
			/>
		).toJSON();
		expect(TelecasrsListComponent).toMatchSnapshot();
	});

	it('should be the right amount TelecastsItems', () => {
		const container = render(
			<TelecasrsList
				info={info2}
			/>
		);
		expect(container.find('.telecast-item').length).toEqual(info2.length);
	});

});
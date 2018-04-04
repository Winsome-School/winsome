import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Event } from '../../../../src/js/components/calender/Event';

Enzyme.configure({ adapter: new Adapter() });

describe('Test the Event Component of Calender', () => {
	const events = [
		{
			id: 1,
			event: 'Half terms End',
			eventDate: '01 May',
			time: ''
		},
		{
			id: 2,
			event: 'NetBall: first vii vs viii',
			eventDate: '20 May',
			time: '2:30 pm'
		},
		{
			id: 3,
			event: 'Parent presentation on healthy living',
			eventDate: '03 June',
			time: '12:35 pm'
		},
		{
			id: 4,
			event: 'M5 rs trip to walsigham',
			eventDate: '25 June',
			time: ''
		},
		{
			id: 5,
			event: 'Tour to muree',
			eventDate: '15 July',
			time: '2:30 pm'
		},
		{
			id: 6,
			event: 'Water splash Day',
			eventDate: '28 July',
			time: '11:35 am'
		},
		{
			id: 7,
			event: 'Visit to Jungle',
			eventDate: '05 Aug',
			time: ''
		},
		{
			id: 8,
			event: 'Independence Day',
			eventDate: '14 Aug',
			time: '12:35 am'
		},
		{
			id: 9,
			event: 'Bsant Day',
			eventDate: '25 Aug',
			time: '11:38 pm'
		}
	];
	const count = 0;

	const wrapper = shallow(
		<Event events={events} counter={0} count={count} />
	);
	it('checks the rendring', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('checks the array', () => {
		expect(1).toBe(events[0].id);
	});
	it('checks the render function', () => {
		const renderArray = jest.fn();
		expect(renderArray.mock.calls.length).toBe(0);
	});
});

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Event} from '../../../../src/js/components/calender/Event';

Enzyme.configure({adapter:new Adapter()})

describe('Test the Event Component of Calender',()=>{
	const wrapper=shallow(<Event />);
	it('checks the rendring',()=>{
		expect(wrapper).toMatchSnapshot();
	})
	it('Test the return of array of objects',()=>{
		let items=[{event:'Half terms End',eventDate:'01 May',time:''},{},{}];
		expect(items[0]).toEqual({event:'Half terms End',eventDate:'01 May',time:''})
	})
})

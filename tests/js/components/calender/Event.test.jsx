import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Event} from '../../../../src/js/components/calender/Event';

Enzyme.configure({adapter:new Adapter()})

describe('Test the Event Component of Calender',()=>{

	let items=[{event:'Half terms End',eventDate:'01 May',time:''},{},{}];
	let counter=0;
	const wrapper=shallow(<Event counter={counter} items={items} />);
	it('checks the rendring',()=>{
		expect(wrapper).toMatchSnapshot();
	})
	
})

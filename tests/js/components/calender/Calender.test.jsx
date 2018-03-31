import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calender from '../../../../src/js/components/calender/Calender';

Enzyme.configure({adapter:new Adapter()});

describe('Test the Calender Component',()=>{
	const wrapper=shallow(<Calender />)
	it('checks the rendering of calender app component',()=>{
		expect(wrapper).toMatchSnapshot();
	})
})
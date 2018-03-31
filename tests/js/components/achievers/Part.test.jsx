import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Part from '../../../../src/js/components/achievers/Part';

Enzyme.configure({adapter:new Adapter()});

describe('Test the Part Component',()=>{
	const wrapper=shallow(<Part text={''} textHeading={''} image={''} />)
	it('test the rendring',()=>{
		expect(wrapper).toMatchSnapshot();
	})
})
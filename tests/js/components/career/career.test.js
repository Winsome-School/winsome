import React from 'react';
import Career from '../../../../src/js/components/career/Career.jsx';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});


describe('Tests the Career Component',()=>{

		let wrapper = shallow(<Career/>);
		
		it('renders the Career Component',()=>{
			expect(wrapper).toMatchSnapshot();
		});

});

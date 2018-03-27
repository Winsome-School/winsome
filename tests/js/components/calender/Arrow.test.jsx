import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Arrow} from '../../../../src/js/components/calender/Arrow'

Enzyme.configure({adapter:new Adapter()});

describe('Test the Arrow Component',()=>{
	const wrapper=shallow(<Arrow />)
	const onClickRightArrow=jest.fn();
	const onClickLeftArrow=jest.fn();
	it('checks the rendring of the Arrow component',()=>{
		expect(wrapper).toMatchSnapshot();
	})
	it('checks the Left Click',()=>{
		wrapper.find('.arrowLeft').simulate('click')
	})
	it('checks the Right Click',()=>{
		wrapper.find('.arrowRight').simulate('click')
	})
})
	



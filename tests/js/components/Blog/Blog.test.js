import React from 'react';
import { Blog } from '../../../../src/js/components/Whatshappen/Blog.jsx';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});


describe('Tests the Whatshappen Blog Component',()=>{

		let nextViewToSaga = jest.fn();
  		let previousViewToSaga = jest.fn();
  		let initialBlogViewToSaga = jest.fn();

  		let data = {
			selectedView: [{},{}],
			respView: [{}],
			firstIndexofSelectedView: 0,
			indexofRespView: 0
		};

		let wrapper = shallow(<Blog
  			previousViewToSaga = {previousViewToSaga}
  			nextViewToSaga = {nextViewToSaga}
  			initialBlogViewToSaga = {initialBlogViewToSaga}
  			viewData = {data}
			/>);
		
		it('renders the Whatshappen Blog Component',()=>{
			expect(wrapper).toMatchSnapshot();
		});

		it('test that initialBlogViewToSaga fun run onpage load',()=>{

			expect(initialBlogViewToSaga.mock.calls.length).toBe(1);
		});

		it('test that nextViewToSaga fun run',()=>{
				wrapper.find('#next').simulate('click');
				expect(nextViewToSaga.mock.calls.length).toBe(1);
		});

			
		it('test that previousViewToSaga fun run',()=>{
				wrapper.find('#previous').simulate('click');
				expect(previousViewToSaga.mock.calls.length).toBe(1);
		});


		
		

});

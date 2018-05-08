import React from 'react';
import News from '../../../../src/js/components/News/News.jsx';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

let wrapper = shallow(<News/>);

it('test the News Component',()=>{
	expect(wrapper).toMatchSnapshot();
});

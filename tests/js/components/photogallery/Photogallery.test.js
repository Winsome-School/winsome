import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Gallery from '../../../../src/js/components/gallery/Gallery';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Gallery Component', () => {
	
  const wrapper = shallow(<Gallery />);
  it('Renders Gallery Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

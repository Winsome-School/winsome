import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReadMoreButton from '../../../../src/js/components/promo/ReadMoreButton';

Enzyme.configure({ adapter: new Adapter() });

describe('testing ReadMoreButton component', () => {
  const wrapper = shallow(<ReadMoreButton align={'center'} />);
  it('renders the ReadMoreButton component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
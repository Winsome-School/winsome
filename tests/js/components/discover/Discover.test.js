import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Discover from '../../../../src/js/components/discover/Discover';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Discover component', () => {
  const wrapper = shallow(<Discover />);
  it('renders the Discover component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import JuniorSchool from '../../../../src/js/components/promo/JuniorSchool';

Enzyme.configure({ adapter: new Adapter() });

describe('testing JuniorSchool component', () => {
  const wrapper = shallow(<JuniorSchool />);
  it('renders the JuniorSchool component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
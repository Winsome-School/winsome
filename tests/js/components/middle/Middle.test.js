import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Middle from '../../../../src/js/components/middle/Middle';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Middle Component', () => {
  const wrapper = shallow(<Middle />);
  it('Renders Middle Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

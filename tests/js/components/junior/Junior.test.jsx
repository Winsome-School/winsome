import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Junior from '../../../../src/js/components/Junior/Junior';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Junior component', () => {
  const wrapper = shallow(<Junior />);
  it('renders the Junior component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

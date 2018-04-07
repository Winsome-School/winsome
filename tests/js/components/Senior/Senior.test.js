import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Senior from '../../../../src/js/components/senior/Senior';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Senior component', () => {
  const wrapper = shallow(<Senior />);
  it('renders the Senior component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


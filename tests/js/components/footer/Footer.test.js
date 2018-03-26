import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from '../../../../src/js/components/footer/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Footer component', () => {
  const wrapper = shallow(<Footer />);
  it('renders the Footer component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

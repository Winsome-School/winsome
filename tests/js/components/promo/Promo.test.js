import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Promo from '../../../../src/js/components/promo/app';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Promo component', () => {
  const wrapper = shallow(<Promo />);
  it('renders the Promo component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
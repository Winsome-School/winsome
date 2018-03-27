import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Promo } from '../../../../src/js/components/promo/Promo';

Enzyme.configure({ adapter: new Adapter() });

describe('testing Promo component', () => {
  const promoData = [
    {id: 1},
    {id: 2}
  ]
  const wrapper = shallow(<Promo promoData={promoData} id={promoData[0].id}/>);
  it('renders the Promo component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
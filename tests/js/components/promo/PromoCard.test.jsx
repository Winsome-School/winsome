import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PromoCard from '../../../../src/js/components/promo/PromoCard';

Enzyme.configure({ adapter: new Adapter() });

describe('testing PromoCard component', () => {
  const data = {
    promoCardId: 1,
    title: "Our School",
    description: "We would like to extend a warm welcome to Winsome School System and take a few moments to share our vision with you. We are a healthy, thriving educational community catering to students in Childcare through to Year 10.The school has enjoyed a strong academic achievement record, and an engaging, varied curriculum. The school’s co-curricular activities and unique programs all reinforce our desire to develop the whole child.",
    imageLink: "./img/our-school-photo.jpg",
    readMoreLink: "",
    imageDirection: "left"
  };
  const wrapper = shallow(<PromoCard data={data} />);
  it('renders the PromoCard component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
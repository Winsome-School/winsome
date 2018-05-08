import React from 'react';
import { SignIn } from '../../../../src/js/components/signin/SignIn.jsx';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Tests the SignIn Component', () => {
	let data = {
		user: '',
		pass: '',
		usermatch: false,
		loginMsg: ''
	};

	let getUserAction = jest.fn();
	let getPassAction = jest.fn();
	let loginAction = jest.fn();

	let wrapper = shallow(
		<SignIn
			getUserAction={getUserAction}
			getPassAction={getPassAction}
			loginAction={loginAction}
			loginData={data}
		/>
	);

	it('renders the SignIn Component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('renders the SignIn Component with userMatch True', () => {
		let data = {
			user: '',
			pass: '',
			usermatch: true,
			loginMsg: ''
		};
		let wrapper = shallow(
			<SignIn
				getUserAction={getUserAction}
				getPassAction={getPassAction}
				loginAction={loginAction}
				loginData={data}
			/>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('test that getUserAction runs', () => {
		wrapper.find('#username').simulate('change', { target: { value: '' } });
		expect(getUserAction.mock.calls[0]).toEqual(['']);
	});

	it('test that getPassAction runs', () => {
		wrapper.find('#password').simulate('change', { target: { value: '' } });
		expect(getPassAction.mock.calls[0]).toEqual(['']);
	});

	it('test that loginAction runs', () => {
		wrapper.find('#submit').simulate('click');
		expect(loginAction.mock.calls.length).toBe(1);
	});
});

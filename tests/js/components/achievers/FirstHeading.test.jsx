import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FirstHeading from '../../../../src/js/components/achievers/FirstHeading'

Enzyme.configure({adapter:new Adapter()})

describe('Checks the rendering of the FirstHeading',()=>{

	const achieversData={
	firstPart:{
		heading:'',
		text:''
		
	},
	class17Data:{
		textYear:'',
		data:[
			{
				textHeading:'',
				text:'',
				image:''
			},
			{
				textHeading:'Ahmed',
				text:'',
				image:''
			},
			{
				textHeading:'Waqar',
				text:'',
				image:''
			},
			{
				textHeading:'Ahsan',
				text:'',
				image:''
			},
			{
				textHeading:'Hassan',
				text:'',
				image:''
			}
		]
	},
	class16Data:{
		textYear:'',
		data:[
			{
				textHeading:'Rehan',
				text:'',
				image:''
			},
			{
				textHeading:'Taimoor',
				text:'',
				image:''
			},
			{
				textHeading:'Mushraf',
				text:'',
				image:''
			}
		]
	}
}
	const wrapper=shallow( <FirstHeading heading={achieversData.firstPart.heading} text={achieversData.firstPart.text}/>)
	it('checks the rendering of component',()=>{
		expect(wrapper).toMatchSnapshot();
	})
})
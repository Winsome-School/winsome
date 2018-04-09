import React from 'react';
import MediaQuery from 'react-responsive';
import Content from './Content';

const Desktop = props => (
	<MediaQuery {...props} maxWidth={1400} minWidth={992} />
);
const Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} minWidth={600} />;
const SmallMobile = props => (
	<MediaQuery {...props} maxWidth={601} minWidth={468} />
);
const ExtraSmallMobile = props => <MediaQuery {...props} maxWidth={468} />;
const Calender = () => (
	<div>
		<Desktop>
			<Content count={4} />
		</Desktop>
		<Tablet>
			<Content count={3} />
		</Tablet>
		<Mobile>
			<Content count={2} />
		</Mobile>
		<SmallMobile>
			<Content count={1} />
		</SmallMobile>
		<ExtraSmallMobile>
			<Content count={1} />
		</ExtraSmallMobile>
	</div>
);

export default Calender;

import React from 'react';

// styled components
import { SubHeadingContainer } from './subheading.styles';

const SubHeading = ({ subheading }) => (
	<SubHeadingContainer>
		<div>{subheading}</div>
	</SubHeadingContainer>
);

export default SubHeading;

import React from 'react';

// styled components
import { MainContainer, FormContainer } from './forms.styles';

// components
import PageTitle from '../page-title/page-title.component';
import SubHeading from '../subheading/subheading.component';

const Forms = ({ title, subheading, children }) => (
  <div>
    <PageTitle>
      {title}
    </PageTitle>
    <MainContainer>
      <SubHeading 
        subheading={subheading}
      />
      <FormContainer>
        {children}
      </FormContainer>
    </MainContainer>

  </div>
);

export default Forms;

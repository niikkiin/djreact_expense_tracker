import React from 'react';

// styled components
import { PageTitleHeading } from './page-title.styles';

const PageTitle = ({ children }) => (
  <PageTitleHeading>
    {children}
  </PageTitleHeading>
)

export default PageTitle;
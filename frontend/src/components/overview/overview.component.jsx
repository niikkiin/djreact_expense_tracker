import React from 'react';

// styled components
import { OverViewContainer, HeaderContainer, CustomButtonContainer, LinkContainer } from './overview.styles';

// components
import PageTitle from '../page-title/page-title.component';
import Table from '../table/table.component';

// icon
import { InlineIcon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';


const OverView = ({ title, buttonTitle, tableHeadings, buttonLink }) => (
  <OverViewContainer>
    <HeaderContainer>
      <PageTitle>
        {title}
      </PageTitle>
      <LinkContainer to={buttonLink}>
        <CustomButtonContainer lightButton>
          <span>
            {buttonTitle} 
          </span>
            <InlineIcon className='icon' icon={plusOutlined} />
        </CustomButtonContainer>
      </LinkContainer>
    </HeaderContainer>
    <Table tableHeadings={tableHeadings}>

    </Table>

  </OverViewContainer>
);

export default OverView;
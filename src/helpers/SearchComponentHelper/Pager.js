import React from 'react';
import { Pagination, Icon } from 'semantic-ui-react';

const Pager = (handle, currentPage, totalNumberOfPages) => (
  <Pagination
    onPageChange={handle}
    activePage={currentPage}
    ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
    firstItem={{ content: <Icon name="angle double left" />, icon: true }}
    lastItem={{ content: <Icon name="angle double right" />, icon: true }}
    prevItem={{ content: <Icon name="angle left" />, icon: true }}
    nextItem={{ content: <Icon name="angle right" />, icon: true }}
    totalPages={totalNumberOfPages}
  />
);

export default Pager;

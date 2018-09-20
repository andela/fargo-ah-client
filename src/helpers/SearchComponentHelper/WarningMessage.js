import React from 'react';
import { Message } from 'semantic-ui-react';

const warningMessage = (
  <div>
    <Message warning size="small">
      <Message.Header>
            You must select a search criteria
        <strong> (Search By) </strong>
            before making your search
        <i className="long arrow alternate right icon" />
      </Message.Header>
      <p>Search by author, category, tag or title from the dropdow box</p>
    </Message>
  </div>
);

export default warningMessage;

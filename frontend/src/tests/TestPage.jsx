import React from 'react';

import Form from '../core/components/Form';

function TestPage({ match }) {
  return (
    <div className="wrapper">
      <Form index={match.params.id} />
    </div>
  );
}

export default TestPage;

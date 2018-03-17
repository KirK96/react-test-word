import React from 'react';

import Form from '../core/components/Form';

function TestPage({ match }) {
  return (
    <Form index={match.params.id} />
  );
}

export default TestPage;

import React from 'react';

import Form from '../components/Form';

function TestPage({ match }) {
    return (
      <div className="wrapper">
        <Form index ={match.params.id}/>
      </div>
    );
}

export default TestPage;

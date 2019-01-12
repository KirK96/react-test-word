import React from 'react';

import Form from 'app/core/components/Form';

interface IProps {
  match: any;
}

class TestPage extends React.Component<IProps> {
  render() {
    return (
      <div className="wrapper">
        <Form index={this.props.match.params.id} />
      </div>
    );
  }
}

export default TestPage;

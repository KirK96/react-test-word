import React from 'react';
import { Steps } from 'antd';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import Form from '../core/components/Form';

const { Step } = Steps;

@observer
class TestInputPage extends React.Component {
  @observable currentStep = 0;

  @action.bound
  nextStep() {
    this.currentStep++;
  }

  render() {
    return (
      <React.Fragment>
        <Steps
          current={this.currentStep}
          direction='horizontal'
          size='small'
          style={{ position: 'absolute', top: 150, left: 20 }}
        >
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
        <Form width='80vw' test nextStep={this.nextStep} />
      </React.Fragment>
    );
  }
}

export default TestInputPage;

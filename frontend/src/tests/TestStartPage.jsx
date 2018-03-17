import React from 'react';
import { Radio, Switch } from 'antd';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import Button from '../core/components/Button';

const RadioGroup = Radio.Group;

@observer
class TestStartPage extends React.Component {
    @observable currentMode = 'four';
    @observable angryMode = false;

    handleClick = () => console.log('click');
    handleChange = (event) => this.currentMode = event.target.value;
    handleSwitchAngryMode = (checked) => this.angryMode = checked;

    render() {
        return (
            <div className='c-theme'>
                <img className='c-theme__icon' src={`/img/people.png`} alt='img' />
                <h2 className='c-theme__title'>Выберете режим тестирования:</h2>
                <RadioGroup
                    defaultValue='four'
                    size='large'
                    onChange={this.handleChange}
                    style={{ marginBottom: 10 }}
                >
                    <Radio value='four'>4 варианта</Radio>
                    <Radio value='input'>Ввод слова</Radio>
                </RadioGroup>
                <div style={{ display: 'flex', width: '100%' }}>
                    <Switch
                        onChange={this.handleSwitchAngryMode}
                        checkedChildren='angry mode on'
                        unCheckedChildren='angry mode off'
                        style={{ marginBottom: 30 }}
                    />
                </div>
                <Button
                    className='c-theme__submit'
                    value='Начать'
                    path={`/test-word/test/${this.currentMode}`}
                    id={1}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default TestStartPage;
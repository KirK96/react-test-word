import { action, observable, runInAction } from 'mobx';
import axios from 'axios';
import { RouterStore } from 'mobx-react-router';

export class WordStore {
    @observable currentMode = 'fourOptions';
    @observable angryMode = false;

}

export const wordStore = new WordStore();
import { action, observable, runInAction } from 'mobx';
import axios from 'axios';
import { RouterStore } from 'mobx-react-router';

class WordStore extends React.Component {
    @observable
}

export const wordStore = new WordStore();
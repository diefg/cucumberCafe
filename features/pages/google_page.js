import { Selector, t } from 'testcafe';

export default class GooglePage {
    constructor () {
        this.searchBox.Selector('.gLFyf');
        this.googleUrl="www.google.com"
    }
}

function getSucursalBySpan(text) {
    return Selector('span').withText(text);
}

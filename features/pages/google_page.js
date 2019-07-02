import { Selector, t } from 'testcafe';

export default class GooglePage {
    constructor () {
        this.searchBox.Selector('.gLFyf');
        this.googleUrl="www.google.com"
    }
}

async t =>  function getSucursalBySpan(text) {
    await t.click();
    return Selector('span').withText(text);
}

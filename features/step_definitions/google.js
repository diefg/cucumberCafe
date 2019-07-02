import t  from 'testcafe';
const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
const googlePage = require('../support/pages/google-page');

Given('I open Google\'s search page', async t => {
    await t.
    await t.navigateTo('https://google.com')
});
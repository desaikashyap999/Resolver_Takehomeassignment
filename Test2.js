const {Builder, By, Key, until} = require('selenium-webdriver');

async function test2() {

  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Test Objective 1 : Navigate to the homepage
    await driver.get('https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=5823d4c062&attid=0.1&permmsgid=msg-f:1752047120982055917&th=18508592e3e19bed&view=att&disp=inline&ser=1&sadnir=1&saddbat=ANGjdJ_c1h42gRUTxMaLQKKyZzD2i49un124Kjc62UFENEtWgVm7uP4z_aLGpEYU3HTPbqa7kH-u15APlN3TxKL-few16oyWO9F3ukPRoXlwY9obm9bloTz8PqxiynG_mTfMo5-7LR-tQPzpszrsusMLqwdTX8jpbigmF86QiHVmTPD5usS9weLBA_u4atZpPF6seP2xAAr1QC4j4-f1vcga2Ow1pUOZQnQA-k_vPAi0uhZi_j8FnVRoE5qaQBgnvcUbmep9PKI351tdR3IZIZVD2At2vYNbQnAbV_C4myAhwg7rhlog0PkYr01CNeSL0e7A-cO3RQnEzugbjLAhTM5Q69pHWoqNDIJAV4PSEjXX6p_9ngPToDy-0gzmuzJhuvsT47HIkhU79_NpoT-UQALwH6JQOCOcwGTdqLUoDYWWQI9cUFUKfr9W8BBCdsUauLouq2pasN_J1grJSpLMJrgu8QMWbfrKnscWEm_uW0t2fmfqMZ20debEG32x1vPafBIK_LFFmApgmD8N2fScThvCCcP3_OhCW7Cih2c2_Dg2O7OFM4hGY-PPFmG7vklhF8nKNydC7ribsM1SMaryoEFc0XK1Y6gyPbKWZ3SFegTba_c_WcfqkWn4kv8vAxJcjwTIPfHhM_fHse15HGYbCJLk9PTP2_EgDr-4dL9Ryy9MACJ72onHiUPXdjsssFE4HVRYOyQG7Li5ztRNg4aZrN0VfF1NB38sdwIG_62LKJEobLbpuOnAotVkYq6Ea1PATzdCwlKH5OX-SJjTt7Hs6QBS8e0_olytO2BW48IFnpIXj-lyKtxvyDOioo8qVdMQKiGq_2EevSKppeDFUvXG9hdnBUvQ3zr-T0IUVADyr_xmokP9HPcBp6I6Q57Op6DjBVVkgg-mm7YDv0p81rUMTg5DAYsE8pxizSnA_bBwU0I8z7sHiaI-RVgIGXPIHdw');

    // Test Objective 2 : Get the test2 div and check that it has three list items
    let test2Div = await driver.findElement(By.id('m_test-2-div'));
    let listItems = await test2Div.findElements(By.class('m_list-group'));
    if (listItems.length !== 3) {
      throw new Error('Expected 3 list items, found ' + listItems.length);
    }

    // Test Objective 3 : Get the second list item and check its value and badge value
    let secondListItem = listItems[1];
    let value = await secondListItem.getText();
    if (value !== 'List Item 2') {
      throw new Error('Expected value "List Item 2", found ' + value);
    }
    let badge = await secondListItem.findElement(By.class('m.badge'));
    let badgeValue = await badge.getText();
    if (badgeValue !== '6') {
      throw new Error('Expected badge value 6, found ' + badgeValue);
    }

  } finally {
    // Close the browser
    await driver.quit();
  }
}

test();

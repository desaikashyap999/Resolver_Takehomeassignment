const {Builder, By, Key, until} = require('selenium-webdriver');

async function test1() {

  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //Test Objective 1 :  Navigate to the home page
    await driver.get('https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=5823d4c062&attid=0.1&permmsgid=msg-f:1752047120982055917&th=18508592e3e19bed&view=att&disp=inline&ser=1&saddbat=ANGjdJ9O4X4l3eZ_hA7Vl95_Mg7QBepwMwotSQ6Cb59OjCxpz2Ajo9hD2b4x3GLZQIUTQY3adxasYE0i2uDnSk5flvxG6P_qKoVoW5LAEsHl8xw5GSmZOSmM28iu0NhaPFL8LgoaGZHG16DFxIrFdMllZ-ZaSM_CJjKpkSoCXUaeUgk5cHwohgtQb2k7-a5NB53qw8ouHq3rchGXkvsduoZFWwLcIa1izY6hIuQR32AV91T-eSZxHMhpO1QHB4teFCFg6jArd03RzOA51efYcvokkNbhc49MtK4w8qVKwXOCtVefwUrSpqazWeFjURSM2SMIOuJKpJF024kTbaOjyjULwSKP5BYXSI7BT4LC3nzTd1ZtgBBGXtVXfiP_-aEBZSTpf_Aq0zUWR0I9QEO4vVrcm2UcVx7o6YEEafCvaPsyu1Da2w164_GM5KiizYBmEkuzUpp3kJFWjgzvuBWCcgbcQJ2wN8svx2xIXg1cTK-43hxh0qkt-V174mg0l82dsd7DaVakfv40f_O_JTv1AwZ1xNMMBENXla3xumD6VyLuJeCO6N1IkK1NeQhhxd3gK7ON8uRudUjaLCpUu84udc1qNOAEzbEtqYy4zFNz19Sn38fWmFQFJ6l-bI5TL6CNrdM0OpM9u9lNE-cYq-X8QwrYrHHc0GgN-T59MJWpPLWoXfCY36h4AkmxRtb9J5Ps_f7KKn3m0H7F1A59g4l4nC4W2MJe4uovY4gb_MfARMN03MNbC59zfPCFtOJzVFZ4bPGviQgp0F8MxoPFwpwhTlapwYYgqhFOV0eZMW2baFL9QrH1d_Su98sNS9B_-f05LtQ_blNww_zg9RzBdSumkUlqd60riEtHAQDRlc_TPlyDvbGJmGgGO5iFDfzI4sESBA0eLPsgo-TNJj5pmJqp5m0nxNYoZy1T8ae5Z2uHIbLPd2TX3BLWSV2hyd5jRqI#m__');

    //Test Objective 2 : Assert that both the email address and password inputs are present as well as the login button
    let emailInput = await driver.findElement(By.id('m_inputEmail'));
    let passwordInput = await driver.findElement(By.id('m_inputPassword'));
    let signinButton = await driver.findElement(By.css('.m_btn-block'));

    // Test Objective 3 : Enter in an email address and password combination into the respective fields
    await emailInput.sendKeys('kashyap.d@resolver.com');
    await passwordInput.sendKeys('testpassword123');

    // Click on the signin button
    await signinButton.click();

  } finally {
    // Close the browser
   await driver.quit();
  }
}

test();

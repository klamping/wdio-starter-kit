const Login = require('./Login.page.js');

const login = new Login();

describe('Login Page', function () {
  // Replace with valid email address & password
  const validEmail = 'valid@email.com';
  const validPass = 'asdasd';

  beforeEach(function () {
    // Replace URL with correct login page
    browser.url('./');
  });

  it('should look nice', function () {
    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should let you login with valid credentials', function () {
    login.login(validEmail, validPass);

    expect(login.isLoggedIn()).to.be.true;
  });

  it('should error on a missing email', function () {
    login.login('', validPass);

    expect(login.isLoggedIn()).to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on a invalid email', function () {
    login.login('invalid', validPass);

    expect(login.isLoggedIn()).to.be.false;
  });

  it('should error on missing password', function () {
    login.login(validEmail, '');

    expect(login.isLoggedIn()).to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should link to the registration page', function () {
    login.signUpLink.click();

    expect(browser.getUrl()).to.contain('register.html');
  });
});

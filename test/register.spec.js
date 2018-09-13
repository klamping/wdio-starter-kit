const Register = require('./Register.page.js');

const register = new Register();

describe('Registration Page', function () {
  // Replace with valid email address & password
  const validEmail = 'valid@email.com';
  const validPass = 'asdasd';

  beforeEach(function () {
    browser.url('./REPLACEME');
  });

  it('should look nice', function () {
    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should let your register with proper credentials', function () {
    register.register(validEmail, validPass);

    expect(register.isRegistered()).to.be.true;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on a invalid email', function () {
    register.register('invalid', validPass);

    expect(register.isRegistered()).to.be.false;
  });

  it('should error on missing password', function () {
    register.register(validEmail, '');

    expect(register.isRegistered()).to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on mismatched password', function () {
    register.register(validEmail, validPass, validPass + 'b');

    expect(register.isRegistered()).to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on too short of password', function () {
    register.register(validEmail, 'aaa');

    expect(register.isRegistered()).to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should let you go back to homepage', function () {
    register.accountLoginLink.click();

    expect(browser.getUrl()).to.contain('index.html');
  });
});

class Register {
  // Replace these selectors
  get email () { return $('input[name="email"]'); }
  get password () { return $('input[name="password"]'); }
  get confirmPassword () { return $('input[name="confirmPassword"]'); }
  get submit () { return $('button*=Register'); }
  get accountLoginLink () { return $('*=Already have an account?'); }

  register (email, password, confirmPassword) {
    confirmPassword = typeof confirmPassword == 'string' ? confirmPassword : password;

    this.email.setValue(email);
    this.password.setValue(password);
    this.confirmPassword.setValue(confirmPassword);

    this.submit.click();
  }

  isRegistered () {
    // Replace this with an Boolean response that identifies if you've successfully registered
    // example: return browser.getUrl().includes('REPLACEME');
  }
}

module.exports = Register;
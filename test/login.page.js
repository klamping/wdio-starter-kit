class Login {
  // Replace these selectors
  get email () { return $('input[name="email"]'); }
  get password () { return $('input[name="password"]'); }
  get submit () { return $('button*=Login'); }
  get signUpLink () { return $('*=Sign Up'); }

  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  isLoggedIn () {
    // Replace this with an Boolean response that identifies if you're logged in
    // example: return browser.getUrl().includes('REPLACEME');
  }
}

module.exports = Login;

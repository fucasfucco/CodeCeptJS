// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    //Exemplo de custom step para login
    login: function(email, password) {
      this.fillField('Email', email);
      this.fillField('Password', password);
      this.click('Submit');
    }

  });
}

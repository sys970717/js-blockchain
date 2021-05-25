class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.email = '';

    this.setEmailDomain();
  }

  setEmailDomain(emailAddress) {
    this.email = emailAddress || '@gmail.com';
  }

  getEmailDomain(){
    return `${this.name}@${this.email}`;
  }
}

module.exports = User;
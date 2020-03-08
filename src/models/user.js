class User {
  // Constructor sets default properties or default object as a whole, respectively
  // https://stackoverflow.com/questions/31342290/es6-classes-default-value/31343459
  constructor({
    name = null,
    email = null,
    username = null,
    birthday = null,
    phoneNumber = null,
    city = null,
    region = null,
    country = null
  } = {
    name: null,
    email: null,
    username: null,
    birthday: null,
    phoneNumber: null,
    city: null,
    region: null,
    country: null
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.birthday = birthday;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.region = region;
    this.country = country;
  }
}

module.exports = User;
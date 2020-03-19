class User {
  // Constructor sets default properties or default object as a whole, respectively
  // https://stackoverflow.com/questions/31342290/es6-classes-default-value/31343459
  constructor({
    id = undefined,
    name = null,
    email = null,
    username = null,
    birthday = null,
    phoneNumber = null,
    city = null,
    region = null,
    country = null
  } = {
    id: undefined,
    name: null,
    email: null,
    username: null,
    birthday: null,
    phoneNumber: null,
    city: null,
    region: null,
    country: null
  }) {
    this.id = id;
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
class User {
  id;
  streamId;
  email;
  name;
  age;
  country;
  city;
  aiIdeal;
  matchAges;
  matchCountry;
  matchCity;
  matchMaxDistance;

  User({ id, email, name }) {
    this.id = id;
    this.streamId = "";
    this.email = email;
    this.name = name;
    this.age = 0;
    this.country = "";
    this.city = "";
    this.aiIdeal = "";
    this.matchAges = [];
    this.matchCountry = "";
    this.matchCity = "";
    this.matchMaxDistance = 1000;
  }
}

export default User;
